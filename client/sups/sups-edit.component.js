import template from './sups-edit.html';

import SupsEditController from './sups-edit.controller';

const supsEditComponent = {
    template,
    bindings: {
        save: '&',
        sup: '<',
        cancel: '&?',
    },
    controller: SupsEditController,
    controllerAs: 'supsEditCtrl',
};

export default supsEditComponent;