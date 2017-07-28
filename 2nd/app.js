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

var products = [];
var products1 = [];

// https://www.indeed.com.pk/jobs-jobs"
request(
  "https://www.indeed.com.pk/jobs?q=jobs&start=10&pp=AAoAAAFdgzUjIAAAAAEVqkvUAQAPyYgfiyAq8I-kIHZivoL5cvr2rudw-rAfYGCAJg",
  function(err, res, body) {
    var $ = cheerio.load(body);
    var productcolxn = {
      source: "Indeed",
      link:
        "https://www.indeed.com.pk/jobs?q=jobs&start=10&pp=AAoAAAFdgzUjIAAAAAEVqkvUAQAPyYgfiyAq8I-kIHZivoL5cvr2rudw-rAfYGCAJg",
      items: []
    };

    $(".result").each(function(i, obj) {
      console.log(obj);
      var title = $(obj).find("h2 a").text();
      var link = $(obj).find("h2 a").attr("href");
      var date = $(obj).find(".date").text();
      var location = $(obj).find(".location").text();
      var company = $(obj).find(".company").text();
      var item = {
        title: title,
        link: link,
        date: date,
        location: location,
        company: company
      };
      productcolxn.items.push(item);
      // console.log(products);
    });

    products.push(productcolxn);
    // console.log(products);
  }
);

app.get("/", function(req, res) {
  res.render("index", { products: products }); //index.handlebars views...
});

request("https://www.indeed.com.pk/jobs-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn1 = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/jobs-jobs",
    items: []
  };

  $(".result").each(function(i, obj) {
    // console.log(obj);
    var title = $(obj).find("h2 a").text();
    var link = $(obj).find("h2 a").attr("href");
    var date = $(obj).find(".date").text();
    var location = $(obj).find(".location").text();
    var company = $(obj).find(".company").text();
    var item = {
      title: title,
      link: link,
      date: date,
      location: location,
      company: company
    };
    productcolxn1.items.push(item);
    console.log(products1);
  });

  products1.push(productcolxn1);
  console.log(JSON.stringify(products1));
});

app.get("/1", function(req, res) {
  res.render("index", { products: products1 }); //index.handlebars views...
});

var server = app.listen(3000);
