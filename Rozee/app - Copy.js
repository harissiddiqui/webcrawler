var PORT = process.env.PORT || 3000;
var express = require("express");
var cheerio = require("cheerio");
var request = require("request");
var exphbs = require("express-handlebars");

var app = express();

var exphbs = require("express-handlebars");
var hbs = exphbs.create({});
app.use(express.static("public"));

//register engine
app.engine("handlebars", hbs.engine);

//set view engine
app.set("view engine", "handlebars");

var products = [];

//request gadgetsinnepal.com // https://www.indeed.com.pk/jobs-jobs"
request("https://www.indeed.com.pk/jobs?q=jobs&start=10&pp=AAoAAAFdgzUjIAAAAAEVqkvUAQAPyYgfiyAq8I-kIHZivoL5cvr2rudw-rAfYGCAJg", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/jobs?q=jobs&start=10&pp=AAoAAAFdgzUjIAAAAAEVqkvUAQAPyYgfiyAq8I-kIHZivoL5cvr2rudw-rAfYGCAJg",
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
    console.log(products);
  });

  products.push(productcolxn);
  console.log(products);
});

app.get("/", function(req, res) {
  res.render("index", { products: products }); //index.handlebars views...
});

var server = app.listen(3000);
