var express = require("express");
var cheerio = require("cheerio");
var request = require("request");
var exphbs = require("express-handlebars");
var moment = require("moment");
var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
app.use(express.static(__dirname + "/views"));

var app = express();
io.on("connection", function(socket) {
  console.log("Server Connected VIA Socket");

  socket.on("message", function(message) {
    console.log("Message Recieved: " + message.text);
    message.timestamp = moment().valueOf();
    io.emit("message", message);
  });

  //Timestamp property 
  socket.emit("message", {
    name: "System",
    text: " Hey",
    timestamp: moment.valueOf()
  });
});

var exphbs = require("express-handlebars");
var hbs = exphbs.create({});
app.use(express.static("public"));

//register engine
app.engine("handlebars", hbs.engine);

//set view engine
app.set("view engine", "handlebars");

var products5 = [];
var products6 = [];
var products7 = [];
var products8 = [];
var products9 = [];


// Page Rozee 1
request("https://www.rozee.pk/job/jsearch/q/all/fc/1180", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn5 = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/fc/1180",
    items: []
  };

    $(".job").each(function(i, obj) {
    console.log(obj);
    console.log(obj[0]);
    var title = $(obj).find("h3").text();
    var link = $(obj).find("h3 a").attr("href");
    var date = $(obj).find("span").text();
    var item = {
      title: title,
      link: link,
      date: date
    };
    productcolxn5.items.push(item);
    console.log(products5);
  });

  products5.push(productcolxn5);
  console.log(JSON.stringify(products5));
});

app.get("/", function(req, res) {
  res.render("index", { products: products5 }); //index.handlebars views...
});

// Page Rozee 2
request("https://www.rozee.pk/job/jsearch/q/all/fc/1180/?fpn=20", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn6 = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/fc/1180/?fpn=20",
    items: []
  };

    $(".job").each(function(i, obj) {
    console.log(obj);
    console.log(obj[0]);
    var title = $(obj).find("h3").text();
    var link = $(obj).find("h3 a").attr("href");
    var date = $(obj).find("span").text();
    var item = {
      title: title,
      link: link,
      date: date
    };
    productcolxn6.items.push(item);
    console.log(products5);
  });

  products6.push(productcolxn6);
  console.log(JSON.stringify(products6));
});

app.get("/R1", function(req, res) {
  res.render("index", { products: products6 }); //index.handlebars views...
});

// Page Rozee 3
request("https://www.rozee.pk/job/jsearch/q/all/fc/1180/?fpn=40", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn7 = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/fc/1180/?fpn=40",
    items: []
  };

    $(".job").each(function(i, obj) {
    console.log(obj);
    console.log(obj[0]);
    var title = $(obj).find("h3").text();
    var link = $(obj).find("h3 a").attr("href");
    var date = $(obj).find("span").text();
    var item = {
      title: title,
      link: link,
      date: date
    };
    productcolxn7.items.push(item);
    console.log(products7);
  });

  products7.push(productcolxn7);
  console.log(JSON.stringify(products7));
});

app.get("/R2", function(req, res) {
  res.render("index", { products: products7 }); //index.handlebars views...
});

// Page Rozee 4
request("https://www.rozee.pk/job/jsearch/q/all/fc/1180/?fpn=60", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn8 = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/fc/1180/?fpn=60",
    items: []
  };

    $(".job").each(function(i, obj) {
    console.log(obj);
    console.log(obj[0]);
    var title = $(obj).find("h3").text();
    var link = $(obj).find("h3 a").attr("href");
    var date = $(obj).find("span").text();
    var item = {
      title: title,
      link: link,
      date: date
    };
    productcolxn8.items.push(item);
    console.log(products8);
  });

  products8.push(productcolxn8);
  console.log(JSON.stringify(products8));
});

app.get("/R3", function(req, res) {
  res.render("index", { products: products8 }); //index.handlebars views...
});

// Page Rozee 5
request("https://www.rozee.pk/job/jsearch/q/all/fc/1180/?fpn=80", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn9 = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/fc/1180/?fpn=80",
    items: []
  };

    $(".job").each(function(i, obj) {
    console.log(obj);
    console.log(obj[0]);
    var title = $(obj).find("h3").text();
    var link = $(obj).find("h3 a").attr("href");
    var date = $(obj).find("span").text();
    var item = {
      title: title,
      link: link,
      date: date
    };
    productcolxn9.items.push(item);
    console.log(products9);
  });

  products9.push(productcolxn9);
  console.log(JSON.stringify(products9));
});

app.get("/R4", function(req, res) {
  res.render("index", { products: products9 }); //index.handlebars views...
});

var server = app.listen(3001);
