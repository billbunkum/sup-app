import template from './sups-page.html';

import SupsPageController from './sups-page.controller';

const supsPageComponent = {
    template, //this is actually template: template but ES6 allows shorthand

    controller: SupsPageController,
    controllerAs: 'supsPageCtrl',
};

export default supsPageComponent;