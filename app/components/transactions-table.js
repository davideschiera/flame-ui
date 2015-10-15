import SPanel from '../components/sd-panel';

export default SPanel.extend({
    classNames: [ 'transactions-table', 'row-1' ],
    actions: {
        select: function(node, view) {
            this.sendAction('select', node, view);
        }
    }
});
