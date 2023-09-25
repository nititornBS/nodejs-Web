module.exports = (app) => {
  const file_controller = require("../controllers/file.controller");
  
  console.log("888");
  var router = require("express").Router();
  console.log("999");
  router.post("/upload", file_controller.upload);
  router.get("/:name", file_controller.download);

  app.use("/api/file", router);
};
