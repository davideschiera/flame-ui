import SPanel from '../components/sd-panel';

export default SPanel.extend({
    classNames: [ 'transactions-table' ],
    selected: null,
    actions: {
        select: function(node, view) {
            if (this.get('selected') === node) {
                this.set('selected', null);
            } else {
                this.set('selected', node);
            }
            this.sendAction('select', node, view);
        }
    }
});
