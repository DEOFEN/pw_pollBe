const express = require("express");
const app = express();
const v1Routes = require("./controller/v1/index")
const cors = require("cors")

app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/v1', v1Routes)

app.listen(3001, () => {
    console.log("SERVER IS UP AND RUNNING ON PORT: 3001")
})