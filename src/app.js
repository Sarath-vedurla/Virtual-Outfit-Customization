const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const { userAuth } = require('./middleware/auth');
 const cors = require('cors');

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/requests");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);
app.use("/",productRouter);
app.use("/",cartRouter);


connectDB()
.then(() =>{
    console.log("Database connection established...");
    app.listen(9000,()  => {
        console.log("server is sucessfully listening on port 9000....");
    });
}) 
.catch((err) => {
    console.error("Database cannot be connected");
});



