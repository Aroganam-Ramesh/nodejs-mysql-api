const express = require("express");
const router = express.Router();

//Importing controller
const forgotpassword = require("../controller/forgotpassword.controller");

    router.post("/resetpassword",forgotpassword.resetpassword)
    router.post ("/checkcode", forgotpassword.checkcode)
    router.put("/updatepassword/:id", forgotpassword.updatepassword);
    // router.get('/getOne/:id', Guide.getoneGuide);
    // router.put("/update/:id", Guide.updateUser);

    module.exports = router