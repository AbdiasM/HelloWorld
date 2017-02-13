

exports.index = function (req, res) {
    res.type = "text/html";
    res.sendFile('D:\workspace\github\HelloWorld\views\index.html');
};