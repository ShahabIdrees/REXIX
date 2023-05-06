const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn.js");

// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
//     else console.log("Connection established");
//   });
//   console.log(`Server is running on port: ${port}`);
// });

//ou9PSD3Z67wgvuXA

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

app.get("/getCategories", function (req, res) {
  res.json([
    { name: "Computers", img_url: "/Computers.jpg", products: [{}] },
    { name: "Movies", img_url: "/Movies.jpg", products: [{}] },
    { name: "Cars", img_url: "/Cars.jpg", products: [{}] },
    { name: "Books", img_url: "/Books.jpg", products: [{}] },
    { name: "Gym & Fitness", img_url: "/gym.jpg", products: [{}] },
    { name: "Home Appliances", img_url: "/HomeAppliances.jpg", products: [{}] },
    { name: "Kitchenware", img_url: "/Kitchenware.jpg", products: [{}] },
    { name: "Restaurants", img_url: "/Restaurants.jpg", products: [{}] },
    { name: "Sports", img_url: "/Sports.jpg", products: [{}] },
    { name: "Computers", img_url: "/Computers.jpg", products: [{}] },
    { name: "Movies", img_url: "/Movies.jpg", products: [{}] },
    { name: "Cars", img_url: "/Cars.jpg", products: [{}] },
    { name: "Books", img_url: "/Books.jpg", products: [{}] },
    { name: "Gym & Fitness", img_url: "/gym.jpg", products: [{}] },
    { name: "Home Appliances", img_url: "/HomeAppliances.jpg", products: [{}] },
    { name: "Kitchenware", img_url: "/Kitchenware.jpg", products: [{}] },
    { name: "Restaurants", img_url: "/Restaurants.jpg", products: [{}] },
    { name: "Sports", img_url: "/Sports.jpg", products: [{}] },
    { name: "Computers", img_url: "/Computers.jpg", products: [{}] },
    { name: "Movies", img_url: "/Movies.jpg", products: [{}] },
    { name: "Cars", img_url: "/Cars.jpg", products: [{}] },
    { name: "Books", img_url: "/Books.jpg", products: [{}] },
    { name: "Gym & Fitness", img_url: "/gym.jpg", products: [{}] },
    { name: "Home Appliances", img_url: "/HomeAppliances.jpg", products: [{}] },
    { name: "Kitchenware", img_url: "/Kitchenware.jpg", products: [{}] },
    { name: "Restaurants", img_url: "/Restaurants.jpg", products: [{}] },
    { name: "Sports", img_url: "/Sports.jpg", products: [{}] },
    { name: "Computers", img_url: "/Computers.jpg", products: [{}] },
    { name: "Movies", img_url: "/Movies.jpg", products: [{}] },
    { name: "Cars", img_url: "/Cars.jpg", products: [{}] },
    { name: "Books", img_url: "/Books.jpg", products: [{}] },
    { name: "Gym & Fitness", img_url: "/gym.jpg", products: [{}] },
    { name: "Home Appliances", img_url: "/HomeAppliances.jpg", products: [{}] },
    { name: "Kitchenware", img_url: "/Kitchenware.jpg", products: [{}] },
    { name: "Restaurants", img_url: "/Restaurants.jpg", products: [{}] },
    { name: "Sports", img_url: "/Sports.jpg", products: [{}] },
  ]);
});

app.get("/getTopProducts", function (req, res) {
  res.json([
    {
      Name: "Macbook Air",
      Brand: "Apple",
      imgUrl: "/mbookairm2.jpeg",
      description: "ARM-Based M2, 8gb Ram, 256gb SSD, 13.4 inches ",
      category: "Computers",
    },
    {
      Name: "Moby-Dick",
      Brand: "Herman Melville (Author)",
      imgUrl: "/Books.jpg",
      description:
        "Thought provoking, Engaging Story, Unique Plot, Emotional resonance ",
      category: "Books",
    },
    {
      Name: "Barbell Plates",
      Brand: "G-Fit",
      imgUrl: "/gym.jpg",
      description:
        '25 lb plates, 15" diameter, Beautiful Colors, Durable Materials, Precise markings ',
      category: "Gym & Fitness",
    },
    {
      Name: " Air-Fryer",
      Brand: "Phillips",
      imgUrl: "/HomeAppliances.jpg",
      description:
        "110V-240V, Rapid air technology, Easy to use, Healthy Cooking ",
      category: "Home Appliances",
    },
    {
      Name: "Retina Imac 27 inches 2019",
      Brand: "Apple",
      imgUrl: "/Imac.jpg",
      description: "Octa core Core-i9, 64gb Ram, 2TB SSD, 27 inches 5k display",
      category: "Computers",
    },
    {
      Name: "Spatula",
      Brand: "Spatulava",
      imgUrl: "/Kitchenware.jpg",
      description: "Heat-resistant, Flexible, Durable, Comfortable Grip ",
      category: "Kitchenware",
    },
    {
      Name: "Base ball bat",
      Brand: "Kookaburra",
      imgUrl: "/Sports.jpg",
      description:
        "Maple wood, Comfortable grip, Durable, Customizable length & weight",
      category: "Sports",
    },
    {
      Name: "Macbook Air",
      Brand: "Apple",
      imgUrl: "/mbookairm2.jpeg",
      description: "ARM-Based M2, 8gb Ram, 256gb SSD, 13.4 inches ",
      category: "Computers",
    },
    {
      Name: "Moby-Dick",
      Brand: "Herman Melville (Author)",
      imgUrl: "/Books.jpg",
      description:
        "Thought provoking, Engaging Story, Unique Plot, Emotional resonance",
      category: "Books",
    },
    {
      Name: "Barbell Plates",
      Brand: "G-Fit",
      imgUrl: "/gym.jpg",
      description:
        '25 lb plates, 15" diameter, Beautiful Colors, Durable Materials, Precise markings',
      category: "Gym & Fitness",
    },
    {
      Name: "Air-Fryer",
      Brand: "Phillips",
      imgUrl: "/HomeAppliances.jpg",
      description:
        "110V-240V, Rapid air technology, Easy to use, Healthy Cooking",
      category: "Home Appliances",
    },
    {
      Name: "Retina Imac 27 inches 2019",
      Brand: "Apple",
      imgUrl: "/Imac.jpg",
      description: "Octa core Core-i9, 64gb Ram, 2TB SSD, 27 inches 5k display",
      category: "Computers",
    },
    {
      Name: "Spatula",
      Brand: "Spatulava",
      imgUrl: "/Kitchenware.jpg",
      description: "Heat-resistant, Flexible, Durable, Comfortable Grip",
      category: "Kitchenware",
    },
    {
      Name: "Base ball bat",
      Brand: "Kookaburra",
      imgUrl: "/Sports.jpg",
      description:
        "Maple wood, Comfortable grip, Durable, Customizable length & weight",
      category: "Sports",
    },
  ]);
});

app.get("/getTopCategories", function (req, res) {
  res.json([
    { name: "Computers", img_url: "/Computers.jpg", products: [{}] },
    { name: "Movies", img_url: "/Movies.jpg", products: [{}] },
    { name: "Cars", img_url: "/Cars.jpg", products: [{}] },
    { name: "Books", img_url: "/Books.jpg", products: [{}] },
    { name: "Gym & Fitness", img_url: "/gym.jpg", products: [{}] },
    { name: "Home Appliances", img_url: "/HomeAppliances.jpg", products: [{}] },
    { name: "Kitchenware", img_url: "/Kitchenware.jpg", products: [{}] },
    { name: "Restaurants", img_url: "/Restaurants.jpg", products: [{}] },
  ]);
});

app.get("/getForYouProducts", function (req, res) {
  res.json([
    {
      Name: "Macbook Air",
      Brand: "Apple",
      imgUrl: "/mbookairm2.jpeg",
      description: "ARM-Based M2, 8gb Ram, 256gb SSD, 13.4 inches ",
      category: "Computers",
    },
    {
      Name: "Moby-Dick",
      Brand: "Herman Melville (Author)",
      imgUrl: "/Books.jpg",
      description:
        "Thought provoking, Engaging Story, Unique Plot, Emotional resonance ",
      category: "Books",
    },
    {
      Name: "Barbell Plates",
      Brand: "G-Fit",
      imgUrl: "/gym.jpg",
      description:
        '25 lb plates, 15" diameter, Beautiful Colors, Durable Materials, Precise markings ',
      category: "Gym & Fitness",
    },
    {
      Name: " Air-Fryer",
      Brand: "Phillips",
      imgUrl: "/HomeAppliances.jpg",
      description:
        "110V-240V, Rapid air technology, Easy to use, Healthy Cooking ",
      category: "Home Appliances",
    },
    {
      Name: "Retina Imac 27 inches 2019",
      Brand: "Apple",
      imgUrl: "/Imac.jpg",
      description: "Octa core Core-i9, 64gb Ram, 2TB SSD, 27 inches 5k display",
      category: "Computers",
    },
    {
      Name: "Spatula",
      Brand: "Spatulava",
      imgUrl: "/Kitchenware.jpg",
      description: "Heat-resistant, Flexible, Durable, Comfortable Grip ",
      category: "Kitchenware",
    },
    {
      Name: "Base ball bat",
      Brand: "Kookaburra",
      imgUrl: "/Sports.jpg",
      description:
        "Maple wood, Comfortable grip, Durable, Customizable length & weight",
      category: "Sports",
    },
    {
      Name: "Macbook Air",
      Brand: "Apple",
      imgUrl: "/mbookairm2.jpeg",
      description: "ARM-Based M2, 8gb Ram, 256gb SSD, 13.4 inches ",
      category: "Computers",
    },
    {
      Name: "Moby-Dick",
      Brand: "Herman Melville (Author)",
      imgUrl: "/Books.jpg",
      description:
        "Thought provoking, Engaging Story, Unique Plot, Emotional resonance",
      category: "Books",
    },
    {
      Name: "Barbell Plates",
      Brand: "G-Fit",
      imgUrl: "/gym.jpg",
      description:
        '25 lb plates, 15" diameter, Beautiful Colors, Durable Materials, Precise markings',
      category: "Gym & Fitness",
    },
    {
      Name: "Air-Fryer",
      Brand: "Phillips",
      imgUrl: "/HomeAppliances.jpg",
      description:
        "110V-240V, Rapid air technology, Easy to use, Healthy Cooking",
      category: "Home Appliances",
    },
    {
      Name: "Retina Imac 27 inches 2019",
      Brand: "Apple",
      imgUrl: "/Imac.jpg",
      description: "Octa core Core-i9, 64gb Ram, 2TB SSD, 27 inches 5k display",
      category: "Computers",
    },
    {
      Name: "Spatula",
      Brand: "Spatulava",
      imgUrl: "/Kitchenware.jpg",
      description: "Heat-resistant, Flexible, Durable, Comfortable Grip",
      category: "Kitchenware",
    },
    {
      Name: "Base ball bat",
      Brand: "Kookaburra",
      imgUrl: "/Sports.jpg",
      description:
        "Maple wood, Comfortable grip, Durable, Customizable length & weight",
      category: "Sports",
    },
    {
      Name: "Moby-Dick",
      Brand: "Herman Melville (Author)",
      imgUrl: "/Books.jpg",
      description:
        "Thought provoking, Engaging Story, Unique Plot, Emotional resonance",
      category: "Books",
    },
    {
      Name: "Barbell Plates",
      Brand: "G-Fit",
      imgUrl: "/gym.jpg",
      description:
        '25 lb plates, 15" diameter, Beautiful Colors, Durable Materials, Precise markings',
      category: "Gym & Fitness",
    },
  ]);
});

app.get("/getFeedContent", function (req, res) {
  res.json([
    {
      Name: "Macbook Air",
      Brand: "Apple",
      imgUrl: "/mbookairm2.jpeg",
      description: "ARM-Based M2, 8gb Ram, 256gb SSD, 13.4 inches ",
      category: "Computers",
    },
    {
      Name: "Moby-Dick",
      Brand: "Herman Melville (Author)",
      imgUrl: "/Books.jpg",
      description:
        "Thought provoking, Engaging Story, Unique Plot, Emotional resonance ",
      category: "Books",
    },
    {
      Name: "Barbell Plates",
      Brand: "G-Fit",
      imgUrl: "/gym.jpg",
      description:
        '25 lb plates, 15" diameter, Beautiful Colors, Durable Materials, Precise markings ',
      category: "Gym & Fitness",
    },
    {
      Name: " Air-Fryer",
      Brand: "Phillips",
      imgUrl: "/HomeAppliances.jpg",
      description:
        "110V-240V, Rapid air technology, Easy to use, Healthy Cooking ",
      category: "Home Appliances",
    },
    {
      Name: "Retina Imac 27 inches 2019",
      Brand: "Apple",
      imgUrl: "/Imac.jpg",
      description: "Octa core Core-i9, 64gb Ram, 2TB SSD, 27 inches 5k display",
      category: "Computers",
    },
    {
      Name: "Spatula",
      Brand: "Spatulava",
      imgUrl: "/Kitchenware.jpg",
      description: "Heat-resistant, Flexible, Durable, Comfortable Grip ",
      category: "Kitchenware",
    },
    {
      Name: "Base ball bat",
      Brand: "Kookaburra",
      imgUrl: "/Sports.jpg",
      description:
        "Maple wood, Comfortable grip, Durable, Customizable length & weight",
      category: "Sports",
    },
    {
      Name: "Macbook Air",
      Brand: "Apple",
      imgUrl: "/mbookairm2.jpeg",
      description: "ARM-Based M2, 8gb Ram, 256gb SSD, 13.4 inches ",
      category: "Computers",
    },
    {
      Name: "Moby-Dick",
      Brand: "Herman Melville (Author)",
      imgUrl: "/Books.jpg",
      description:
        "Thought provoking, Engaging Story, Unique Plot, Emotional resonance",
      category: "Books",
    },
    {
      Name: "Barbell Plates",
      Brand: "G-Fit",
      imgUrl: "/gym.jpg",
      description:
        '25 lb plates, 15" diameter, Beautiful Colors, Durable Materials, Precise markings',
      category: "Gym & Fitness",
    },
    {
      Name: "Air-Fryer",
      Brand: "Phillips",
      imgUrl: "/HomeAppliances.jpg",
      description:
        "110V-240V, Rapid air technology, Easy to use, Healthy Cooking",
      category: "Home Appliances",
    },
    {
      Name: "Retina Imac 27 inches 2019",
      Brand: "Apple",
      imgUrl: "/Imac.jpg",
      description: "Octa core Core-i9, 64gb Ram, 2TB SSD, 27 inches 5k display",
      category: "Computers",
    },
    {
      Name: "Spatula",
      Brand: "Spatulava",
      imgUrl: "/Kitchenware.jpg",
      description: "Heat-resistant, Flexible, Durable, Comfortable Grip",
      category: "Kitchenware",
    },
    {
      Name: "Base ball bat",
      Brand: "Kookaburra",
      imgUrl: "/Sports.jpg",
      description:
        "Maple wood, Comfortable grip, Durable, Customizable length & weight",
      category: "Sports",
    },
    {
      Name: "Moby-Dick",
      Brand: "Herman Melville (Author)",
      imgUrl: "/Books.jpg",
      description:
        "Thought provoking, Engaging Story, Unique Plot, Emotional resonance",
      category: "Books",
    },
    {
      Name: "Barbell Plates",
      Brand: "G-Fit",
      imgUrl: "/gym.jpg",
      description:
        '25 lb plates, 15" diameter, Beautiful Colors, Durable Materials, Precise markings',
      category: "Gym & Fitness",
    },
  ]);
});

app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
