import { findIndex } from 'ramda';
//importing a 'piece' requires { ... }

function SupsPageController(flashesService, supsAPIService, $interval) {
    const ctrl = this;
    ctrl.editedSup = {}; //used in sups-edit.controller.js

    function getSups() {
        supsAPIService.sups.get().$promise.then((data) => {
            ctrl.sups = data.results;
        });
    }

    getSups();
    $interval(getSups, 5000);
    ctrl.saveSup = function saveSup(editedSup){
        supsAPIService.sups.save(editedSup). $promise.then((savedSup) => {
            ctrl.sups = [ //sup will now appear immediately when saved because...
                savedSup, //making 'savedSup' the first index
                ...ctrl.sups, //pushing older sups over one index
// ... is an ES6 'spread operator'; takes every item in spread array '...ctrl.sups' and pastes into parent array 'ctrl.sups'
            ];
            ctrl.editedSup = {};
            flashesService.displayMessage('Sup created', 'success');
        });

//        alert(editedSup.text); //.text is from form in sups-edit.html
    };

    ctrl.deleteSup = function deleteSup(supToDelete) {
//        const index = findIndex(item => supToDelete.id === item.id)(ctrl.sups);
        const findSup = findIndex(item => supToDelete.id === item.id);
//when findIndex iterates and finds === true, returns ???

        const index = findSup(ctrl.sups);

        if (index === -1) {
            ctrl.sups.splice(index, 1);
        }

        supsAPIService.sups.delete(supToDelete).$promise.then((data) => {
            flashesService.displayMessage('Another Sup bites the dust!', 'success');
        }); //'success' defines class "color" for message
    };
}

export default SupsPageController;