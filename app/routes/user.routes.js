const authJwt = require("../middleware/auth.jwt");

module.exports =(app)=>{
    const user_controller = require("../controllers/user.controller");
    var router = require("express").Router();
    router.get("/:us",user_controller.validUsername);
    // router.get("/",authJwt,user_controller.);
    app.use("/api/auth",router);
    router.post("/signup", user_controller.createNewuser);
    router.post("/login", user_controller.login);
    router.put("/:id",authJwt,user_controller.updateUserCtrl);
    router.delete("/:id",authJwt,user_controller.deletedUser);
    router.get("/", authJwt, user_controller.getAllUsers);
    
    // console.log("asdfasdf2222dasdadasdadasd");
};