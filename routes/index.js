const path = require('path');

module.exports = (app) => {
    /*     app.get('/', (req, res) => {
            res.sendFile(path.join(`${__dirname}/../views/home.html`));
        }) */

    app.get('/api', (req, res) => {
        res.sendFile(path.join(`${__dirname}/../views/home.html`));
    })
}