/* global d3 */

import Ember from 'ember';
import SDPanel from '../components/sd-panel';
import fmtTimeInterval from 'flame-ui/helpers/fmt-time-interval';
import FlameGraph from 'flame-ui/lib/flame-graph';

export default SDPanel.extend({
    colorStore: Ember.inject.service('color-store'),

    classNames: [ 'flame-ui '],

    init() {
        this._super();

        this.setInitialState();
    },

    didInsertElement() {
        this.renderChart(this.attrs.data.value, this.attrs.node.value);
    },

    didUpdateAttrs(args) {
        this.setInitialState();

        this.destroyChart();
        this.renderChart(args.newAttrs.data.value, args.newAttrs.node.value);
    },

    setInitialState() {
        var me = this;
        me.setProperties({
            chart:              null,
            activeSpan:         null,
            detailMode:         'popout',
            chartContext:       {
                detailClose: function() {
                    var svPopoutBox = d3.select(`#${me.$().attr('id')} #svPopout`);
                    if (me.get('detailMode') !== 'zoom') {
                        svPopoutBox.html('');
                        svPopoutBox.style('opacity', null);
                        svPopoutBox.style('z-index', null);
                    } else {
                        me.get('chart').zoomSet({ 'x': 0, 'dx': 1, 'y': 0 });
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
                    if (me.get('detailMode') !== 'zoom') {
                        svPopoutBox.html('');
                        new FlameGraph(
                            svPopoutBox,
                            svMakeSubgraphData(d),
                            null,
                            null,
                            me.get('chartContext'),
                            {
                                getNodeColor:   me.getNodeColor.bind(me)
                            });
                        svPopoutBox.style('z-index', 1);
                        svPopoutBox.style('opacity', 1);
                    } else {
                        me.get('chart').zoomSet(d);
                    }
                },
                mouseout: function () {
                    Ember.run(function() {
                        me.set('activeSpan', null);
                    });
                },
                mouseover: function (d, det) {
                    Ember.run(function() {
                        me.set('activeSpan', {
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

    renderChart(data) {
        this.set('chart', new FlameGraph(
            d3.select(`#${this.$().attr('id')} #chart`),
            data,
            null,
            null,
            this.get('chartContext'),
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
        return this.get('colorStore').assignColor(containerName);
    },

    containerNameList: Ember.computed('data', function() {
        function recursion(ch) {
            var keys = Object.keys(ch);
            var i, iz;
            for (i = 0, iz = keys.length; i < iz; i++) {
                if (map[keys[i]] === undefined) {
                    map[keys[i]] = true;
                    list.push(keys[i]);
                }

                if (keys[i].ch) {
                    recursion(keys[i].ch);
                }
            }
        }

        var list = [];
        var map = {};

        recursion(this.get('data')[''].ch);

        return list;
    }),

    legendItems: Ember.computed('containerNameList', function() {
        return this.get('containerNameList').map(function(containerName) {
            return {
                name:   containerName,
                color:  this.get('colorStore').assignColor(containerName)
            };
        }, this);
    })
});
