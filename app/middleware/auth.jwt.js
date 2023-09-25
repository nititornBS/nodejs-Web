const jwt = require("jsonwebtoken");
const scKey = ("../config/jwt.config.js");
const verifyToken = (req,res,next)=>{
    const token = req.header["x-access-token"];
    if (!token) {
        return res.status(403).send({message: "NO token provided"});
    }
    jwt.verify(token,scKey.secret ,(err,decoses)=>{
        if (err) {
            return res.status(401).send({message:"Unauthorized"});
        }
        req.id = decoded.id;
        next();
    })
};
module.exports = verifyToken;