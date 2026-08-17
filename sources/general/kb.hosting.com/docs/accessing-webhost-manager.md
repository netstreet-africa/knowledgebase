# Source: https://kb.hosting.com/docs/accessing-webhost-manager

This article describes how to log in and log out of WebHost Manager.

## 

[​](https://kb.hosting.com/docs/accessing-webhost-manager#logging-in-to-webhost-manager)

Logging in to WebHost Manager

There are several ways to log in to WebHost Manager. Use whichever method is most convenient for you.

### 

[​](https://kb.hosting.com/docs/accessing-webhost-manager#method-#1-log-in-to-webhost-manager-directly)

Method #1: Log in to WebHost Manager directly

To log in to WebHost Manager directly, follow these steps:

1. In your web browser, type the WebHost Manager address for your web site. You can use any of the following URLs:

 - _[https://www.example.com:2087](https://www.example.com:2087)_, where _**example.com**_ is your domain name.
 - _[https://www.example.com/whm](https://www.example.com/whm)_, where _**example.com**_ is your domain name.

 > 👍 Tip You can also use the address [https://whm.example.com](https://whm.example.com), where _**example.com**_ is your domain name. In some situations, this may be the only way to access WebHost Manager (for example, if you are behind a firewall that blocks port 2087). 
 > ![WebHost Manager login page](https://static.hosting.com/kb/kb-whm-login.png)

2. In the **Username** text box, type your cPanel username.
3. In the **Password** text box, type your cPanel password.
4. Click **Log in**. If you typed the correct username and password, the WebHost Manager home screen appears.

### 

[​](https://kb.hosting.com/docs/accessing-webhost-manager#method-#2-access-webhost-manager-from-cpanel)

Method #2: Access WebHost Manager from cPanel

To access WebHost Manager from cPanel, follow these steps:

1. Log in to cPanel.

 > 📘 Note If you do not know how to log in to your cPanel account, please see [this article](https://kb.hosting.com/docs/accessing-cpanel).

2. In the **Advanced** section of the cPanel home screen, click **WebHost Manager**: 
 ![cPanel - Advanced - WebHost Manager icon](https://static.hosting.com/kb/kb-cpanel-jupiter-advanced-webhost-manager-icon.png) The WebHost Manager home screen appears.

### 

[​](https://kb.hosting.com/docs/accessing-webhost-manager#method-#3-access-webhost-manager-through-the-hosting-com-hosting-panel)

Method #3: Access WebHost Manager through the hosting.com Hosting Panel

To ensure the WebHost Manager window opens correctly in your browser, you may need to allow pop-ups for _**my.hosting.com**_.

To access WebHost Manager through the Hosting Panel, follow these steps:

1. Log in to the Hosting Panel at [https://my.hosting.com](https://my.hosting.com).
2. In the left sidebar, under **Products & Services**, click **Hosting & Servers**: ![](https://files.readme.io/a6b28c954635ea9bd541e1448ac69955c5ba1203fed8409e77621af76ee2853c-image.png)
3. On the **Hosting & Servers** page, follow the appropriate step for your account:

 - If you have a reseller hosting account, click **Login to Control Panel**.
 - If you have a managed VPS or dedicated server, click **Login**.

 In a separate window, the Hosting Panel automatically logs you in to your WebHost Manager account.

## 

[​](https://kb.hosting.com/docs/accessing-webhost-manager#logging-out-of-webhost-manager)

Logging out of WebHost Manager

You should log out whenever you have finished using WebHost Manager, because this notifies the web server that you have finished your session. If you do not log out, the server automatically closes your session after a set period of time. However, there is a small possibility that an attacker could exploit the open connection before this automatic logout occurs. To log out of WebHost Manager, on the top menu bar click the person icon (![WebHost Manager - User Menu icon](https://static.hosting.com/kb/kb-whm-106-user-menu-icon.png)) at the top right, and then click **Log Out**.

Was this page helpful?

YesNo

Ctrl+I