$(document).ready(() => {
    // Initialize all necessary Materialize components
    $(".sidenav").sidenav();
    
    // Perform scrape action when button is clicked
    $("#scrape").on("click", (event) => {
        event.preventDefault();
        
        $.get("/scrape", result => {
            console.log("Scraped 'The Onion' for articles");
        });
    });

    // Perform save action when button is clicked
    $("#saved").on("click", (event) => {
        event.preventDefault();

        $.get("/saved", result => {
            console.log("Showing saved articles");
        });
    });

    // Perform clear action when button is clicked
    $("#clear").on("click", (event) => {
        event.preventDefault();

        $.get("/clear", result => {
            console.log("Cleared articles");
        });
    });

    // Perform open article action when button is clicked
    $(".view-article").on("click", function (event) {
        event.preventDefault();

        $.get(`/article/${$(this).data("id")}`, result => {
            console.log("Viewing article");
        });
    });

    // Perform save action when button is clicked
    $(".save-article").on("click", function (event) {
        event.preventDefault();

        $.post(`/save/${$(this).data("id")}`, result => {
            console.log("Saved article")
            location.reload();
        });
    });

    // Perform unsave action when button is clicked
    $(".unsave-article").on("click", function (event) {
        event.preventDefault();

        $.post(`/unsave/${$(this).data("id")}`, result => {
            console.log()
            location.reload();
        });
    });

    // Perform remove note action when button is clicked
    $(".remove-note").on("click", function (event) {
        event.preventDefault();

        $.post(`/unnote/${$(this).data("id")}`, result => {
            console.log("Removed note");
            location.reload();
        });
    });

    // Perform add note action when button is clicked
    $(".add-note").on("click", function (event) {
        event.preventDefault();

        $.post(`/note/${$(this).data("id")}`, result => {
            console.log("Added note");
            location.reload();
        });
    });
});