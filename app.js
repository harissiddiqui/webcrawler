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
var products2 = [];
var products3 = [];
var products4 = [];
var products5 = [];
var products6 = [];
var products7 = [];

// Page 1
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

//Page 2
request("https://www.indeed.com.pk/jobs?q=jobs&start=30&pp=AB4AAAFdhEMcaAAAAAEVxT0aAQEBBwHg5jXs-RCwfggY_0CRySgsCpP9p_dJzKbfmB4IYiy26dIIzjBPTWz_WPW9Y6LmQNxpc1Zm25ju2yS1Qowt", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn1 = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/jobs?q=jobs&start=30&pp=AB4AAAFdhEMcaAAAAAEVxT0aAQEBBwHg5jXs-RCwfggY_0CRySgsCpP9p_dJzKbfmB4IYiy26dIIzjBPTWz_WPW9Y6LmQNxpc1Zm25ju2yS1Qowt",
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

//Page 3
request("https://www.indeed.com.pk/jobs-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn2 = {
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
    productcolxn2.items.push(item);
    console.log(products2);
  });

  products2.push(productcolxn2);
  console.log(JSON.stringify(products2));
});

app.get("/2", function(req, res) {
  res.render("index", { products: products2 }); //index.handlebars views...
});


//Page 4
request("https://www.indeed.com.pk/jobs?q=jobs&start=50&pp=ADIAAAFdhEMcaAAAAAEVxmQUAQEBDAUbVOmpfItoUh-X1QqgnACgBFQHAEPbgQxEIFoFfnpQBDOzobF3gU4S8nbOKTh3T-YkpVH82_lw00rFtKcnzUlhIHHrLjY-fe3p2Zc2iYopZDlfLqCWcQnI15GW", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn3 = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/jobs?q=jobs&start=50&pp=ADIAAAFdhEMcaAAAAAEVxmQUAQEBDAUbVOmpfItoUh-X1QqgnACgBFQHAEPbgQxEIFoFfnpQBDOzobF3gU4S8nbOKTh3T-YkpVH82_lw00rFtKcnzUlhIHHrLjY-fe3p2Zc2iYopZDlfLqCWcQnI15GW",
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
    productcolxn3.items.push(item);
    console.log(products3);
  });

  products3.push(productcolxn3);
  console.log(JSON.stringify(products3));
});

app.get("/3", function(req, res) {
  res.render("index", { products: products3 }); //index.handlebars views...
});


//Page 5
request("https://www.indeed.com.pk/jobs?q=jobs&start=60&pp=ADwAAAFdhEMcaAAAAAEVxmQUAQIBDCAIEjkjFM4FhZ6QZClwU3fglfq6c0qOOgAdee7-AKt91q30ilhbieJEOLf_lXoJ5TOoptEbv8Xwq8WfL2f00IV1PEoox1fXbPut8c7QiUs5ImvdpUvr1hhc_Wd1mQZuHlHzxS-dy-fBaA", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn4 = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/jobs?q=jobs&start=60&pp=ADwAAAFdhEMcaAAAAAEVxmQUAQIBDCAIEjkjFM4FhZ6QZClwU3fglfq6c0qOOgAdee7-AKt91q30ilhbieJEOLf_lXoJ5TOoptEbv8Xwq8WfL2f00IV1PEoox1fXbPut8c7QiUs5ImvdpUvr1hhc_Wd1mQZuHlHzxS-dy-fBaA",
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
    productcolxn4.items.push(item);
    console.log(products4);
  });

  products4.push(productcolxn4);
  console.log(JSON.stringify(products4));
});

app.get("/4", function(req, res) {
  res.render("index", { products: products4 }); //index.handlebars views...
});

var server = app.listen(3000);
