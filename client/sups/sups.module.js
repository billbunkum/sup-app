import angular from 'angular';
import 'angular-resource';

import supsPageComponent from './sups-page.component';
import supsItemComponent from './sups-item.component';
import supsEditComponent from './sups-edit.component';

const SupsModule = angular.module('sups', [
    'ngResource',
]).config(($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('supsAPIService', supsAPIService)
    .component('supsPage', supsPageComponent)
    .component('supsEdit', supsEditComponent)
    .component('supsItem', supsItemComponent);

export default SupsModule;