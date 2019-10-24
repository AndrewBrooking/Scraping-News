$(document).ready(() => {
    // Initialize all necessary Materialize components
    $(`.sidenav`).sidenav();
    $('.modal').modal();
    
    // Perform scrape action when button is clicked
    $(document).on(`click`, `#scrape`, (event) => {
        event.preventDefault();

        $.get(`/scrape`, result => {
            console.log(`Scraped 'The Onion' for articles`);
            location.reload();
        });
    });

    // Perform save action when button is clicked
    // $(`#saved`).on(`click`, (event) => {
    //     event.preventDefault();

    //     $.get(`/saved`, result => {
    //         console.log(`Showing saved articles`);
    //         location.reload();
    //     });
    // });

    // Perform clear action when button is clicked
    $(document).on(`click`, `#clear`, (event) => {
        event.preventDefault();

        $.get(`/clear`, result => {
            console.log(`Cleared articles`);
            location.reload();
        });
    });

    // Perform open article action when button is clicked
    // $(document).on(`click`, `.view-article`, function (event) {
    //     event.preventDefault();

    //     $.get(`/article/${$(this).data(`id`)}`, result => {
    //         console.log(`Viewing article`);

    //         const modal = $(``).html();

    //         $(`.main-wrapper`).append(modal);

    //         M.Modal.getInstance(modal).open();
    //     });
    // });

    // Perform save action when button is clicked
    $(document).on(`click`, `.save-article`, function (event) {
        event.preventDefault();

        $.post(`/save/${$(this).data(`id`)}`, result => {
            console.log(`Saved article`)
            location.reload();
        });
    });

    // Perform unsave action when button is clicked
    $(document).on(`click`, `.unsave-article`, function (event) {
        event.preventDefault();

        $.post(`/unsave/${$(this).data(`id`)}`, result => {
            console.log(`Unsaved article`);
            location.reload();
        });
    });

    // Perform remove note action when button is clicked
    $(document).on(`click`, `.remove-note`, function (event) {
        event.preventDefault();

        $.post(`/unnote/${$(this).data(`id`)}`, result => {
            console.log(`Removed note`);
            // location.reload();
        });
    });

    // Perform add note action when button is clicked
    $(document).on(`click`, `.add-note`, function (event) {
        event.preventDefault();

        $.post(`/note/${$(this).data(`id`)}`, result => {
            console.log(`Added note`);
            // location.reload();
        });
    });
});