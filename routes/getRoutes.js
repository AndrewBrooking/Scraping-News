module.exports = (app, db) => {
    
    app.get("/", (req, res) => {
        res.render("index", {});
    });

    app.get("/scrape", (req, res) => {
        // TODO
    });

    app.get("/saved", (req, res) => {
        // TODO
    });

    app.get("/clear", (req, res) => {
        // TODO
    });
};