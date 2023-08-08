const express = require("express")
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const productRoutes = require("./routes/productRoutes")

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})

//Set up express middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));

//Use product routes
app.use("/products",productRoutes)

//start the server
  
const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log("Server Running on 3000")
})