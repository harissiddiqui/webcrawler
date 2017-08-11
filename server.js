var express = require("express");
var cheerio = require("cheerio");
var request = require("request");
var exphbs = require("express-handlebars");
var moment = require("moment");
var mongoose = require("mongoose");
var express = require("express");

mongoose.connect('mongodb://localhost/Main',{
  useMongoClient: true,
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('connect',() =>{ 
  console.log("DB connected");
});

db.on('error', e => console.log("error", e));


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

var jobSchema = mongoose.Schema({

  title : String,
  link : String,
  date : String,
  company : String,
  location : String

  
});
var getjob = mongoose.model('getjob', jobSchema);
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
    console.log(productcolxn.items);
    for(var i=0;i<productcolxn.items.length;i++){
      var getjobdb = new getjob({
          title : productcolxn.items[i].title,
          link : productcolxn.items[i].link,
          date : productcolxn.items[i].date,
          company : productcolxn.items[i].company,
          location : productcolxn.items[i].location
      });
    getjobdb.save((err,res) =>{
      if(err){
        console.log('error: ', err);
      }
    });
    }

    
    // console.log(products);
  }
);



app.get("/", function(req, res) {
  res.render("index", { products: products }); //index.handlebars views...
});

//Page 2
var getjob1 = mongoose.model('getjob1', jobSchema);
request("https://www.indeed.com.pk/jobs?q=jobs&start=80&pp=AFAAAAFdigt1KAAAAAEV6TM1AQIBGlgGAJV3tU41usXU5di64786M8DRx-lV0M9FyDJnnKi-iyDWAVcktK3-pAO7R2nQm1cuc26BcZFb7n_RJETGZJWOJ0bOHaNbNXVdfVkqXW44fWXnG1a7WWbhgMqsykoIlSrCnoySYSXPiCw_etTuMDrubA", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn1 = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/jobs?q=jobs&start=80&pp=AFAAAAFdigt1KAAAAAEV6TM1AQIBGlgGAJV3tU41usXU5di64786M8DRx-lV0M9FyDJnnKi-iyDWAVcktK3-pAO7R2nQm1cuc26BcZFb7n_RJETGZJWOJ0bOHaNbNXVdfVkqXW44fWXnG1a7WWbhgMqsykoIlSrCnoySYSXPiCw_etTuMDrubA",
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
    for(var i=0;i<productcolxn1.items.length;i++){
      var getjob1db = new getjob1({
          title : productcolxn1.items[i].title,
          link : productcolxn1.items[i].link,
          date : productcolxn1.items[i].date,
          company : productcolxn1.items[i].company,
          location : productcolxn1 .items[i].location
      });
    getjob1db.save((err,res) =>{
      if(err){
        console.log('error: ', err);
      }
    });
    }
    console.log(products1);
  });

  products1.push(productcolxn1);
  console.log(JSON.stringify(products1));
});

app.get("/1", function(req, res) {
  res.render("index", { products: products1 }); //index.handlebars views...
});

//Page 3
var getjob2 = mongoose.model('getjob2', jobSchema);
request("https://www.indeed.com.pk/jobs?q=jobs&start=70&pp=AEYAAAFdigt1KAAAAAEV6TM1AQEBGgIOUq7eeTmJfkizpJnN-aYPKfYq3cQkx2g_z-COHg6BYQvON-qlzPDC3297--evfxDqj0gJLfy32NAFjNTrQyKuXKrinLWZ4kVHz0zrUVCUuh41jhmkBDbidYem60kJb6FkjagVX-o", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn2 = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/jobs?q=jobs&start=70&pp=AEYAAAFdigt1KAAAAAEV6TM1AQEBGgIOUq7eeTmJfkizpJnN-aYPKfYq3cQkx2g_z-COHg6BYQvON-qlzPDC3297--evfxDqj0gJLfy32NAFjNTrQyKuXKrinLWZ4kVHz0zrUVCUuh41jhmkBDbidYem60kJb6FkjagVX-o",
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
        for(var i=0;i<productcolxn2.items.length;i++){
      var getjob2db = new getjob2({
          title : productcolxn2.items[i].title,
          link : productcolxn2.items[i].link,
          date : productcolxn2.items[i].date,
          company : productcolxn2.items[i].company,
          location : productcolxn2 .items[i].location
      });
    getjob2db.save((err,res) =>{
      if(err){
        console.log('error: ', err);
      }
    });
    }
    console.log(products2);
  });

  products2.push(productcolxn2);
  console.log(JSON.stringify(products2));
});

app.get("/2", function(req, res) {
  res.render("index", { products: products2 }); //index.handlebars views...
});


//Page 4
var getjob3 = mongoose.model('getjob3', jobSchema);
request("https://www.indeed.com.pk/jobs?q=jobs&start=90&pp=AFoAAAFdigt1KAAAAAEV6TM1AQIBGlgGLwCZVT1QiZx5xuAMcIQoOrXpIDiY5ZXRk0EU4BK2d98B9hrEp7QBfkTV1CIluDykF_MdR9TQawITAkXvXIf50HL2ugSi-0d8QvXHgNnBqM7EAMPcjMDrdl41St1xR6aVzCsQOCOoStIctEt2dxtFMMM5xMBTq7BfX1YAv4N4fg", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn3 = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/jobs?q=jobs&start=90&pp=AFoAAAFdigt1KAAAAAEV6TM1AQIBGlgGLwCZVT1QiZx5xuAMcIQoOrXpIDiY5ZXRk0EU4BK2d98B9hrEp7QBfkTV1CIluDykF_MdR9TQawITAkXvXIf50HL2ugSi-0d8QvXHgNnBqM7EAMPcjMDrdl41St1xR6aVzCsQOCOoStIctEt2dxtFMMM5xMBTq7BfX1YAv4N4fg",
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
    for(var i=0;i<productcolxn3.items.length;i++){
      var getjob3db = new getjob3({
          title : productcolxn3.items[i].title,
          link : productcolxn3.items[i].link,
          date : productcolxn3.items[i].date,
          company : productcolxn3.items[i].company,
          location : productcolxn3 .items[i].location
      });
    getjob3db.save((err,res) =>{
      if(err){
        console.log('error: ', err);
      }
    });
    }
    console.log(products3);
  });

  products3.push(productcolxn3);
  console.log(JSON.stringify(products3));
});

app.get("/3", function(req, res) {
  res.render("index", { products: products3 }); //index.handlebars views...
});


//Page 5
request("https://www.indeed.com.pk/jobs?q=jobs&start=100&pp=AGQAAAFdigt1KAAAAAEV6U_kAQMBIFgGFAcA_TSIv--0ksncasSTqvC3JGgD94G6JCNLYtJ-gbiK8NE5Q9Fv3BznVmEwk0ULtPypUNk9Ql5SB05JRmtZ55oJnJXrozpCgFQWhtY-zxOEfidaYZbai3wrdVJAESNBLSAKoLimuSWTlZPEzyiYJe7nECN4EqRhKt81pNrOnY7sIVQIjDHF", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn4 = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/jobs?q=jobs&start=100&pp=AGQAAAFdigt1KAAAAAEV6U_kAQMBIFgGFAcA_TSIv--0ksncasSTqvC3JGgD94G6JCNLYtJ-gbiK8NE5Q9Fv3BznVmEwk0ULtPypUNk9Ql5SB05JRmtZ55oJnJXrozpCgFQWhtY-zxOEfidaYZbai3wrdVJAESNBLSAKoLimuSWTlZPEzyiYJe7nECN4EqRhKt81pNrOnY7sIVQIjDHF",
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
