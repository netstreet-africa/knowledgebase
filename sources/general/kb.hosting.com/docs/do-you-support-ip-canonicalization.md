# Source: https://kb.hosting.com/docs/do-you-support-ip-canonicalization

Yes, you can set up IP canonicalization for your account. IP canonicalization is a technique sometimes used for SEO (search engine optimization). When a site’s IP address is canonicalized, the IP address redirects to the domain name. For example, if visitors enter your IP address in their web browser, they should be redirected to _example.com_ or _[www.example.com](http://www.example.com)_ (where _example.com_ represents your domain name). Otherwise, a search engine may index your site under both the IP address and the domain name. This duplicate content could potentially harm your site’s search engine ranking.

**Important**There is no guarantee that IP canonicalization will improve a site’s search engine ranking. There are many SEO techniques available, and search engine providers (for obvious reasons) do not disclose which techniques hurt or help a site’s ranking.

## 

[​](https://kb.hosting.com/docs/do-you-support-ip-canonicalization#requirements)

Requirements

There are two requirements for setting up IP canonicalization:

- You must have a dedicated IP address.
- You must set up a rewrite rule in an .htaccess file that redirects your IP address to your domain name. For example, the following configuration lines demonstrate one possible implementation. Replace _xxx.xxx.xxx.xxx_ with your own IP address, and replace _example.com_ with your domain name:

```
RewriteCond %{HTTP_HOST} ^xxx\.xxx\.xxx\.xxx
RewriteRule (.*) http://www.example.com/$1 [R=301,L]
```

For more information about how to use .htaccess files, please see [this article](https://kb.hosting.com/docs/using-htaccess-files).

Was this page helpful?

YesNo

Ctrl+I