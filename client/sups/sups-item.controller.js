function SupsItemController() {
    const ctrl = this;
    ctrl.showControls = false;
    ctrl.editMode = false;

    ctrl.setShowControls = function setShowControls(showControls) {
        ctrl.showControls = showControls;
    };

    ctrl.setEditMode = function setEditMode(editMode) {
        ctrl.editMode = editMode;
    };

    ctrl.deleteSup = function deleteSup() {
        ctrl.delete({ supToDelete: ctrl.sup });
    };
}

export default SupsItemController;