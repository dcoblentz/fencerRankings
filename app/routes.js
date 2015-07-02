// load the todo model
var FencerController = require('./controllers/fencerController'),
    BoutController = require('./controllers/boutController'),
    OutcomeController = require('./controllers/outcomeController'),
    fencerController = new FencerController(),
    boutController = new BoutController(),
    outcomeController = new OutcomeController();


// expose the routes to our app with module.exports
module.exports = function (app) {

    //Fencer APIs
    app.get('/api/fencers', function (req, res) {
        fencerController.get(function (err, retval) {
            if (err) {
                res.send(err);
            }
            res.json(retval);
        });
    });

    app.get('/api/fencers/:fencer_name', function (req, res) {
        fencerController.findByName(req.params.fencer_name, function (err, retval) {
            if (err) {
                res.send(err);
            }
            res.json(retval);
        });
    });
/*
    app.post('/api/fencers', function (req, res) {
        console.log(req);
        fencerController.create(req.body.text, function (err, retval) {
            if (err) {
                res.send(err);
            }
            res.json(retval);
        });
    });

    app.delete('/api/fencers/:fencer_id', function (req, res) {
        fencerController.delete(req.params.fencer_id, function (err, retval) {
            if (err) {
                res.send(err);
            }
            res.json(retval);
        });
    });
    */



    //Bout APIs
    app.get('/api/bouts', function (req, res) {

        boutController.get(function (err, retval) {
            if (err) {
                res.send(err);
            }
            res.json(retval);
        });
    });
/*
    app.post('/api/bouts', function (req, res) {
        boutController.create(req.params.fencer1_id,
            req.params.fencer2_id,
            req.params.wins,
            req.params.losses,
            req.params.draws,
            req.params.date,
            function (err, retval) {
                if (err) {
                    res.send(err);
                }
                res.json(retval);
            });
    });
    */

   /* app.delete('/api/bouts/:bout_id', function (req, res) {
        boutController.delete(req.params.bout_id, function (err, retval) {
            if (err) {
                res.send(err);
            }
            res.json(retval);
        });
    });
    */

    //Outcome APIs
    app.get('/api/outcomes', function (req, res) {

        outcomeController.get(function (err, retval) {
            if (err) {
                res.send(err);
            }
            res.json(retval);
        });
    });

    app.get('/api/standings', function (req, res) {
        fencerController.get(function (err, fencers) {
            if (err) {
                res.send(err);
            }
            var standings = [];
            for (var i = 0; i < fencers.length; i++) {
                standings.push([fencers[i].name, fencers[i].rating]);
            }
            res.json(standings);

        });

    });

    app.get('/api/history/:fencer_id', function (req, res) {
        outcomeController.getHistory(req.params.fencer_id, function (err, outcomes) {
            if (err) {
                res.send(err);
            }
            res.json(outcomes);
        });

    });

    app.get('/api/chart/:fencer_id', function (req, res) {
        outcomeController.getHistory(req.params.fencer_id, function (err, outcomes) {
            if (err) {
                res.send(err);
            }
            var data = [];
            for (var i = 0; i < outcomes.length; i++) {
                data.push({
                    x: i+1,
                    y: outcomes[i].newRating,
                    name: outcomes[i].opponent.name
                });
            }
            res.json(data);
        });
    });

};