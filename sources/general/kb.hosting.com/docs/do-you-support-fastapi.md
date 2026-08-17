# Source: https://kb.hosting.com/docs/do-you-support-fastapi

[FastAPI](https://fastapi.tiangolo.com/) is a Python-based web framework for building APIs (Application Programming Interfaces). Because FastAPI is asynchronous, it requires the Asynchronous Server Gateway Interface ([ASGI](https://en.wikipedia.org/wiki/Asynchronous_Server_Gateway_Interface)) instead of the Web Server Gateway Interface ([WSGI](https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface)). Our managed hosting solutions use [Passenger](https://www.phusionpassenger.com/) and WSGI to manage Python applications, so FastAPI does not work on these plans. However, if you have an unmanaged hosting account, you can install and configure FastAPI yourself. For information about how to do this, please see [Installing FastAPI on unmanaged servers](https://kb.hosting.com/docs/installing-fastapi-on-unmanaged-servers).

## 

[​](https://kb.hosting.com/docs/do-you-support-fastapi#more-information)

More information

For more information about FastAPI, please visit [https://fastapi.tiangolo.com](https://fastapi.tiangolo.com).

## 

[​](https://kb.hosting.com/docs/do-you-support-fastapi#related-articles)

Related articles

- [Do you support WebSocket connections?](https://kb.hosting.com/docs/do-you-support-websockets)
- [Installing and configuring Flask on a Linux shared hosting account](https://kb.hosting.com/docs/installing-and-configuring-flask-on-linux-shared-hosting)
- [Installing FastAPI on unmanaged servers](https://kb.hosting.com/docs/installing-fastapi-on-unmanaged-servers)

Was this page helpful?

YesNo

Ctrl+I