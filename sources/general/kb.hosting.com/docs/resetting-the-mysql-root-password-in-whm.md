# Source: https://kb.hosting.com/docs/resetting-the-mysql-root-password-in-whm

This article describes how to reset the MySQL root password using WebHost Manager (WHM). You may need to do this, for example, if you have forgotten the password.

- You must have root access on the server to reset the MySQL root password.
- Remember that the _MySQL_ root password is different from the root _account_ password. The following procedure only changes the password for the MySQL root user, not the server’s root user.

## 

[​](https://kb.hosting.com/docs/resetting-the-mysql-root-password-in-whm#resetting-the-mysql-root-password)

Resetting the MySQL root password

To reset the MySQL root password using WHM, follow these steps:

1. Log in to WebHost Manager.

 > 📘 Note If you do not know how to log in to your WebHost Manager account, please see [this article](https://kb.hosting.com/docs/accessing-webhost-manager).

2. In the search box at the upper left of the WHM screen, start typing **mysql root**, and then click **MySQL Root Password** when it becomes visible: 
 ![WebHost Manager - MySQL Root Password](https://static.hosting.com/kb/kb-whm-106-mysql-root-password.png)
3. In the **Password** and **Password (again)** text boxes, type the new password: 
 ![WebHost Manager - MySQL Root Password page](https://static.hosting.com/kb/kb-whm-78-reset-root-mysql-pw-page.png)

 > 👍 Tip Alternatively, you can click **Password Generator** and WHM generates a strong, random password for you.

4. Click **Change Password**. The new MySQL root password takes effect immediately.

## 

[​](https://kb.hosting.com/docs/resetting-the-mysql-root-password-in-whm#more-information)

More information

To view the official cPanel documentation about changing the MySQL root password, please visit [https://blog.cpanel.com/how-to-reset-the-mysql-root-password-and-mysql-user-passwords](https://blog.cpanel.com/how-to-reset-the-mysql-root-password-and-mysql-user-passwords).

## 

[​](https://kb.hosting.com/docs/resetting-the-mysql-root-password-in-whm#related-articles)

Related articles

- [Resetting the MySQL root password](https://kb.hosting.com/docs/reset-mysql-root-password)
- [Configuring remote MySQL access](https://kb.hosting.com/docs/remote-mysql-access)
- [Connecting to MySQL from the command line](https://kb.hosting.com/docs/connect-to-mysql-from-the-command-line)
- [Remote MySQL connections](https://kb.hosting.com/docs/remote-mysql-connections)
- [Restricting MySQL port access](https://kb.hosting.com/docs/restricting-mysql-port-access)

Was this page helpful?

YesNo

Ctrl+I