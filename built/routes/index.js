"use strict";
function index(req, res) {
    //res.type = "text/html";
    //res.sendFile('./views/index.html');
    res.send('Express JS');
}
;
module.exports = index;
