var fs = require('fs');
var mkdirp = require('mkdirp');
var mkpath = require('mkpath');

var express = require('express');
var fileUpload = require('express-fileupload');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
var monk = require('monk');
var cors = require('cors');

var DataTableController = require('../controllers/dataTable_Controller')
var DocumentBrowseController = require('../controllers/documentBrowse_Controller')
var DocumentDownloadController = require('../controllers/documentDownload_Controller')
var DocumentUpdateController = require('../controllers/documentUpdate_Controller')
var DocumentUploadController = require('../controllers/documentUpload_Controller')
var GeneralController = require('../controllers/general_Controller')

var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

module.exports = function(app,db){
    /**
     * @api {post} /UpdateFile/:id Update metadata for a file
     * @apiName PostUpdateFile
     * @apiGroup Files_Update
      * @apiDescription Used to update metada, or complete a fileupload record entry.
      * Provide document ID in URL, and values in request body.
      * @apiParam {String} id          Unique string, created by DB at time of insertion.
      * @apiParam {String} keyToUpdate          Provide all key value paiors to update. Keys will be created if neccesary.
      *
      * @apiExample Example usage:
      * http://localhost/UpdateFile/59794d97e2bb5e2408584d86
      *
      * @apiSuccessExample {json} Success-Response:
      *     HTTP/1.1 200 OK
    *    {
    *        "ok": 1,
    *        "nModified": 1,
    *        "n": 1,
    *        "opTime": {
    *            "ts": "6447281906034671618",
    *            "t": 2
    *        },
    *        "electionId": "7fffffff0000000000000002"
    *    }
      */
    app.post('/UpdateFile/:id', function(req,res){
        var id = req.params.id;
        var changes = req.body;
        if(!id){
            res.status(500).json({"error": "No ID provided."});
        } else {
            DocumentUpdateController.updateDocument(res, db, id, changes);
        }

    });
}



// module.exports = router;
