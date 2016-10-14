import template from './sups-item.html'; //a webpack allowance; not ES6

import SupsItemController from './sups-item.controller';

const supsItemComponent = {
    template,
    bindings: {
        sup: '<',
        delete: '&', //redirect wrapper
    },
    controller: SupsItemController,
    controllerAs: 'supsItemCtrl',
};

export default supsItemComponent;