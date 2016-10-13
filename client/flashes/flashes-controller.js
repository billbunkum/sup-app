function flashesController(flashesService) {
    const ctrl = this;

    ctrl.flashes = flashesService.flashes;
}

export default flashesController;