require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//Modules
const user = require("./modules/user/user.network");
const userHistory = require("./modules/user-history/user-history.network");

app.get("/", (req, resp) => {
    return resp.status(200).json({
        timestamp: new Date().toISOString(),
        status: 200,
        message: "successfull"
    });
});

app.use("/", user);
app.use("/", userHistory);

app.listen(PORT, async () => {
    console.log(`Server start in the port: ${PORT}`);    
    /*seeder.seed(initData, {dropDatabase: false}).then(function(dbData) {
        console.log(dbData)
        
    }).catch(function(err) {
        console.error(err.message)
        process.exit(1)
    });*/
    //const result = await initDb()
    //console.log(result)
    
    // if(result.error) {
    //     console.error('Error in the initialization of the database')
    //     //process.exit(1)
    // }
    
    
});