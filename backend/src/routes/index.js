const { Router } = require("express");


const contactFormRouter = require("./contactFormRouter");


const router = Router();


router.use("/contactForm", contactFormRouter);


module.exports = router;
