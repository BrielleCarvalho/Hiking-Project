const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const router = express.Router();



// Get Database URI
const mongoURI = require("../../config/keys").mongoURI;

// Create mongo connection
const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs;

conn.once('open', () => {
        // Init stream
        gfs = Grid(conn.db, mongoose.mongo);
        gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
        url: mongoURI,
        file: (req, file) => {
                return new Promise((resolve, reject) => {
                        crypto.randomBytes(16, (err, buf) => {
                                if (err) {
                                        return reject(err);
                                }
                                const filename = buf.toString('hex') + path.extname(file.originalname);
                                const fileInfo = {
                                        filename: filename,
                                        bucketName: 'uploads'
                                };
                                resolve(fileInfo);
                        });
                });
        }
});
const upload = multer({ storage });


// @route POST /upload
// @desc  Uploads file to DB
router.post('/upload', upload.single('file'), (req, res) => {
        console.log(`Hitting upload image api route.`);
        console.log(req);
        // res.json({ file: req.file });
        res.redirect("/");
});

module.exports = router;