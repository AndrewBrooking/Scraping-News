$(document).ready(() => {
    // Initialize all necessary Materialize components
    $(".sidenav").sidenav();

    $("#scrape").on("click", (event) => {
        event.preventDefault();
        $.get("/scrape");
    });

    $("#saved").on("click", (event) => {
        event.preventDefault();
        $.get("/saved");
    });

    $("#clear").on("click", (event) => {
        event.preventDefault();
        $.get("/clear");
    });
});