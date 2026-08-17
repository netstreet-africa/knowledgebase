# Source: https://kb.hosting.com/docs/disabling-automatic-creation-of-the-robots-txt-file

By default, on shared and reseller servers, if a _robots.txt_ file does not exist in the document root (_public\_html_) directory, the server automatically creates a new _robots.txt_ file at midnight. This article describes how to disable this behavior. You may want to do this, for example, if you do not need to specify how search engines and web crawlers index your site.

## 

[​](https://kb.hosting.com/docs/disabling-automatic-creation-of-the-robots-txt-file#disabling-automatic-generation-of-the-robots-txt-file)

Disabling automatic generation of the robots.txt file

To prevent the server from automatically generating a _robots.txt_ file in the document root directory, follow these steps:

1. Log in to cPanel.

 > 📘 Note If you do not know how to log in to your cPanel account, please see [this article](https://kb.hosting.com/docs/accessing-cpanel).

2. In the **FILES** section of the cPanel home screen, click the **File Manager** icon: 
 ![cPanel - File Manager icon](https://static.hosting.com/kb/kb-cpanel-78-file-manager-icon.png)
3. In the left sidebar, click the **public\_html** folder.
4. On the top menu bar, click **\+ File**: 
 ![cPanel - File Manager - Create file](https://static.hosting.com/kb/kb-cpanel-78-file-manager-new-file.png)
5. In the **New File** dialog box, in the **New File Name** text box, type `robots.txt.ignore`: 
 ![cPanel - File Manager - New File dialog box](https://static.hosting.com/kb/kb-cpanel-94-file-manager-new-file-dialog-box.png)
6. Confirm that the **New file will be created in** text box is set to **/public\_html**.
7. Click **Create New File**. Automatic generation of the _robots.txt_ file is now disabled.

## 

[​](https://kb.hosting.com/docs/disabling-automatic-creation-of-the-robots-txt-file#more-information)

More information

For more information about the _robots.txt_ file, please vist [http://www.robotstxt.org](http://www.robotstxt.org).

## 

[​](https://kb.hosting.com/docs/disabling-automatic-creation-of-the-robots-txt-file#related-articles)

Related articles

- [Controlling search engines and web crawlers using the robots.txt file](https://kb.hosting.com/docs/controlling-search-engines-and-web-crawlers-using-the-robots-txt-file)

Was this page helpful?

YesNo

Ctrl+I