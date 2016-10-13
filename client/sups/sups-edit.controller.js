import { merge } from 'ramda';

function SupsEditController() {
    const ctrl = this;
    ctrl.editedSup = {};


    ctrl.$onChanges = function $onChanges() {
// used to make a COPY of ctrl.editedSup
        ctrl.editedSup = merge({}, ctrl.sup); //overwrites {} w/ key from 'ctrl.sup' and returns it
    };

    ctr.saveSup = function saveSup() {
        ctrl.save( { editedSup: ctrl.editedSup });
    };
}

export default SupsEditController;