/* global d3 */

import Ember from 'ember';
import SDPanel from '../components/sd-panel';
import fmtTimeInterval from 'flame-ui/helpers/fmt-time-interval';
import FlameGraph from 'flame-ui/lib/flame-graph';

var get = Ember.get;
var set = Ember.set;
var setProperties = Ember.setProperties;

export default SDPanel.extend({
    colorStore: Ember.inject.service('color-store'),

    classNames: [ 'flame-ui' ],

    aggregationOptions: Ember.A([
        {
            value: 'avg',
            name:  'Average'
        },
        {
            value: 'min',
            name:  'Minimum'
        },
        {
            value: 'max',
            name:  'Maximum'
        }
    ]),

    init() {
        this._super();

        var me = this;
        setProperties(me, {
            activeSpan:     null,
            chart:          null,
            detailMode:     'popout',
            chartContext:   {
                detailClose: function() {
                    var svPopoutBox = d3.select(`#${me.$().attr('id')} #svPopout`);
                    if (get(me, 'detailMode') !== 'zoom') {
                        svPopoutBox.html('');
                        svPopoutBox.style('opacity', null);
                        svPopoutBox.style('z-index', null);
                    } else {
                        get(me, 'chart').zoomSet({ 'x': 0, 'dx': 1, 'y': 0 });
                    }
                },
                detailOpen: function svDetailOpen(d) {
                    function svMakeSubgraphData(d) {
                        /*
                         * First, construct everything from the current node to all of its
                         * leafs.
                         */
                        var tree, oldtree;

                        tree = {};
                        tree[d.data.key] = d.data.value;

                        while (d.parent !== undefined) {
                            oldtree = tree;
                            tree = {};
                            tree[d.parent.data.key] = {
                                't': d.parent.data.value.t,
                                'svTotal': d.parent.data.value.svTotal,
                                'ch': oldtree
                            };
                            d = d.parent;
                        }

                        return (tree);
                    }

                    var svPopoutBox = d3.select(`#${me.$().attr('id')} #svPopout`);
                    if (get(me, 'detailMode') !== 'zoom') {
                        svPopoutBox.html('');
                        new FlameGraph(
                            svPopoutBox,
                            svMakeSubgraphData(d),
                            null,
                            null,
                            get(me, 'chartContext'),
                            {
                                getNodeColor: me.getNodeColor.bind(me)
                            });
                        svPopoutBox.style('z-index', 1);
                        svPopoutBox.style('opacity', 1);
                    } else {
                        get(me, 'chart').zoomSet(d);
                    }
                },
                mouseout: function () {
                    Ember.run(function() {
                        set(me, 'activeSpan', null);
                    });
                },
                mouseover: function (d, det) {
                    Ember.run(function() {
                        set(me, 'activeSpan', {
                            name:           det.label,
                            container:      d.data.value.cont,
                            commandLine:    d.data.value.exe,
                            timeTotal:      fmtTimeInterval(d.data.value.tt, 3, 1).output,
                            timeInNode:     fmtTimeInterval(d.data.value.t, 3, 1).output,
                            childCount:     d.data.value.nconc
                        });
                    });
                },
                select: function(d) {
                    Ember.run(function() {
                        me.sendAction('select', d);
                    });
                }
            }
        });
    },

    didInsertElement() {
        if (this.attrs.data.value) {
            this.renderChart(this.attrs.data.value, this.attrs.node.value);
        }
    },

    didUpdateAttrs(args) {
        set(this, 'activeSpan', null);

        if (args.newAttrs.data.value !== args.oldAttrs.data.value) {
            this.destroyChart();
            if (args.newAttrs.data.value) {
                this.renderChart(args.newAttrs.data.value, args.newAttrs.node.value);
            }
        }
    },

    renderChart(data) {
        set(this, 'chart', new FlameGraph(
            d3.select(`#${this.$().attr('id')} #chart`),
            data,
            null,
            null,
            get(this, 'chartContext'),
            {
                axisLabels:     true,
                getNodeColor:   this.getNodeColor.bind(this)
            }
        ));
    },

    destroyChart() {
        d3.select(`#${this.$().attr('id')} #chart`).html("");
    },

    getNodeColor(containerName) {
        return get(this, 'colorStore').assignColor(containerName);
    },

    containerNameList: Ember.computed('data', function() {
        function recursion(ch) {
            var keys = Object.keys(ch);
            var i, iz;
            for (i = 0, iz = keys.length; i < iz; i++) {
                if (ch[keys[i]].cont && map[ch[keys[i]].cont] === undefined) {
                    map[ch[keys[i]].cont] = true;
                    list.push(ch[keys[i]].cont);
                }

                if (ch[keys[i]].cont && ch[keys[i]].ch) {
                    recursion(ch[keys[i]].ch);
                }
            }
        }

        var list = [];
        var map = {};

        if (this.attrs.data.value) {
            recursion(this.attrs.data.value[''].ch);
        }

        return list;
    }),

    legendItems: Ember.computed('containerNameList', function() {
        return get(this, 'containerNameList').map(function(containerName) {
            return {
                name:   containerName,
                color:  new Ember.Handlebars.SafeString('color: ' + get(this, 'colorStore').assignColor(containerName))
            };
        }, this);
    }),

    actions: {
        changeAggregation(value) {
            this.sendAction('changeAggregation', value);
        }
    }
});
