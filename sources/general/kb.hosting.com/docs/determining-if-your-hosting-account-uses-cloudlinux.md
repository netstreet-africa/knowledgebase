# Source: https://kb.hosting.com/docs/determining-if-your-hosting-account-uses-cloudlinux

This article shows how to determine if your hosting account is on a server running CloudLinux.

## 

[​](https://kb.hosting.com/docs/determining-if-your-hosting-account-uses-cloudlinux#about-cloudlinux)

About CloudLinux

The CloudLinux operating system provides several useful features, including:

- [Python Selector](https://kb.hosting.com/docs/using-the-python-selector)
- [Node.js Selector](https://kb.hosting.com/docs/create-application-with-nodejs-selector)
- [Easy PHP configuration and version switching](https://kb.hosting.com/docs/changing-php-versions-and-settings-in-cpanel)

All **shared, reseller, and Turbo hosting accounts** are on servers running CloudLinux. For **managed VPS and managed Dedicated servers**, the situation is a bit more complicated:

- For managed VPS and Dedicated server accounts activated in May 2023 or after, CloudLinux **is** installed.
- For managed VPS and Dedicated server accounts activated before May 2023, CloudLinux **is not** installed.

To determine if your hosting account is on a server running CloudLinux, use any of the following methods:

## 

[​](https://kb.hosting.com/docs/determining-if-your-hosting-account-uses-cloudlinux#method-#1-use-cpanel)

Method #1: Use cPanel

To use cPanel to determine if your account is running on CloudLinux, follow these steps:

1. Log in to cPanel.

 > 📘 Note If you do not know how to log in to your cPanel account, please see [this article](https://kb.hosting.com/docs/accessing-cpanel).

2. On the **Tools** page, in the right sidebar, click **Server Information**: 
 ![cPanel - Server Information](https://static.hosting.com/kb/kb-cpanel-jupiter-home-page-server-info.png)
3. Locate the **Kernel Version** row: 
 ![cPanel - Server Information - Kernel Version row](https://static.hosting.com/kb/kb-cpanel-110-server-info-kernel-version.png)
4. If the kernel version contains **lve**, then the server is running CloudLinux. For example, the following server is running CloudLinux: 
 ![cPanel - Server Information - Kernel Version detail](https://static.hosting.com/kb/kb-cpanel-110-server-info-kernel-version-detail.png)

 > 👍 Tip Alternatively, on the **Tools** page, in the **Software** section, look for any of the following icons:
 > 
 > - **Setup Node.js App**: 
 > ![cPanel - Software - Setup Node.js App](https://static.hosting.com/kb/kb-cpanel-110-software-setup-nodejs-app.png)
 > - **Setup Python App**: 
 > ![cPanel - Software - Setup Python App](https://static.hosting.com/kb/kb-cpanel-110-software-setup-python-app.png)
 > - **Select PHP Version**: 
 > ![cPanel - Software - Select PHP Version](https://static.hosting.com/kb/kb-cpanel-110-software-select-php-version.png)
 > 
 > If any of these icons appear, then the server is running CloudLinux.

## 

[​](https://kb.hosting.com/docs/determining-if-your-hosting-account-uses-cloudlinux#method-#2-use-webhost-manager)

Method #2: Use WebHost Manager

To use WebHost Manager (WHM) to determine if your account is running on CloudLinux, follow these steps:

1. Log in to WebHost Manager.

 > 📘 Note If you do not know how to log in to your WebHost Manager account, please see [this article](https://kb.hosting.com/docs/accessing-webhost-manager).

2. The operating system version appears on the top banner. For example, the following server is running CloudLinux: 
 ![WebHost Manager - Banner - Operating System](https://static.hosting.com/kb/kb-whm-110-cloudlinux.png)
3. Alternatively, look in the **Statistics** sidebar: 
 ![WebHost Manager - Statistics sidebar - Operating System](https://static.hosting.com/kb/kb-whm-110-statistics-cloudlinux.png)

## 

[​](https://kb.hosting.com/docs/determining-if-your-hosting-account-uses-cloudlinux#method-#3-use-the-command-line-interface)

Method #3: Use the command-line interface

If you want to use the command-line interface to determine if your account is running on CloudLinux, follow these steps:

1. Log in to your account [using SSH](https://kb.hosting.com/docs/using-ssh-secure-shell).
2. At the command prompt, type the following command:

    ```
    uname -r
    ```

3. If the kernel version contains _lve_, then the server is running CloudLinux. For example, the following output indicates that the server is running CloudLinux:

    ```
    3.10.0-962.3.2.lve1.5.73.el7.x86_64
    ```

## 

[​](https://kb.hosting.com/docs/determining-if-your-hosting-account-uses-cloudlinux#more-information)

More information

For more information about CloudLinux, please visit [https://www.cloudlinux.com/](https://www.cloudlinux.com/).

Was this page helpful?

YesNo

Ctrl+I