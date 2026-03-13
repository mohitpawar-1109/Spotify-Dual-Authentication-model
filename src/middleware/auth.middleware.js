const jwt = require("jsonwebtoken")

async function authArtist(req,res,next) {
     const token = req.cookies.token;
    
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
    
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
        if (decoded.role !== "admin") {
          return res
            .status(403)
            .json({ message: "you dont have accesss to create music" });
        }
        req.user = decoded
        next()

    }catch (ERR) {
    return res.status(401).json({ message: "unauthorized" });
  }
}

async function authUser(req,res,next) {
     const token = req.cookies.token;
    
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
    
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
        if (decoded.role !== "admin" && decoded.role !== "user") {
          return res
            .status(403)
            .json({ message: "you dont have accesss to create music" });
        }
        req.user = decoded
        next()

    }catch (ERR) {
    return res.status(401).json({ message: "unauthorized" });
  }
}

module.exports = {authArtist , authUser}