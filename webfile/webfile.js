const path = require('path');

class Webfile {
    filename = ' ';

    static mimeType = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png",
    }


    constructor(filename) {
        this.filename = filename;
    }

    getExtension() {
        return path.extname(this.filename);
    }


    getMimeType () {
        const fileExtension = this.getExtension();
        return Webfile.mimeType[fileExtension] || 'text/plain'; 
    }
}


module.exports = Webfile;



