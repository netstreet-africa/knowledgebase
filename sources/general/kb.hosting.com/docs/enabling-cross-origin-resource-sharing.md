# Source: https://kb.hosting.com/docs/enabling-cross-origin-resource-sharing

This article describes how to enable Cross-Origin Resource Sharing (CORS) for your site. CORS enables web browsers to access resources at a different location from where the web application is running. For example, if you have an application running on _[https://example.com](https://example.com)_ that requests resources from _[https://example-2.com](https://example-2.com)_, the server on _example-2.com_ must allow such requests.

**Important**If you are using secure ( _https://_ ) connections with cross-origin resource sharing, make sure the servers have valid and trusted SSL certificates. Even if CORS is enabled correctly on the server, some browsers (such as Firefox) do not complete cross-origin requests if the SSL certificate itself is invalid.

## 

[​](https://kb.hosting.com/docs/enabling-cross-origin-resource-sharing#enabling-cors)

Enabling CORS

To enable CORS, you must configure the web server to send an HTTP header that permits remote access to its resources. To do this, create or modify the _.htaccess_ file in the directory where you want to permit CORS requests. Add the following line to the _.htaccess_ file:

```
Header set Access-Control-Allow-Origin "*"
```

## 

[​](https://kb.hosting.com/docs/enabling-cross-origin-resource-sharing#more-information)

More information

For more information about CORS, please visit [https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

## 

[​](https://kb.hosting.com/docs/enabling-cross-origin-resource-sharing#related-articles)

Related articles

- [Configuring frames with the X-Frame-Options header](https://kb.hosting.com/docs/configuring-frames-with-the-x-frame-options-header)

Was this page helpful?

YesNo

Ctrl+I