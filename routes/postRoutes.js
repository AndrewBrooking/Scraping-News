module.exports = (app, db) => {

    // Adds a new note to the database
    app.post("/note/:id", (req, res) => {
        db.Note.insert(req.body)
            .then((noteDb) => {
                db.Article.findById(req.params.id)
                    .update({$set: {note: noteDb._id}})
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.send(err);
                    });
            })
            .catch((err) => {
                res.send(err)
            });
    });

    // Saves an article to the database
    app.post("/save", (req, res) => {
        db.Article.insert(req.body)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.send(err)
            });
    });

    app.post("/remove/note/:id", (req, res) => {
        // TODO
    });

    app.post("/remove/article/:id", (req, res) => {
        // TODO
    });
};