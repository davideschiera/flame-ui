import SPanel from '../components/s-panel';

export default SPanel.extend({
    classNames: [ 'transactions-table' ],
    actions: {
        select: function(node, view) {
            this.sendAction('select', node, view);
        }
    }
});
