import Ember from 'ember';

export default Ember.Component.extend({
    init() {
        this._super();

        this.setInitialState();
    },

    setInitialState() {
        this.setProperties({
            svShowChildLogs: false
        });
    },

    lines: Ember.computed('span', 'svShowChildLogs', function() {
        function svAddChildLogs(loglist, dk, dv, retnow) {
            if (dv.logs !== undefined) {
                for (var j = 0; j < dv.logs.length; j++) {
                    dv.logs[j].k = dk;
                    dv.logs[j].d = dv;
                }

                Array.prototype.push.apply(loglist, dv.logs);
            }

            if (retnow === true) {
                return;
            }

            var childs = dv.ch;
            for (var ch in childs) {
                svAddChildLogs(loglist, ch, childs[ch]);
            }
        }

        var d = this.get('span');
        var svShowChildLogs = this.get('svShowChildLogs');

        var loglist = [];

        if (svShowChildLogs === false) {
            svAddChildLogs(loglist, d.data.key, d.data.value, true);
        } else {
            svAddChildLogs(loglist, d.data.key, d.data.value);
            loglist.sort(function (a, b) {
                if (a.th === b.th) {
                    return a.tl - b.tl;
                } else {
                    return a.th - b.th;
                }
            });
        }

        var lines = [];
        for (var j = 0; j < loglist.length; j++) {
            var logLine = loglist[j].b.toLowerCase();
            var col;

            //
            // Determine the log text color
            //
            if (logLine.indexOf("err") > -1) {
                col = '#ff0000';
            } else if (logLine.indexOf("warn") > -1) {
                col = '#ff8800';
            } else {
                col = '#000000';
            }

            //
            // Determine the container color
            //
            var cName = loglist[j].d.cont;

            var contCol = '#000000'; // TODO = svColorMono(cName);

            lines[j] = {
                contCol:    contCol,
                cName:      cName,
                col:        col,
                k:          loglist[j].k,
                t:          loglist[j].t,
                b:          loglist[j].b
            };
        }

        return lines;
    }),

    actions: {
        svChildLogsVisibility(show) {
            this.set('svShowChildLogs', show);
        }
    }
});
