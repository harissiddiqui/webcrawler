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

//Pages
var products = [];
var products1 = [];
var products2 = [];
var products3 = [];
var products4 = [];
var products5 = [];
var products6 = [];
var products7 = [];

//Categories

var productsGD = []; //Graphic Designer
var productsSE = []; //Sales Executive
var productsAC = []; //Accountant
var productsCW = []; //Content Writer
var productsRE = []; //Receptionist
var productsBDE = []; //Business Development Executive
var productsME = []; //Marketing Executive 
var productsSR = []; //Sales Representative
var productsPM = []; //Project Manager
var productsHRM = []; //Human Resource Manager
var productsDEV = []; //Developer

//Companies

var productsJazz = []; //Jazz Telecom
var productsUMT = []; //UMT
var productsUfone = []; //Ufone
var productsHcit = []; //Hcit
var productsVRhiring = []; //VRhiring
var productsOA = []; //Optimum Advisory
var productsTelenor = []; //Telenor

//Cities

var productsIslamabad = []; //Islamabad
var productsRawalpindi = []; //Rawalpindi
var productsKarachi = []; //Karachi
var productsLahore = []; //Lahore
var productsPeshawar = []; //Peshawar
var productsSialkot = []; //Sialkot
var productsFaisalabad = []; //Faisalabad

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
    console.log(products1);
  });

  products1.push(productcolxn1);
  console.log(JSON.stringify(products1));
});

app.get("/1", function(req, res) {
  res.render("index", { products: products1 }); //index.handlebars views...
});

//Page 3
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
    console.log(products2);
  });

  products2.push(productcolxn2);
  console.log(JSON.stringify(products2));
});

app.get("/2", function(req, res) {
  res.render("index", { products: products2 }); //index.handlebars views...
});


//Page 4
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


//Graphic Designer
request("https://www.indeed.com.pk/Graphic-Designer-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnGD = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Graphic-Designer-jobs",
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
    productcolxnGD.items.push(item);
    console.log(productsGD);
  });

  productsGD.push(productcolxnGD);
  console.log(JSON.stringify(productsGD));
});

app.get("/graphic-designer", function(req, res) {
  res.render("index", { products: productsGD }); //index.handlebars views...
});

//Sales Executive
request("https://www.indeed.com.pk/Sales-Executive-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnSE = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Sales-Executive-jobs",
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
    productcolxnSE.items.push(item);
    console.log(productsSE);
  });

  productsSE.push(productcolxnSE);
  console.log(JSON.stringify(productsSE));
});

app.get("/sales-executive", function(req, res) {
  res.render("index", { products: productsSE }); //index.handlebars views...
});

//Accountant
request("https://www.indeed.com.pk/Accountant-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnAC = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Accountant-jobs",
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
    productcolxnAC.items.push(item);
    console.log(productsAC);
  });

  productsAC.push(productcolxnAC);
  console.log(JSON.stringify(productsAC));
});

app.get("/accountant", function(req, res) {
  res.render("index", { products: productsAC }); //index.handlebars views...
});

//Content Writer
request("https://www.indeed.com.pk/Content-Writer-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnCW = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Content-Writer-jobs",
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
    productcolxnCW.items.push(item);
    console.log(productsCW);
  });

  productsCW.push(productcolxnCW);
  console.log(JSON.stringify(productsCW));
});

app.get("/content-writer", function(req, res) {
  res.render("index", { products: productsCW }); //index.handlebars views...
});

//Receptionist
request("https://www.indeed.com.pk/Receptionist-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnRE = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Receptionist-jobs",
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
    productcolxnRE.items.push(item);
    console.log(productsRE);
  });

  productsRE.push(productcolxnRE);
  console.log(JSON.stringify(productsRE));
});

app.get("/receptionist", function(req, res) {
  res.render("index", { products: productsRE }); //index.handlebars views...
});

//Business Development Executive
request("https://www.indeed.com.pk/Business-Development-Executive-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnBDE = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Business-Development-Executive-jobs",
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
    productcolxnBDE.items.push(item);
    console.log(productsBDE);
  });

  productsBDE.push(productcolxnBDE);
  console.log(JSON.stringify(productsBDE));
});

app.get("/business-development-executive", function(req, res) {
  res.render("index", { products: productsBDE }); //index.handlebars views...
});

//Marketingt Executive
request("https://www.indeed.com.pk/Marketing-Executive-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnME = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Marketing-Executive-jobs",
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
    productcolxnME.items.push(item);
    console.log(productsME);
  });

  productsME.push(productcolxnME);
  console.log(JSON.stringify(productsME));
});

app.get("/marketing-executive", function(req, res) {
  res.render("index", { products: productsME }); //index.handlebars views...
});

//Sales Representative
request("https://www.indeed.com.pk/Sales-Representative-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnSR = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Sales-Representative-jobs",
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
    productcolxnSR.items.push(item);
    console.log(productsSR);
  });

  productsSR.push(productcolxnSR);
  console.log(JSON.stringify(productsSR));
});

app.get("/sales-representative", function(req, res) {
  res.render("index", { products: productsSR }); //index.handlebars views...
});

//Project Manager
request("https://www.indeed.com.pk/Project-Manager-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnPM = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Project-Manager-jobs",
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
    productcolxnPM.items.push(item);
    console.log(productsPM);
  });

  productsPM.push(productcolxnPM);
  console.log(JSON.stringify(productsPM));
});

app.get("/project-manager", function(req, res) {
  res.render("index", { products: productsPM }); //index.handlebars views...
});

//Project Manager
request("https://www.indeed.com.pk/Human-Resource-Manager-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnHRM = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Human-Resource-Manager-jobs",
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
    productcolxnHRM.items.push(item);
    console.log(productsHRM);
  });

  productsHRM.push(productcolxnHRM);
  console.log(JSON.stringify(productsHRM));
});

app.get("/human-resource-manager", function(req, res) {
  res.render("index", { products: productsHRM }); //index.handlebars views...
});

//Developer
request("https://www.indeed.com.pk/jobs?q=Developer&l=", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnDEV = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/jobs?q=Developer&l=",
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
    productcolxnDEV.items.push(item);
    console.log(productsDEV);
  });

  productsDEV.push(productcolxnDEV);
  console.log(JSON.stringify(productsDEV));
});

app.get("/developer", function(req, res) {
  res.render("index", { products: productsDEV }); //index.handlebars views...
});


//Jazz Telecom
request("https://www.indeed.com.pk/Jazz-Telecom-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnJazz = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Jazz-Telecom-jobs",
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
    productcolxnJazz.items.push(item);
    console.log(productsJazz);
  });

  productsJazz.push(productcolxnJazz);
  console.log(JSON.stringify(productsJazz));
});

app.get("/jazz", function(req, res) {
  res.render("index", { products: productsJazz }); //index.handlebars views...
});

//UMT
request("https://www.indeed.com.pk/Umt-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnUMT = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Umt-jobs",
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
    productcolxnUMT.items.push(item);
    console.log(productsUMT);
  });

  productsUMT.push(productcolxnUMT);
  console.log(JSON.stringify(productsUMT));
});

app.get("/umt", function(req, res) {
  res.render("index", { products: productsUMT }); //index.handlebars views...
});

//Ufone
request("https://www.indeed.com.pk/Ufone-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnUfone = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Ufone-jobs",
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
    productcolxnUfone.items.push(item);
    console.log(productsUfone);
  });

  productsUfone.push(productcolxnUfone);
  console.log(JSON.stringify(productsUfone));
});

app.get("/ufone", function(req, res) {
  res.render("index", { products: productsUfone }); //index.handlebars views...
});

//Hcit
request("https://www.indeed.com.pk/Hcit-Pvt-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnHcit = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Hcit-Pvt-jobs",
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
    productcolxnHcit.items.push(item);
    console.log(productsHcit);
  });

  productsHcit.push(productcolxnHcit);
  console.log(JSON.stringify(productsHcit));
});

app.get("/hcit", function(req, res) {
  res.render("index", { products: productsHcit }); //index.handlebars views...
});

//VRhiring
request("https://www.indeed.com.pk/Vr-Hiring-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnVRhiring = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Vr-Hiring-jobs",
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
    productcolxnVRhiring.items.push(item);
    console.log(productsVRhiring);
  });

  productsVRhiring.push(productcolxnVRhiring);
  console.log(JSON.stringify(productsVRhiring));
});

app.get("/VR-hiring", function(req, res) {
  res.render("index", { products: productsVRhiring}); //index.handlebars views...
});

//Optimum
request("https://www.indeed.com.pk/Optimum-Advisory-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnOA = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Optimum-Advisory-jobs",
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
    productcolxnOA.items.push(item);
    console.log(productsOA);
  });

  productsOA.push(productcolxnOA);
  console.log(JSON.stringify(productsOA));
});

app.get("/optimum-advisory", function(req, res) {
  res.render("index", { products: productsOA}); //index.handlebars views...
});

//Telenor
request("https://www.indeed.com.pk/Telenor-jobs", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnTelenor = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Telenor-jobs",
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
    productcolxnTelenor.items.push(item);
    console.log(productsTelenor);
  });

  productsTelenor.push(productcolxnTelenor);
  console.log(JSON.stringify(productsTelenor));
});

app.get("/telenor", function(req, res) {
  res.render("index", { products: productsTelenor}); //index.handlebars views...
});

//Islamabad
request("https://www.indeed.com.pk/Jobs-jobs-in-Islamabad", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnIslamabad = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Jobs-jobs-in-Islamabad",
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
    productcolxnIslamabad.items.push(item);
    console.log(productsIslamabad);
  });

  productsIslamabad.push(productcolxnIslamabad);
  console.log(JSON.stringify(productsIslamabad));
});

app.get("/islamabad", function(req, res) {
  res.render("index", { products: productsIslamabad}); //index.handlebars views...
});

//Rawalpindi
request("https://www.indeed.com.pk/Jobs-jobs-in-Rawalpindi", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnRawalpindi = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Jobs-jobs-in-Rawalpindi",
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
    productcolxnRawalpindi.items.push(item);
    console.log(productsRawalpindi);
  });

  productsRawalpindi.push(productcolxnRawalpindi);
  console.log(JSON.stringify(productsRawalpindi));
});

app.get("/rawalpindi", function(req, res) {
  res.render("index", { products: productsRawalpindi}); //index.handlebars views...
});

//Karachi
request("https://www.indeed.com.pk/Jobs-jobs-in-Karachi", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnKarachi = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Jobs-jobs-in-Karachi",
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
    productcolxnKarachi.items.push(item);
    console.log(productsKarachi);
  });

  productsKarachi.push(productcolxnKarachi);
  console.log(JSON.stringify(productsKarachi));
});

app.get("/karachi", function(req, res) {
  res.render("index", { products: productsKarachi}); //index.handlebars views...
});

//Lahore
request("https://www.indeed.com.pk/Jobs-jobs-in-Lahore", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnLahore = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Jobs-jobs-in-Lahore",
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
    productcolxnLahore.items.push(item);
    console.log(productsLahore);
  });

  productsLahore.push(productcolxnLahore);
  console.log(JSON.stringify(productsLahore));
});

app.get("/lahore", function(req, res) {
  res.render("index", { products: productsLahore}); //index.handlebars views...
});

//Peshawar
request("https://www.indeed.com.pk/Jobs-jobs-in-Peshawar", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnPeshawar = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Jobs-jobs-in-Peshawar",
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
    productcolxnPeshawar.items.push(item);
    console.log(productsPeshawar);
  });

  productsPeshawar.push(productcolxnPeshawar);
  console.log(JSON.stringify(productsPeshawar));
});

app.get("/peshawar", function(req, res) {
  res.render("index", { products: productsPeshawar}); //index.handlebars views...
});

//Sialkot
request("https://www.indeed.com.pk/Jobs-jobs-in-Sialkot", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnSialkot = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Jobs-jobs-in-Sialkot",
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
    productcolxnSialkot.items.push(item);
    console.log(productsSialkot);
  });

  productsSialkot.push(productcolxnSialkot);
  console.log(JSON.stringify(productsSialkot));
});

app.get("/sialkot", function(req, res) {
  res.render("index", { products: productsSialkot}); //index.handlebars views...
});

//Faisalabad
request("https://www.indeed.com.pk/Jobs-jobs-in-Faisalabad", function(err, res, body) {
  var $ = cheerio.load(body);
  var productcolxnFaisalabad = {
    source: "Indeed",
    link: "https://www.indeed.com.pk/Jobs-jobs-in-Faisalabad",
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
    productcolxnFaisalabad.items.push(item);
    console.log(productsFaisalabad);
  });

  productsFaisalabad.push(productcolxnFaisalabad);
  console.log(JSON.stringify(productsFaisalabad));
});

app.get("/faisalabad", function(req, res) {
  res.render("index", { products: productsFaisalabad}); //index.handlebars views...
});


var server = app.listen(3000);