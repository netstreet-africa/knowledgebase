# Source: https://kb.hosting.com/docs/configuring-and-using-websocket-connections

This article describes how to configure and use WebSocket connections on a VPS or dedicated server.

## 

[​](https://kb.hosting.com/docs/configuring-and-using-websocket-connections#about-websocket-connections)

About WebSocket connections

The [WebSocket protocol](https://websocket.org/) enables you to establish persistent, two-way communication between a browser and a server over a single TCP socket. Web applications can then be responsive in real-time, without the need to poll a server for new information. Hosting.com supports WebSocket connections on the following plans:

- VPS (managed and unmanaged).
- Dedicated servers.

Hosting.com does not support WebSockets on shared or reseller hosting accounts at this time.

The following procedures guide you through the process of setting up and using WebSocket connections.

## 

[​](https://kb.hosting.com/docs/configuring-and-using-websocket-connections#step-1-web-server-configuration)

Step 1: Web server configuration

The first step is to enable WebSocket connections on the web server. How you do this depends on the type of account you have:

- If you **do not** have root access to your server, our support team will configure the web server for you. Please open a support ticket at [https://my.hosting.com](https://my.hosting.com) and provide the following information:
 - The domain or URL you want to proxy for WebSocket connections.
 - The port number on which your WebSocket server application runs.
- If you **do** have root access to your server, you can configure your web server for WebSocket connections independently. The exact steps to do this depend on the web server you are running:
 - For information about how to configure Apache for WebSockets, please see [https://httpd.apache.org/docs/2.4/mod/mod\_proxy\_wstunnel.html](https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html).
 - For information about how to configure Nginx for WebSockets, please see [https://nginx.org/en/docs/http/websocket.html](https://nginx.org/en/docs/http/websocket.html).
 - For information about how to configure other web servers for WebSockets, please see the relevant documentation for that server.

## 

[​](https://kb.hosting.com/docs/configuring-and-using-websocket-connections#step-2-websocket-server-application)

Step 2: WebSocket server application

After you configure the web server to route WebSocket connections, you are ready to run a WebSocket server application that accepts and processes those connections. You can write this application using any programming language, but the most common implementations are in Python or Node.js. Functionally-equivalent code samples for these two languages follow.

**Important**These code samples are for proof-of-concept purposes, and are not intended for production use. You should make sure your own code is suitable for a production environment.

### 

[​](https://kb.hosting.com/docs/configuring-and-using-websocket-connections#python-server-code-sample)

Python server code sample

To run WebSockets in Python, use the [websockets library](https://websockets.readthedocs.io/en/stable/).

You should run a newer Python version on the server (at least Python 3.9). If the server’s package repositories only have older Python versions, you can download and compile Python yourself. For information about how to do this, please see [Configuring and using a newer version of Python](https://kb.hosting.com/docs/using-a-newer-version-of-python).

To set up a Python virtual environment, install the websockets library, and create a server application, follow these steps:

1. Log in to the server using SSH.
2. At the command prompt, type the following commands:

    ```
    python3 -m venv websocketenv
    cd websocketenv
    source bin/activate
    pip install websockets
    ```

3. To create a basic WebSockets server that runs on port 5678, copy the following code, and then paste it into a file named _server.py_:

    ```
    #!/usr/bin/env python
    
    import asyncio
    from websockets.asyncio.server import serve
    
    async def echo(websocket):
        async for message in websocket:
            print('Received [' + message + ']')
            await websocket.send(message)
    
    async def main():
        async with serve(echo, "localhost", 5678) as server:
            await server.serve_forever()
    
    if __name__ == "__main__":
        asyncio.run(main())
    ```

4. Within the virtual environment, type the following command to start the server:

    ```
    python3 server.py
    ```

 The WebSocket server application is now running, and you are ready to [set up the WebSocket client](https://kb.hosting.com/docs/configuring-and-using-websocket-connections#step-3-websocket-client).

### 

[​](https://kb.hosting.com/docs/configuring-and-using-websocket-connections#node-js-server-code-sample)

Node.js server code sample

To run WebSockets in Node.js, use the [ws library](https://github.com/websockets/ws).

You should run a newer Node.js version on the server (at least Node.js 16). If the server’s package repositories only have older Node.js versions, you can download and install a newer Node.js version yourself. For information about how to do this, please see [Installing and configuring Node.js on managed hosting](https://kb.hosting.com/docs/installing-and-configuring-nodejs-on-managed-hosting).

To install the ws library and create a server application, follow these steps:

1. Log in to the server using SSH.
2. At the command prompt, type the following command:

    ```
    npm install ws
    ```

3. To create a basic WebSockets server that runs on port 5678, copy the following code, and then paste it into a file named _server.mjs_:

    ```
    import { WebSocketServer } from 'ws';
    
    const wss = new WebSocketServer({ port: 5678 });
    
    wss.on('connection', function connection(ws) {
      ws.on('error', console.error);
    
      ws.on('message', function message(data) {
        console.log('Received [%s]', data);
        ws.send(data.toString());
      });
    });
    ```

 > 🚧 Important Make sure you save the file with an _.mjs_ extension, not _.js_.

4. Type the following command to start the server:

    ```
    node server.mjs
    ```

 The WebSocket server application is now running, and you are ready to [set up the WebSocket client](https://kb.hosting.com/docs/configuring-and-using-websocket-connections#step-3-websocket-client).

## 

[​](https://kb.hosting.com/docs/configuring-and-using-websocket-connections#step-3-websocket-client)

Step 3: WebSocket client

At this point, the web server is configured to tunnel WebSocket connections, and you have a running WebSocket server. You are now ready to set up and test WebSocket connections from a web browser.

### 

[​](https://kb.hosting.com/docs/configuring-and-using-websocket-connections#client-web-page-code-sample)

Client web page code sample

This basic web page contains a JavaScript function that opens a secure WebSocket connection and sends some data to the server, which the server then echoes back to the client. In line 9 (**let socket = …**), make sure you replace _example.com_ with your own server’s domain name (or IP address):

```
<!DOCTYPE html>
<html>
<head>
  <title>WebSocket test</title>
<script>
"use strict";

function webSocketTest() {
  let socket = new WebSocket("wss://example.com/");

  socket.onopen = function(event) {
    alert("Connection established");
    alert("Sending data to server");
    socket.send("Hello from WebSockets");
  };

  socket.onmessage = function(event) {
    alert(`Received data from server: ${event.data}`);
  };

  socket.onclose = function(event) {
    if (event.wasClean) {
      alert(`Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      alert('Connection died');
    }
  };

  socket.onerror = function(event) {
    alert(`[error]`);
  };
}
</script>
</head>
<body onload="webSocketTest()">
  <p>WebSocket test</p>
</body>
</html>
```

Save this page on the server, and then load it in your web browser. You should receive popup messages about the connection, and the client message “Hello from WebSockets” echoed back to you from the server. You now have a fully functioning WebSockets application!

## 

[​](https://kb.hosting.com/docs/configuring-and-using-websocket-connections#step-4-optional--make-the-server-application-persistent)

Step 4 (optional): Make the server application persistent

In most cases, you will want your WebSocket server application to start automatically after the server reboots or if the application crashes. There are several ways to do this, but if you have root access to the server, a _systemd_ service is quick and easy to set up. To do this, follow these steps:

1. Using your preferred text editor, in the _/etc/systemd/system_ directory, create a file named _websocket-server.service_.
2. Copy **one** of the following text blocks, and then paste it into the _websocket-server.service_ file. The first text block demonstrates how to start the Python-based WebSocket server application. The second text block demonstrates how to start the Node.js-based WebSocket server application. Update the paths and filenames in the **ExecStart** line as needed for your own configuration. **Starting a Python-based application:**

    ```
    [Unit]
    Description=WebSocket Server Daemon
    After=network-online.target
    
    [Service]
    ExecStart=/home/username/sockenv/bin/python3 /home/username/sockenv/server.py
    Restart=always
    RestartSec=5
    
    [Install]
    WantedBy=multi-user.target
    ```

 **Starting a Node.js-based application:**

    ```
    [Unit]
    Description=WebSocket Server Daemon
    After=network-online.target
    
    [Service]
    ExecStart=/home/username/bin/node /home/username/server.mjs
    Restart=always
    RestartSec=5
    
    [Install]
    WantedBy=multi-user.target
    ```

3. Save your changes to the _websocket-server.service_ file.
4. At the command prompt, type the following commands:

    ```
    chmod 664 /etc/systemd/system/websocket-server.service
    systemctl --system daemon-reload
    systemctl start websocket-server.service
    ```

5. To confirm the service started correctly, type the following command:

    ```
    systemctl status websocket-server.service
    ```

6. To enable the service to start automatically after the server is rebooted, type the following command:

    ```
    systemctl enable websocket-server.service
    ```

## 

[​](https://kb.hosting.com/docs/configuring-and-using-websocket-connections#related-articles)

Related articles

- [Do you support WebSocket connections?](https://kb.hosting.com/docs/do-you-support-websockets)

Was this page helpful?

YesNo

Ctrl+I