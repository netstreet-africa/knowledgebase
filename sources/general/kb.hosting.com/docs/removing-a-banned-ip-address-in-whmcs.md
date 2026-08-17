# Source: https://kb.hosting.com/docs/removing-a-banned-ip-address-in-whmcs

If you are a reseller running WHMCS, after three failed logins, WHMCS bans your IP address. You can wait for the ban to expire, or you can remove the banned IP address in the WHMCS database to regain access to your account immediately. The following procedure demonstrates how to do this. To remove a banned IP address in the WHMCS database, follow these steps:

1. Log in to cPanel.

 > 📘 Note If you do not know how to log in to your cPanel account, please see [this article](https://kb.hosting.com/docs/accessing-cpanel).

2. On the **Tools** page, in the **Databases** section, click **phpMyAdmin**: 
 ![cPanel - Databases - phpMyAdmin icon](https://static.hosting.com/kb/kb-cpanel-jupiter-phpmyadmin-icon.png) The phpMyAdmin administration page appears in a new window.
3. In the left-hand pane of phpMyAdmin, click the name of the WHMCS database. A list of tables in the database appears.
4. Click the **tblbannedips** table: 
 ![WHMCS - phpMyAdmin - tblbannedips table](https://static.hosting.com/kb/kb-whmcs-tblbannedips-table.png)
5. Locate the row that contains the banned IP address, and then click **Delete**: 
 ![WHMCS - phpMyAdmin - Delete row](https://static.hosting.com/kb/kb-phpmyadmin-delete-row.png)
6. Click **OK** to confirm the deletion. phpMyAdmin deletes the database row.
7. You should now be able to log in to WHMCS from the previously banned IP address.

 > 👍 Tip If your IP address is banned often, you may want to add it to the list of whitelisted IP addresses in WHMCS. For more information, please visit [https://docs.whmcs.com/Security\_Tab#Whitelisted\_IPs](http://docs.whmcs.com/Security_Tab#Whitelisted_IPs).

## 

[​](https://kb.hosting.com/docs/removing-a-banned-ip-address-in-whmcs#related-articles)

Related articles

- [Resetting the administrator password in WHMCS](https://kb.hosting.com/docs/resetting-the-administrator-password-in-whmcs)
- [Ordering a WHMCS license](https://kb.hosting.com/docs/ordering-a-whmcs-license)

Was this page helpful?

YesNo

Ctrl+I