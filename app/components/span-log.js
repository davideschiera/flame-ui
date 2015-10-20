import Ember from 'ember';
import SDPanel from '../components/sd-panel';

export default SDPanel.extend({
    classNames: [ 'span-log' ],

    actions: {
        selectMode(mode) {
            this.sendAction('selectMode', mode);
        }
    }
});
