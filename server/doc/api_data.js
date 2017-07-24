define({ "api": [
  {
    "type": "get",
    "url": "/screenings",
    "title": "Request all screening records",
    "name": "Screenings",
    "group": "DataTable",
    "version": "0.0.0",
    "filename": "routes/dataTable_Routes.js",
    "groupTitle": "DataTable"
  },
  {
    "type": "get",
    "url": "/sleepScores",
    "title": "Request all sleepscoring records",
    "name": "SleepScores",
    "group": "DataTable",
    "version": "0.0.0",
    "filename": "routes/dataTable_Routes.js",
    "groupTitle": "DataTable"
  },
  {
    "type": "get",
    "url": "/DocumentTypes",
    "title": "Request all unique DocumentTypes",
    "name": "GetDocumentTypes",
    "group": "DocumentBrowse",
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "DocumentBrowse"
  },
  {
    "type": "get",
    "url": "/File",
    "title": "Request fileupload record by ID",
    "name": "GetFile",
    "group": "DocumentBrowse",
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "DocumentBrowse"
  },
  {
    "type": "get",
    "url": "/Files",
    "title": "Request all complete fileupload records",
    "name": "GetFiles",
    "group": "DocumentBrowse",
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "DocumentBrowse"
  },
  {
    "type": "get",
    "url": "/Sessions",
    "title": "Request all unique session IDs",
    "name": "GetSessions",
    "group": "DocumentBrowse",
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "DocumentBrowse"
  },
  {
    "type": "get",
    "url": "/Studies",
    "title": "Request all unique study IDs",
    "name": "GetStudies",
    "group": "DocumentBrowse",
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "DocumentBrowse"
  },
  {
    "type": "get",
    "url": "/TempFiles",
    "title": "Request all incomplete FILEUPLOAD records",
    "name": "GetTempFiles",
    "group": "DocumentBrowse",
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "DocumentBrowse"
  },
  {
    "type": "get",
    "url": "/Visits",
    "title": "Request all unique visit IDs",
    "name": "GetVisits",
    "group": "DocumentBrowse",
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "DocumentBrowse"
  },
  {
    "type": "post",
    "url": "/UpdateParsedStatus",
    "title": "Update \"parsed\" for fileupload by ID",
    "name": "PostUpdateParsedStatus",
    "group": "DocumentUpdate",
    "version": "0.0.0",
    "filename": "routes/documentUpdate_Routes.js",
    "groupTitle": "DocumentUpdate"
  },
  {
    "type": "post",
    "url": "/FileUpload",
    "title": "Upload new file",
    "name": "PostFileUpload",
    "group": "DocumentUpload",
    "description": "<p>Supports single, and bulk upload requests.</p> <p>CompleteFileDir = &quot;/study/visit/session/doctype/filename.ext&quot;</p> <p>TempFileDir = &quot;/temp/filename.ext&quot;</p> <p>Single uploads, with &quot;study&quot;, &quot;visit&quot;, &quot;session&quot;, and &quot;doctype&quot; provided in request, will be stored in CompleteFileDir.</p> <p>Single uploads, with &quot;study&quot;, &quot;visit&quot;, &quot;session&quot;, or &quot;doctype&quot; missing in request, will be stored in TempFileDir.</p> <p>Bulk uploads apply same metada to all files in object-array and are automatically placed in TempFileDir.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "docfile",
            "description": "<p>File object (or array of file objects) that will be uploaded.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "study",
            "defaultValue": "Null",
            "description": "<p>Study ID. Neccesary for &quot;complete&quot; upload.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "visit",
            "defaultValue": "Null",
            "description": "<p>Visit ID. Neccesary for &quot;complete&quot; upload.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "session",
            "defaultValue": "Null",
            "description": "<p>Session ID. Neccesary for &quot;complete&quot; upload.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "doctype",
            "defaultValue": "Null",
            "description": "<p>Doctype ID. Neccesary for &quot;complete&quot; upload.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notes",
            "defaultValue": "Null",
            "description": "<p>Notes, text field.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/user/4711",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/documentUpload_Routes.js",
    "groupTitle": "DocumentUpload"
  },
  {
    "type": "post",
    "url": "/NewTempFileRecord",
    "title": "Create new record for incomplete file",
    "name": "PostNewTempFileRecord",
    "group": "DocumentUpload",
    "version": "0.0.0",
    "filename": "routes/documentUpload_Routes.js",
    "groupTitle": "DocumentUpload"
  },
  {
    "type": "post",
    "url": "/Screenings",
    "title": "Post new screening records",
    "name": "PostScreenings",
    "group": "InsertData",
    "version": "0.0.0",
    "filename": "routes/insertData_Routes.js",
    "groupTitle": "InsertData"
  }
] });
