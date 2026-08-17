# Source: https://kb.hosting.com/docs/configuring-frames-with-the-x-frame-options-header

This article describes how to configure access to frame content using the **X-Frame-Options** header.

## 

[​](https://kb.hosting.com/docs/configuring-frames-with-the-x-frame-options-header#loading-frame-content)

Loading frame content

When you try to view a web page that includes one or more frames, you may experience an issue where the frame content does not load. For example, in the **Mozilla Firefox** web browser, you see only a blank area where the frame content should appear on the page. Additionally, the Developer Tools console displays an error message that resembles the following:

```
Load denied by X-Frame-Options: "sameorigin" from "https://example.com/", site does not permit cross-origin framing from "https://example.com/test.html"
```

In the **Google Chrome** browser, you see the following content: 
![Google Chrome - frame load error message](https://static.hosting.com/kb/kb-chrome-frame-error.png) Additionally, the Developer Tools console displays an error message that resembles the following:

```
Refused to display 'https://example.com/' in a frame because it set 'X-Frame-Options' to 'sameorigin'.
```

These types of problems occur when a web server sends an **X-Frame-Options** HTTP header whose value is one of the following:

- **sameorigin:** When the **X-Frame-Options** header is set to **sameorigin**, content can only be loaded in a frame that has the same origin as the page itself. For example, if the server at _example-1.com_ sends the **X-Frame-Options** header set to **sameorigin**, then a page at _example-2.com_ cannot load content from _example-1.com_ in a frame.
- **deny:** When the **X-Frame-Options** header is set to **deny**, content cannot be loaded in a frame at all.

## 

[​](https://kb.hosting.com/docs/configuring-frames-with-the-x-frame-options-header#configuring-the-x-frame-options-header)

Configuring the X-Frame-Options header

The **X-Frame-Options** header is sent by default with the value **sameorigin**. Therefore, if you want to share content between multiple sites that you control, you must disable the **X-Frame-Options** header. To do this, add the following line to the _.htaccess_ file in the directory where you want to allow remote access:

```
Header always unset X-Frame-Options
```

To verify that the server is not sending the **X-Frame-Options** header, you can use the _curl_ command. Type the following command at the command line, replacing _**example.com**_ with your own domain name:

```
curl -I http://example.com
```

## 

[​](https://kb.hosting.com/docs/configuring-frames-with-the-x-frame-options-header#more-information)

More information

For more information about the **X-Frame-Options** header, please visit [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options).

## 

[​](https://kb.hosting.com/docs/configuring-frames-with-the-x-frame-options-header#related-articles)

Related articles

- [Enabling Cross-Origin Resource Sharing (CORS)](https://kb.hosting.com/docs/enabling-cross-origin-resource-sharing)

Was this page helpful?

YesNo

Ctrl+I