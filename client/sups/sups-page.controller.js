
function SupsPageController(flashesService) {
    const ctrl = this;
    ctrl.editedSup = {}; //used in sups-edit.controller.js

    function getSups() {
        supsAPIService.sups.get().$promise.then((date) => {
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
}

export default SupsPageController;