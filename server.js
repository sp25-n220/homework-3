const http = require("http");
const fs = require('fs');
const path = require('path');
const webfile = require('./webfile/webfile')



app = (request, response) => {

    const fileReq = new webfile(request.url);

    const filePath = path.join(__dirname, "views", fileReq.filename);
    
    const contentType = fs.existsSync(filePath) && fileReq.getExtension() ? fileReq.getMimeType() : "text/html";

    response.writeHead(200, {"Content-Type": contentType });

    let filePathToUse = path.join(__dirname, "views/404.html")
    

    if (fs.existsSync(filePath) && fileReq.getExtension()) { 
        filePathToUse = filePath; 

    } else if (!fileReq.getExtension()) {

        const checkIndex = path.join(filePath, "index.html")
        const checkHtml = filePath + ".html";
        
        if (fs.existsSync(checkIndex)) {
            filePathToUse = checkIndex;
        } else if (fs.existsSync(checkHtml)) {
            filePathToUse = checkHtml;
        }
    }

    response.write(fs.readFileSync(filePathToUse))
        
    response.end();
}

const server = http.createServer(app);

const port = process.env.PORT || 5445;


server.listen(port);