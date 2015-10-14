/* global d3 */

/*
 * Input: "d", a D3 node from the layout, typically resembling:
 *     parent: ...,  // parent D3 node
 *     data: {
 *         key: ..., // function name
 *         value: {
 *             svTotal: ...,
 *             t: ...,
 *             ch: ...
 *         }
 *     }
 * Output: an object describing the raw flame graph data, matching the form:
 *     "": {
 *         svTotal: ...
 *         t: ...
 *         ch: {
 *             key1: { // function name
 *                 svTotal: ...
 *                 t: ...
 *                 ch: ...
 *             },
 *             ...
 *         }
 *     }
 */

/* Configuration */
// var svSvgWidth = null;      /* image width (null to auto-compute) */
// var svSvgHeight = null;     /* image height (null to auto-compute) */
var svAxisLabelWidth = 45;  /* width of axis labels */
// var svChartWidth = null;    /* width of chart part of image */
// var svChartHeight = null;   /* height of chart part of image */
var svGrowDown = false;     /* if true, stacks are drawn growing down */
var svTransitionTime = 2000;    /* time for transition */
var svCornerPixels = 4;     /* radius of rounded corners */
var svTextPaddingLeft = 5;  /* padding-left on rectangle labels */
var svTextPaddingRight = 10;    /* pading-right on rectangle labels */
var svTextPaddingTop = '1.0em'; /* padding-top on rectangle labels */
var svColorMode = 'mono';   /* coloring mode */
// var svDetailMode = 'popout';    /* detail display mode ("zoom" or "popout") */

/*
 * Build a flame graph rooted at the given "node" (a D3 selection) with the
 * given "rawdata" tree.  The graph will have size defined by "pwidth" and
 * "pheight".  "context" is used for notifications about UI actions.
 */
function FlameGraph(node, rawdata, pwidth, pheight, context, options) {
    function svCreateBarLabel(d) {
        var nconc = d.data.value.nconc;

        if (nconc) {
            return d.data.key + ' (' + nconc + ')';
        } else {
            return d.data.key;
        }
    }

    var axiswidth, chartheight, rect, scale, nodeid, axis, data;
    var fg = this;

    this.fg_context = context;
    this.fg_maxdepth = 0;
    this.fg_maxunique = 0;
    this.fg_depthsamples = [];
    this.computeDepth(rawdata, 0);

    options.coloring = options.coloring || svColorMode;
    if (options.hasOwnProperty('growDown') === false) {
        options.growDown = svGrowDown;
    }

    if (options.axisLabels) {
        axiswidth = this.fg_axiswidth = svAxisLabelWidth;
    } else {
        axiswidth = this.fg_axiswidth = 0;
    }

    this.fg_svgwidth = pwidth !== null ? pwidth :
        parseInt(node.style('width'), 10);
    this.fg_svgheight = pheight !== null ? pheight : 25 * this.fg_maxdepth;
    this.fg_chartwidth = this.fg_svgwidth - axiswidth;
    chartheight = this.fg_chartheight = this.fg_svgheight - axiswidth;

    this.fg_xscale =
        d3.scale.linear().range([0, this.fg_chartwidth]);
    this.fg_yscale =
        d3.scale.linear().range([0, this.fg_chartheight]);

    this.fg_svg = node.append('svg:svg');
    this.fg_svg.attr('width', this.fg_svgwidth);
    this.fg_svg.attr('height', this.fg_svgheight);

    /* Create a background rectangle that resets the view when clicked. */
    rect = this.fg_svg.append('svg:rect');
    rect.attr('class', 'svBackground');
    rect.attr('width', this.fg_svgwidth);
    rect.attr('height', this.fg_svgheight);
    rect.attr('fill', '#ffffff');
    rect.on('click', this.detailClose.bind(this));
    rect.on('dblclick', this.detailClose.bind(this));

    /* Configure the partition layout. */
    this.fg_part = d3.layout.partition();
    this.fg_part.children(function (d) {
        return d3.entries(d.value.ch);
    });
    this.fg_part.value(function (d) { return (d.value.svTotal); });
    this.fg_part.sort(function (d1, d2) {
        return (d1.data.key.localeCompare(d2.data.key));
    });

    /* Configure the color function. */
    if (options.coloring === 'random') {
        scale = d3.scale.category20c();
        this.fg_color = function (d) { return (scale(d.data.key)); };
    } else {
        this.fg_color = function (d) {
            if (d.data.value.svSynthetic) {
                return ('#ffffff');
            }

            return (options.getNodeColor(d.data.value.cont));
        };
    }

    /* Configure the actual D3 components. */
    nodeid = this.fg_nodeid = function (d) {
        return (encodeURIComponent([
            d.data.key,
            fg.fg_yscale(d.y),
            fg.fg_xscale(d.x) ].join('@')));
    };
    this.fg_rectwidth = function (d) { return (fg.fg_xscale(d.dx)); };
    this.fg_height = function (d) {
        return (fg.fg_yscale(d.dy));
    };
    this.fg_textwidth = function (d) {
        return (Math.max(0, fg.fg_rectwidth(d) - svTextPaddingRight));
    };
    this.fg_x = function (d) {
        return (fg.fg_xscale(d.x) + fg.fg_axiswidth); };

    if (options.growDown) {
        this.fg_y = function (d) { return (fg.fg_yscale(d.y)); };
    } else {
        this.fg_y = function (d) {
            return (chartheight - fg.fg_yscale(d.y));
        };
    }

    data = this.fg_part(d3.entries(rawdata)[0]);
    this.fg_rects = this.fg_svg.selectAll('rect').data(data).
        enter().append('svg:rect').
        attr('class', function (d) {
        return (d.data.value.svSynthetic ?  'svBoxSynthetic' : 'svBox');
        }).
        attr('x', this.fg_x).
        attr('y', this.fg_y).
        attr('rx', svCornerPixels).
        attr('ry', svCornerPixels).
        attr('height', this.fg_height).
        attr('width', this.fg_rectwidth).
        attr('fill', this.fg_color).
        on('click', context.select.bind(this)).
        on('dblclick', this.detailOpen.bind(this)).
        on('mouseover', this.mouseover.bind(this)).
        on('mouseout', this.mouseout.bind(this));
    this.fg_clips = this.fg_svg.selectAll('clipPath').data(data).
        enter().append('svg:clipPath').
        attr('id', nodeid).
        append('svg:rect').
        attr('x', this.fg_x).
        attr('y', this.fg_y).
        attr('width', this.fg_textwidth).
        attr('height', this.fg_height);
    this.fg_text = this.fg_svg.selectAll('text').data(data).
        enter().append('text').
        attr('class', 'svBoxLabel').
        attr('x', this.fg_x).
        attr('y', this.fg_y).
        attr('dx', svTextPaddingLeft).
        attr('dy', svTextPaddingTop). // 12
        attr('clip-path', function (d) {
        return ('url("#' + nodeid(d) + '")');
        }).
        on('click', context.select.bind(this)).
        on('dblclick', this.detailOpen.bind(this)).
        on('mouseover', this.mouseover.bind(this)).
        on('mouseout', this.mouseout.bind(this)).
        text(function (d) { return svCreateBarLabel(d); });

    if (options.axisLabels) {
        axis = this.fg_svg.append('text');
        axis.attr('class', 'svYAxisLabel');
        axis.attr('x', -this.fg_svgheight);
        axis.attr('dx', '8em');
        axis.attr('y', '30px');
        axis.attr('transform', 'rotate(-90)');
        axis.text('Tiers');

        axis = this.fg_svg.append('text');
        axis.attr('class', 'svYAxisLabel');
        axis.attr('x', '30px');
        axis.attr('dx', '8em');
        /*
         * Magic constants here:
         *   30 is the height of the label (since we're specifying the
         *   top coordinate), and 25 is the height of each block
         *   (because there's an invisible row we want to cover up).
         */
        axis.attr('y', this.fg_svgheight - 30 - 25);
        axis.attr('width', this.fg_svgwidth - 30);
//      axis.text('Percentage of Samples');
    }
}


FlameGraph.prototype.computeDepth = function (tree, depth) {
    var key, rem;

    if (depth > this.fg_maxdepth) {
        this.fg_maxdepth = depth;
    }

    if (depth >= this.fg_depthsamples.length) {
        this.fg_depthsamples[depth] = 0;
    }

    for (key in tree) {
        if (tree[key].t > this.fg_maxunique) {
            this.fg_maxunique = tree[key].t;
        }
        this.fg_depthsamples[depth] += tree[key].svTotal;
        this.computeDepth(tree[key].ch, depth + 1);

        rem = tree[key].t;
        if (rem > 0 && tree[key].ch[''] === undefined) {
            tree[key].ch[''] = {
                'svSynthetic': true,
                't': rem,
                'svTotal': rem,
                'ch': {}
            };
        }
    }
};

FlameGraph.prototype.detailClose = function () {
    if (this.fg_context !== null) {
        this.fg_context.detailClose();
    }
};

FlameGraph.prototype.detailOpen = function (d) {
    if (!d.data.value.svSynthetic && this.fg_context !== null) {
        this.fg_context.detailOpen(d);
    }
};

FlameGraph.prototype.mouseover = function (d) {
    if (d.data.value.svSynthetic || this.fg_context === null) {
        return;
    }

    var nsamples, nunique;
    var pctSamples, pctUnique;
    var detail;
    var fg = this;

    nsamples = d.data.value.svTotal;
    pctSamples = (100 * nsamples / this.fg_depthsamples[0]).toFixed(1);

    nunique = d.data.value.t;
    pctUnique = (100 * nunique / this.fg_depthsamples[0]).toFixed(1);

    detail = {
        'label': d.data.key,
        'nsamples': d.data.value.svTotal,
        'nunique': d.data.value.t,
        'nallsamples': this.fg_depthsamples[0],
        'pctSamples': pctSamples,
        'pctUnique': pctUnique,
        'x': d3.event.pageX,
        'y': d3.event.pageY
    };

    this.fg_hoverto = setTimeout(function () {
        fg.fg_hoverto = null;
        fg.fg_context.mouseover(d, detail);
    }, 50);
};

FlameGraph.prototype.mouseout = function (d) {
    if (this.fg_hoverto) {
        clearTimeout(this.fg_hoverto);
    }
    if (this.fg_context !== null) {
        this.fg_context.mouseout(d);
    }
};

FlameGraph.prototype.zoomSet = function (cd) {
    var fg = this;

    this.fg_xscale.domain([cd.x, cd.x + cd.dx]);
    this.fg_rectwidth = function (d) {
        return (fg.fg_xscale(d.x + d.dx) - fg.fg_xscale(d.x));
    };
    this.fg_textwidth = function (d) {
        return (Math.max(0,
            fg.fg_xscale(d.x + d.dx) -
            fg.fg_xscale(d.x) - svTextPaddingRight));
    };
    this.fg_rects.transition().duration(svTransitionTime).
        attr('x', this.fg_x).
        attr('width', this.fg_rectwidth);
    this.fg_clips.transition().duration(svTransitionTime).
        attr('x', this.fg_x).
        attr('width', this.fg_textwidth);
    this.fg_text.transition().duration(svTransitionTime).
        attr('x', this.fg_x);
};

export default FlameGraph;