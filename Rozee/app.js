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

//Cities
var productsIslamabad = []; //Islamabad
var productsRawalpindi = []; //Rawalpindi
var productsKarachi = []; //Karachi
var productsLahore = []; //Lahore
var productsPeshawar = []; //Peshawar
var productsSialkot = []; //Sialkot
var productsFaisalabad = []; //Faisalabad

//categories
var productsGD = []; //Graphic Designer
var productsAC = []; //Accountant
var productsBDE = []; //Business Development Executive
var productsCW = []; //Content Writer
var productsDEV = []; //Developer
var productsHRM = []; //HRM
var productsAC = []; //Accountant
var productsPM = []; //Project Manager


// Page Rozee 1
request("https://www.rozee.pk/job/jsearch/q/all", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn5 = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all",
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
request("https://www.rozee.pk/job/jsearch/q/all/?fpn=20", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn6 = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/?fpn=20",
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
request("https://www.rozee.pk/job/jsearch/q/all/?fpn=40", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn7 = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/?fpn=40",
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
request("https://www.rozee.pk/job/jsearch/q/all/?fpn=60", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn8 = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/?fpn=60",
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
request("https://www.rozee.pk/job/jsearch/q/all/?fpn=80", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxn9 = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/?fpn=80",
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

// Islamabad
request("https://www.rozee.pk/job/jsearch/q/all/fc/1180", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnIslamabad = {
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
    productcolxnIslamabad.items.push(item);
    console.log(productsIslamabad);
  });

  productsIslamabad.push(productcolxnIslamabad);
  console.log(JSON.stringify(productsIslamabad));
});

app.get("/islamabad", function(req, res) {
  res.render("index", { products: productsIslamabad }); //index.handlebars views...
});

// Rawalpindi
request("https://www.rozee.pk/job/jsearch/q/all/fc/1190", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnRawalpindi = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/fc/1190",
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
    productcolxnRawalpindi.items.push(item);
    console.log(productsRawalpindi);
  });

  productsRawalpindi.push(productcolxnRawalpindi);
  console.log(JSON.stringify(productsRawalpindi));
});

app.get("/rawalpindi", function(req, res) {
  res.render("index", { products: productsRawalpindi }); //index.handlebars views...
});

// Karachi
request("https://www.rozee.pk/job/jsearch/q/all/fc/1184", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnKarachi = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/fc/1184",
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
    productcolxnKarachi.items.push(item);
    console.log(productsKarachi);
  });

  productsKarachi.push(productcolxnKarachi);
  console.log(JSON.stringify(productsKarachi));
});

app.get("/karachi", function(req, res) {
  res.render("index", { products: productsKarachi }); //index.handlebars views...
});


// Lahore
request("https://www.rozee.pk/job/jsearch/q/all/fc/1185", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnLahore = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/fc/1185",
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
    productcolxnLahore.items.push(item);
    console.log(productsLahore);
  });

  productsLahore.push(productcolxnLahore);
  console.log(JSON.stringify(productsLahore));
});

app.get("/lahore", function(req, res) {
  res.render("index", { products: productsLahore }); //index.handlebars views...
});

// Peshawar
request("https://www.rozee.pk/job/jsearch/q/all/fc/1188", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnPeshawar = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/fc/1188",
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
    productcolxnPeshawar.items.push(item);
    console.log(productsPeshawar);
  });

  productsPeshawar.push(productcolxnPeshawar);
  console.log(JSON.stringify(productsPeshawar));
});

app.get("/peshawar", function(req, res) {
  res.render("index", { products: productsPeshawar }); //index.handlebars views...
});

// Sialkot
request("https://www.rozee.pk/job/jsearch/q/all/fc/1192", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnSialkot = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/fc/1192",
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
    productcolxnSialkot.items.push(item);
    console.log(productsSialkot);
  });

  productsSialkot.push(productcolxnSialkot);
  console.log(JSON.stringify(productsSialkot));
});

app.get("/sialkot", function(req, res) {
  res.render("index", { products: productsSialkot }); //index.handlebars views...
});

// Faisalabad
request("https://www.rozee.pk/job/jsearch/q/all/fc/1181", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnFaisalabad = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/fc/1181",
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
    productcolxnFaisalabad.items.push(item);
    console.log(productsFaisalabad);
  });

  productsFaisalabad.push(productcolxnFaisalabad);
  console.log(JSON.stringify(productsFaisalabad));
});

app.get("/faisalabad", function(req, res) {
  res.render("index", { products: productsFaisalabad }); //index.handlebars views...
});

// GD
request("https://www.rozee.pk/job/jsearch/q/all/fca/110", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnGD = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/fca/110",
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
    productcolxnGD.items.push(item);
    console.log(productsGD);
  });

  productsGD.push(productcolxnGD);
  console.log(JSON.stringify(productsGD));
});

app.get("/graphic-designer", function(req, res) {
  res.render("index", { products: productsGD }); //index.handlebars views...
});

// Accountant
request("https://www.rozee.pk/job/jsearch/q/all/fca/13", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnAC = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/fca/13",
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
    productcolxnAC.items.push(item);
    console.log(productsGD);
  });

  productsAC.push(productcolxnAC);
  console.log(JSON.stringify(productsAC));
});

app.get("/accountant", function(req, res) {
  res.render("index", { products: productsAC }); //index.handlebars views...
});

// BDE
request("https://www.rozee.pk/job/jsearch/q/all/fca/49", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnBDE = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/fca/49",
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
    productcolxnBDE.items.push(item);
    console.log(productsBDE);
  });

  productsBDE.push(productcolxnBDE);
  console.log(JSON.stringify(productsBDE));
});

app.get("/business-development-executive", function(req, res) {
  res.render("index", { products: productsBDE }); //index.handlebars views...
});

// CW
request("https://www.rozee.pk/job/jsearch/q/all/fca/101", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnCW = {
    source: "Rozee",
    link: "https://www.rozee.pk/job/jsearch/q/all/fca/101",
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
    productcolxnCW.items.push(item);
    console.log(productsCW);
  });

  productsCW.push(productcolxnCW);
  console.log(JSON.stringify(productsCW));
});

app.get("/content-writer", function(req, res) {
  res.render("index", { products: productsCW }); //index.handlebars views...
});

var server = app.listen(3001);
