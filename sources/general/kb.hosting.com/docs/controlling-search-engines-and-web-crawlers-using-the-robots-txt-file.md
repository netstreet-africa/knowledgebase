# Source: https://kb.hosting.com/docs/controlling-search-engines-and-web-crawlers-using-the-robots-txt-file

You can specify which sections of your site you would like search engines and web crawlers to index, and which sections they should ignore. To do this, you specify directives in a robots.txt file, and place the robots.txt file in your document root directory.

The directives you specify in a robots.txt file are only requests. Although most search engines and many web crawlers respect these directives, they are _not_ obligated to do so. Therefore, you should never rely on the robots.txt file to hide content you do not want indexed.

## 

[​](https://kb.hosting.com/docs/controlling-search-engines-and-web-crawlers-using-the-robots-txt-file#using-robots-txt-directives)

Using robots.txt directives

The directives used in a robots.txt file are straightforward and easy to understand. The most commonly used directives are **User-agent**,**Disallow**, and **Crawl-delay**. Here are some examples:

### 

[​](https://kb.hosting.com/docs/controlling-search-engines-and-web-crawlers-using-the-robots-txt-file#example-1-instruct-all-crawlers-to-access-all-files)

Example 1: Instruct all crawlers to access all files

```
User-agent: *
Disallow:
```

In this example, any crawler (specified by the **User-agent** directive and the asterisk wildcard) can access any file on the site.

### 

[​](https://kb.hosting.com/docs/controlling-search-engines-and-web-crawlers-using-the-robots-txt-file#example-2-instruct-all-crawlers-to-ignore-all-files)

Example 2: Instruct all crawlers to ignore all files

```
User-agent: *
Disallow: /
```

In this example, all crawlers are instructed to ignore all files on the site.

### 

[​](https://kb.hosting.com/docs/controlling-search-engines-and-web-crawlers-using-the-robots-txt-file#example-3-instruct-all-crawlers-to-ignore-a-particular-directory)

Example 3: Instruct all crawlers to ignore a particular directory

```
User-agent: *
Disallow: /scripts/
```

In this example, all crawlers are instructed to ignore the _scripts_ directory.

### 

[​](https://kb.hosting.com/docs/controlling-search-engines-and-web-crawlers-using-the-robots-txt-file#example-4-instruct-all-crawlers-to-ignore-a-particular-file)

Example 4: Instruct all crawlers to ignore a particular file

```
User-agent: *
Disallow: /documents/index.html
```

In this example, all crawlers are instructed to ignore the _documents/index.html_ directory.

### 

[​](https://kb.hosting.com/docs/controlling-search-engines-and-web-crawlers-using-the-robots-txt-file#example-5-control-the-crawl-interval)

Example 5: Control the crawl interval

```
User-agent: *
Crawl-delay: 30
```

In this example, all crawlers are instructed to wait at least 30 seconds between successive requests to the web server.

## 

[​](https://kb.hosting.com/docs/controlling-search-engines-and-web-crawlers-using-the-robots-txt-file#more-information)

More information

For more information about the robots.txt file, please visit [http://www.robotstxt.org](http://www.robotstxt.org).

Was this page helpful?

YesNo

Ctrl+I