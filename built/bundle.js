(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
function sayHello(name) {
    return "A big hello from " + name;
}
exports.sayHello = sayHello;
},{}],2:[function(require,module,exports){
"use strict";
var hello_1 = require("./hello");
//var app = express();
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = hello_1.sayHello(name);
}
showHello("greeting", "TypeScript");
//app.get('/', function (req, res) {
//    //res.json({ message: 'Hello! Welcome to Express' });
//    console.log("Hello using gulp");
//    const elt = document.getElementById("greeting");
//    elt.innerText = sayHello("Typescript");
//});
//app.get('/index', function (req, res) {
//    //res.type('html');
//    //res.sendFile("/views/index.html");
//    res.send("Express");
//});
//app.get('/index', routes.index);
//app.listen(7001);
//class Menu {
//    items: Array<string>;
//    pages: number;
//    constructor(item_list: Array<string>, total_pages: number) {
//        this.items = item_list;
//        this.pages = total_pages;
//    }
//    list(): void {
//        console.log('our menu for today');
//        for (var i = 0; i < this.items.length; i++) {
//            console.log(this.items[i]);
//        }
//    }
//}
//var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
//sundayMenu.list();
//import path = require('path');
//import fs = require('fs');
},{"./hello":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaGVsbG8udHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQyxrQkFBeUIsSUFBWTtJQUNsQyxNQUFNLENBQUMsc0JBQW9CLElBQU0sQ0FBQztBQUN0QyxDQUFDO0FBRkEsNEJBRUE7OztBQ0FELGlDQUFtQztBQUNuQyxzQkFBc0I7QUFFdEIsbUJBQW1CLE9BQWUsRUFBRSxJQUFZO0lBQzVDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxnQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRCxTQUFTLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBRXBDLG9DQUFvQztBQUNwQywyREFBMkQ7QUFDM0Qsc0NBQXNDO0FBQ3RDLHNEQUFzRDtBQUN0RCw2Q0FBNkM7QUFDN0MsS0FBSztBQUVMLHlDQUF5QztBQUN6Qyx5QkFBeUI7QUFDekIsMENBQTBDO0FBQzFDLDBCQUEwQjtBQUMxQixLQUFLO0FBRUwsa0NBQWtDO0FBRWxDLG1CQUFtQjtBQUVuQixjQUFjO0FBRWQsMkJBQTJCO0FBQzNCLG9CQUFvQjtBQUVwQixrRUFBa0U7QUFDbEUsaUNBQWlDO0FBQ2pDLG1DQUFtQztBQUNuQyxPQUFPO0FBRVAsb0JBQW9CO0FBQ3BCLDRDQUE0QztBQUM1Qyx1REFBdUQ7QUFDdkQseUNBQXlDO0FBQ3pDLFdBQVc7QUFDWCxPQUFPO0FBQ1AsR0FBRztBQUVILHdFQUF3RTtBQUV4RSxvQkFBb0I7QUFFcEIsZ0NBQWdDO0FBQ2hDLDRCQUE0QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCLvu79leHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8obmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYEEgYmlnIGhlbGxvIGZyb20gJHtuYW1lfWA7XHJcbn0iLCLvu79pbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ0V4cHJlc3MnKTtcclxuaW1wb3J0IHJvdXRlcyA9IHJlcXVpcmUoJy4uL3JvdXRlcycpO1xyXG5pbXBvcnQgeyBzYXlIZWxsbyB9IGZyb20gJy4vaGVsbG8nO1xyXG4vL3ZhciBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdk5hbWUpO1xyXG4gICAgZWx0LmlubmVyVGV4dCA9IHNheUhlbGxvKG5hbWUpO1xyXG59XHJcblxyXG5zaG93SGVsbG8oXCJncmVldGluZ1wiLCBcIlR5cGVTY3JpcHRcIik7XHJcblxyXG4vL2FwcC5nZXQoJy8nLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuLy8gICAgLy9yZXMuanNvbih7IG1lc3NhZ2U6ICdIZWxsbyEgV2VsY29tZSB0byBFeHByZXNzJyB9KTtcclxuLy8gICAgY29uc29sZS5sb2coXCJIZWxsbyB1c2luZyBndWxwXCIpO1xyXG4vLyAgICBjb25zdCBlbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyZWV0aW5nXCIpO1xyXG4vLyAgICBlbHQuaW5uZXJUZXh0ID0gc2F5SGVsbG8oXCJUeXBlc2NyaXB0XCIpO1xyXG4vL30pO1xyXG5cclxuLy9hcHAuZ2V0KCcvaW5kZXgnLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuLy8gICAgLy9yZXMudHlwZSgnaHRtbCcpO1xyXG4vLyAgICAvL3Jlcy5zZW5kRmlsZShcIi92aWV3cy9pbmRleC5odG1sXCIpO1xyXG4vLyAgICByZXMuc2VuZChcIkV4cHJlc3NcIik7XHJcbi8vfSk7XHJcblxyXG4vL2FwcC5nZXQoJy9pbmRleCcsIHJvdXRlcy5pbmRleCk7XHJcblxyXG4vL2FwcC5saXN0ZW4oNzAwMSk7XHJcblxyXG4vL2NsYXNzIE1lbnUge1xyXG5cclxuLy8gICAgaXRlbXM6IEFycmF5PHN0cmluZz47XHJcbi8vICAgIHBhZ2VzOiBudW1iZXI7XHJcblxyXG4vLyAgICBjb25zdHJ1Y3RvcihpdGVtX2xpc3Q6IEFycmF5PHN0cmluZz4sIHRvdGFsX3BhZ2VzOiBudW1iZXIpIHtcclxuLy8gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtX2xpc3Q7XHJcbi8vICAgICAgICB0aGlzLnBhZ2VzID0gdG90YWxfcGFnZXM7XHJcbi8vICAgIH1cclxuXHJcbi8vICAgIGxpc3QoKTogdm9pZCB7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZygnb3VyIG1lbnUgZm9yIHRvZGF5Jyk7XHJcbi8vICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLml0ZW1zW2ldKTtcclxuLy8gICAgICAgIH1cclxuLy8gICAgfVxyXG4vL31cclxuXHJcbi8vdmFyIHN1bmRheU1lbnUgPSBuZXcgTWVudShbXCJwYW5jYWtlc1wiLCBcIndhZmZsZXNcIiwgXCJvcmFuZ2UganVpY2VcIl0sIDEpO1xyXG5cclxuLy9zdW5kYXlNZW51Lmxpc3QoKTtcclxuXHJcbi8vaW1wb3J0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbi8vaW1wb3J0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuXHJcblxyXG5cclxuIl19
