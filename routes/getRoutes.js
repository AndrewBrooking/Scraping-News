module.exports = (app, db) => {

    // Display data to the client
    app.get("/", (req, res) => {
        db.Article.find({saved: false}).then((result) => {
            res.render("index", {
                articles: result
            });
        }).catch((error) => {
            res.send(error);
        });
    });

    // Scrape data and display it to the client
    app.get("/scrape", (req, res) => {
        axios.get("https://www.theonion.com/").then(function (response) {
            const $ = cheerio.load(response.data);

            let data = [];

            $("article.js_post_item").each(function (i, element) {
                // Save an empty result object
                let article = {};

                // Store article data
                article.title = $(this)
                    .children("a")
                    .text();

                article.link = $(this)
                    .children("a")
                    .attr("href");

                article.saved = false;

                // Create a new Article using the `article` object built from scraping
                db.Article.create(article)
                    .then(function (result) {
                        // View the added result in the console
                        console.log(result);
                        data.push(result);
                    })
                    .catch(function (err) {
                        // If an error occurred, log it
                        console.log(err);
                        return err;
                    });
            });

            return data;
        }).then((data) => {
            res.render("index", {
                articles: data
            });
        }).catch((error) => {
            res.send(error);
        });
    });

    // List saved articles
    app.get("/saved", (req, res) => {
        db.Article.find({
            saved: true
        }).then((result) => {
            res.json("index", {
                articles: result
            });
        }).catch((error) => {
            res.send(error);
        });
    });

    // Displays a single article and all of it's notes
    app.get("/article/:id", (req, res) => {
        db.Article.findOne({
            _id: req.params.id
        }).populate("note").then((article) => {
            let result = {
                viewArticle: true,
                article: article
            }
            res.render("/index", article);
        }).catch((error) => {
            res.send(error);
        });
    });

    // Clear all articles and notes
    app.get("/clear", (req, res) => {
        db.Article.deleteMany({}).then(() => {
            db.Note.deleteMany({}).then(() => {
                res.render("index", {});
            }).catch((error) => {
                res.send(error);
            });
        }).catch((error) => {
            res.send(error);
        });
    });
};