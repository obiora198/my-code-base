const path = require("path");
const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

let upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype == "image/jpg" || file.mimetype == "image/png") {
      cb(null, true);
    } else {
      console.log("only jpg and png files supported");
      cb(null, false);
    }
  },
});
module.exports = upload