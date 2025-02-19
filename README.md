# Node.js HTTP Server Homework-3
## Web Server

This homework assignment is a Node.js web server project. The server calls pages index.html and about.html. It also serves javascript and images onto the html pages through our webfile and our server.js!  

### Live link

[My Webserver](https://homework-3-yv2i.onrender.com)
    

### How to setup 

- Clone:

	`git clone https://github.com/sp25-n220/homework-3.git`

- Install dependencies: 

    `npm i`
    `npm init -y`

- Start the server
    `node server.js`

- Browser
    - Go to your browser and type in http://localhost:5445

- To install: 

	`npm install -g webserver-joroper`

- After installation: 

    `webserver-joroper`

### Weekly Recap
1. fs:
    - The fs module writes to certain files or directories

2. path:
    - The path module handles the "pathing" (given the name) to where files or directories go.
3. http:
    - The http module helps us run servers locally. It listens to requests and gives out responses based on those requests!




### How the project works 

1. 
    - The server listens to the port I give it. In my case it listens to port 5445 and serves the index.html file.
2. 
    - Since we are using the fs and path modules, this server is dynamic. Meaning that any requests will be automatically updated within our server and our server will respond appropriatly.
3.
    - Also, our project is run through the views folder. We locate certain mime-types inside of that folder and if the mimetype is acceptable then it will be shown on our page. 
    - ```
         static mimeType = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png",
        }
    ```
    - This is what determines if we have acceptable types. I can add countless more but for my project this is all I need.
