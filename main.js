(function () {
    var deletes = $('form.del-button a.togglebutton');
    var deleteId = null;

    function deleteRecursive(id) {
        if (id >= deletes.length) {
            return;
        }
        $(deletes[id]).click();
        setTimeout(function () {
            if (deleteId === null) {
                $(document).ajaxComplete(function(event, xhr, settings) {
                    if (settings.url == '/api/del') {
                        deleteRecursive(deleteId);
                    }
                });
            }
            deleteId = id + 1;
            $('form.del-button > span.error.active > a.yes').click();
        }, 300);
    }
    deleteRecursive(0);
})();
