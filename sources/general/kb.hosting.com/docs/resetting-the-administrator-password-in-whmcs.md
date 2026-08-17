# Source: https://kb.hosting.com/docs/resetting-the-administrator-password-in-whmcs

If you are a reseller running WHMCS, you may forget or lose the administrator password for your installation. This article shows two ways to reset the administrator password and regain access to your WHMCS account.

## 

[​](https://kb.hosting.com/docs/resetting-the-administrator-password-in-whmcs#method-#1-use-the-password-reset-web-link)

Method #1: Use the password reset web link

The easiest way to reset the administrator password is to use the **Forgot password?** feature. To do this, follow these steps:

1. Go to the login URL for your WHMCS installation.
2. On the login page, click **Forgot password?**: 
 ![WHMCS - Login page - Forgot password](https://static.hosting.com/kb/kb-whmcs-forgot-password.png)
3. In the **Username or Email address** text box, type the administrator’s email address, and then click **Reset Password**: 
 ![WHMCS - Reset password](https://static.hosting.com/kb/kb-whmcs-reset-password.png)
4. WHMCS sends a message with a password reset URL to the email address you specified in step 3. Click the password reset URL, and then type the new password.

## 

[​](https://kb.hosting.com/docs/resetting-the-administrator-password-in-whmcs#method-#2-reset-the-password-in-the-whmcs-database)

Method #2: Reset the password in the WHMCS database

If you are unable to use method #1, you can reset the password manually in the WHMCS database. To do this, follow these steps:

1. Log in to cPanel.

 > 📘 Note If you do not know how to log in to your cPanel account, please see [this article](https://kb.hosting.com/docs/accessing-cpanel).

2. On the **Tools** page, in the **Databases** section, click **phpMyAdmin**: 
 ![cPanel - Databases - phpMyAdmin icon](https://static.hosting.com/kb/kb-cpanel-jupiter-phpmyadmin-icon.png) The phpMyAdmin administration page appears in a new window.
3. In the left-hand pane of phpMyAdmin, click the name of the WHMCS database. A list of tables in the database appears.
4. Click the **tbladmins** table: 
 ![WHMCS - phyMyAdmin - tbladmins table](https://static.hosting.com/kb/kb-whmcs-password-phpmyadmin-tbladmins.png)
5. Locate the row for the administrator login that you want to reset, and then click **Edit**: 
 ![WHMCS - phyMyAdmin - tbladmins table - Edit](https://static.hosting.com/kb/kb-whmcs-password-phpmyadmin-edit.png)
6. In the **password** row, in the **Function** list box, select **MD5**: 
 ![WHMCS - phyMyAdmin - tbladmins table - Edit function](https://static.hosting.com/kb/kb-whmcs-password-phpmyadmin-edit-function.png)
7. In the **password** row, in the **Value** text box, delete all of the existing text: 
 ![WHMCS - phyMyAdmin - tbladmins table - Edit password value](https://static.hosting.com/kb/kb-whmcs-password-phpmyadmin-edit-password-value.png)
8. In the **Value** text box, type the new administrator password.
9. In the **passwordhash** row, in the **Value** text box, delete all of the existing text: 
 ![WHMCS - phyMyAdmin - tbladmins table - Edit passwordhash value](https://static.hosting.com/kb/kb-whmcs-password-phpmyadmin-edit-passwordhash-value.png)
10. Scroll to the bottom of the page, and then click **Go**. phpMyAdmin updates the database with the new password.
11. You should now be able to log in to WHMCS as the administrator by using the new password.

## 

[​](https://kb.hosting.com/docs/resetting-the-administrator-password-in-whmcs#related-articles)

Related articles

- [Connecting WHM to WHMCS](https://kb.hosting.com/docs/connecting-whm-to-whmcs)
- [Do you support WHMCS hosting?](https://kb.hosting.com/docs/do-you-support-whmcs-hosting)
- [Ordering a WHMCS license](https://kb.hosting.com/docs/ordering-a-whmcs-license)
- [WHMCS hosting](https://kb.hosting.com/docs/whmcs-hosting)

Was this page helpful?

YesNo

Ctrl+I