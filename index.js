const express = require("express");
const cors = require("cors");
const { json } = require("express");
const bodyParser = require("body-parser");
const connection = require("./Config/db");
const dotenv=require("dotenv");
const participentRoutes = require("./routes/participent.routes");
const joinRoutes = require("./routes/joinRoom.routes");
dotenv.config()
const contactRoutes = require("./routes/contactRoutes");



const app = express();


app.use(cors({
  origin: ["http://localhost:5173", "https://freefire42.vercel.app", "https://freefire42-jsr5jo40y-niks-nimjes-projects.vercel.app", "https://freefire42-git-main-niks-nimjes-projects.vercel.app","https://freefireturnament.vercel.app","https://freefireturnament-niks-nimjes-projects.vercel.app","https://freefireturnament-git-main-niks-nimjes-projects.vercel.app"],
  credentials: true,  // Allow credentials (if needed)
}));


app.use(json());
app.use(bodyParser.json());

app.use("/participent",participentRoutes)
app.use("/joinRoom",joinRoutes)
app.use("/contact", contactRoutes);

app.get("/",(req,res)=>{
  res.send("welcome to my api")
})

app.use("/uploads", express.static("uploads"));

app.listen(process.env.PORT || 3000 ,async()=>{
  try {
      await connection
      console.log(`server is running ${process.env.PORT}`)
    
  } catch (error) {
      console.log(error)
  }
})
