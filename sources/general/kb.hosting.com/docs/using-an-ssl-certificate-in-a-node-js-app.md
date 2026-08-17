# Source: https://kb.hosting.com/docs/using-an-ssl-certificate-in-a-node-js-app

This article demonstrates how to use an SSL certificate in a Node.js app. By using an SSL certificate in your app, you can support secure ( [HTTPS](https://en.wikipedia.org/wiki/HTTPS) ) connections.

## 

[​](https://kb.hosting.com/docs/using-an-ssl-certificate-in-a-node-js-app#prerequisites)

Prerequisites

To use an SSL certificate in a Node.js app, you must have the following files:

- Certificate file for the SSL certificate. Typically this file has a _.pem_ or _.crt_ extension.
- Private key file for the SSL certificate. Typically this file has a _.pem_ extension.
- Certificate Authority (CA) file for the SSL certificate. Typically this file has a _.pem_ or _.crt_ extension.

If you have not already done so, upload these files to the server where your Node.js app is stored.

## 

[​](https://kb.hosting.com/docs/using-an-ssl-certificate-in-a-node-js-app#loading-the-ssl-certificate-in-the-app)

Loading the SSL certificate in the app

To load your SSL certificate files in a Node.js app, you must pass their paths as parameters to the **https.createServer()** function. The following code sample demonstrates how to do this. It creates a basic server that supports secure HTTPS connections on port 9876 by passing the file locations (certificate file, private key file, and CA file) to the **https.createServer()** function:

```
const fs = require('fs');
const https = require('https');

const port = 9876;

const certFile = fs.readFileSync('/path/to/certificate.pem');
const caFile = fs.readFileSync('/path/to/ca_certificate.pem');
const keyFile = fs.readFileSync('/path/to/privatekey.pem');

let options = {
   cert: certFile,
   ca: caFile,
   key: keyFile
};

const httpsServer = https.createServer(options, (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response);
});

httpsServer.listen(port);
```

If you want to run this app, copy the code and paste it into a file. Modify the **certFile**, **caFile**, and **keyFile** variables to point to your own SSL certificate files. Start the application, and then use your web browser to go to [_https://localhost:9876_](https://localhost:9876). You should see “It works!” in your web browser.

**Important**Make sure you type **https://** in the browser address bar (not _http://_ ), or the connection will fail.

## 

[​](https://kb.hosting.com/docs/using-an-ssl-certificate-in-a-node-js-app#more-information)

More information

- For more information about the **https.createServer()** function, please visit [https://nodejs.org/api/https.html#httpscreateserveroptions-requestlistener](http://nodejs.org/api/https.html#httpscreateserveroptions-requestlistener).
- For more information about the SSL options for the **https.createServer()** function, please visit [https://nodejs.org/api/tls.html#tlscreatesecurecontextoptions](http://nodejs.org/api/tls.html#tlscreatesecurecontextoptions).

## 

[​](https://kb.hosting.com/docs/using-an-ssl-certificate-in-a-node-js-app#related-articles)

Related articles

- [Connecting to MySQL using Node.js](https://kb.hosting.com/docs/connecting-to-mysql-using-node-js)
- [Creating a Node.js application with cPanel using the Node.js Selector](https://kb.hosting.com/docs/create-application-with-nodejs-selector)
- [Creating persistent Node.js applications](https://kb.hosting.com/docs/making-persistent-node-js-applications)
- [Migrating a Node.js application to Node.js Selector](https://kb.hosting.com/docs/migrating-a-node-js-application-to-node-js-selector)
- [Migrating an existing application from Node.js Selector to a manual installation](https://kb.hosting.com/docs/migrating-an-existing-application-from-node-js-selector-to-a-manual-installation)
- [Node.js application error message: “Cannot GET” URL](https://kb.hosting.com/docs/node-js-application-error-message-cannot-get-url)

Was this page helpful?

YesNo

Ctrl+I