import angular from 'angular';
import flashesComponent from './flashes.component';
import flashesService from './flashes.service';

const FlashesModule = angular.module('flashes', [])
    .factory('flashesService', falshesService)
    .component('flashes', flashesComponent);


export default FlashesModule;