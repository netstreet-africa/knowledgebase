# Source: https://kb.hosting.com/docs/setting-up-url-frame-forwarding

This article describes how to set up URL frame forwarding.

## 

[​](https://kb.hosting.com/docs/setting-up-url-frame-forwarding#about-url-frame-forwarding)

About URL frame forwarding

URL frame forwarding enables you to load content from another site while displaying your own domain name in the browser’s address bar. For example, if your site uses the _example.com_ domain, you could use URL frame forwarding to display content from _hosting.com_, but visitors would still see _example.com_ in the address bar.

- This behavior is different from the more traditional _URL redirect_. With a URL redirect, the browser bar updates to display the forwarded site’s URL. For information about how to set up a URL redirect on your account, please see [this article](https://kb.hosting.com/docs/redirects).
- URL frame forwarding can affect search engine rankings and results, so use it carefully.

## 

[​](https://kb.hosting.com/docs/setting-up-url-frame-forwarding#setting-up-url-frame-forwarding)

Setting up URL frame forwarding

To set up URL frame forwarding, use an inline frame (**<iframe>** element) to load the external content. Additionally, you should define some CSS styling rules to ensure the borders and margins are set correctly for the page. To do this, follow these steps:

1. Using the [cPanel File Manager](https://kb.hosting.com/docs/cpanel-file-manager) or the SSH command prompt, open the _index.html_ file in your preferred text editor.
2. Copy the following code and then paste it into the _index.html_ file:

```
<html>
<head>
    <title>Title</title>
</head>
<style>
body {
    margin: 0;
    padding: 0;
}
body, iframe { 
    width: 100%;
    height: 100%;
}
iframe {
    border: 0;
}
</style>
<body>
    <iframe src="http://www.example.com"/>
</body>
</html>
```

3. In the code, replace _**[www.example.com](http://www.example.com)**_ with the site that you want to load, and replace _**Title**_ with the title that you want for the page.
4. Save your changes to the _index.html_ file.
5. Use your web browser to visit your site’s domain. The address bar should display your domain name, yet the page content should display the site you specified in step 3.

As you browse content on the external site, the browser’s address bar continues to display your domain name. It does not change, and does not include any of the external site’s relative paths.For example, if you load _example.com_ in an inline frame, and then visit _example.com/another-page_, the browser’s address bar continues to display only your domain name. It does not display the _another-page_ relative path.

## 

[​](https://kb.hosting.com/docs/setting-up-url-frame-forwarding#more-information)

More information

For more information about the **<iframe>** element, please visit [http://www.w3schools.com/tags/tag\_iframe.asp](http://www.w3schools.com/tags/tag_iframe.asp).

## 

[​](https://kb.hosting.com/docs/setting-up-url-frame-forwarding#related-articles)

Related articles

- [Redirects](https://kb.hosting.com/docs/redirects)

Was this page helpful?

YesNo

Ctrl+I