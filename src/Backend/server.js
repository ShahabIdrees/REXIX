const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.json([
    {
      Name: "Macbook Air",
      Brand: "Apple",
      imgUrl: "/public/mbookairm2.jpeg",
      description: "ARM-Based M2, 8gb Ram, 256gb SSD, 13.4 inches ",
      category: "Computers",
    },
    {
      Name: "Macbook Air 2017",
      Brand: "Apple",
      imgUrl: "/mbookair.png",
      description: "intel core i5, 8gb Ram, 256gb SSD, 13.3 inches ",
      category: "Computers",
    },
    {
      Name: "Macbook Air",
      Brand: "Apple",
      imgUrl: "",
      description: "ARM-Based M2, 8gb Ram, 256gb SSD, 13.4 inches ",
      category: "Computers",
    },
    {
      Name: "Macbook Air",
      Brand: "Apple",
      imgUrl: "",
      description: "ARM-Based M2, 8gb Ram, 256gb SSD, 13.4 inches ",
      category: "Computers",
    },
    {
      Name: "Macbook Air",
      Brand: "Apple",
      imgUrl: "",
      description: "ARM-Based M2, 8gb Ram, 256gb SSD, 13.4 inches ",
      category: "Computers",
    },
    {
      Name: "Macbook Air",
      Brand: "Apple",
      imgUrl: "",
      description: "ARM-Based M2, 8gb Ram, 256gb SSD, 13.4 inches ",
      category: "Computers",
    },
    {
      Name: "Macbook Air",
      Brand: "Apple",
      imgUrl: "",
      description: "ARM-Based M2, 8gb Ram, 256gb SSD, 13.4 inches ",
      category: "Computers",
    },
    {
      Name: "Macbook Air",
      Brand: "Apple",
      imgUrl: "",
      description: "ARM-Based M2, 8gb Ram, 256gb SSD, 13.4 inches ",
      category: "Computers",
    },
  ]);
});

app.listen(3000, () => console.log("Listening on port 3000"));
