# Source: https://kb.hosting.com/docs/wordpress-security

This article describes several ways to enhance the security of your WordPress site.

## 

[​](https://kb.hosting.com/docs/wordpress-security#essential-wordpress-security-measures)

Essential WordPress security measures

There are several essential steps you should take to enhance the security of a WordPress site:

### 

[​](https://kb.hosting.com/docs/wordpress-security#strong-wordpress-passwords)

Strong WordPress Passwords

Use a strong password for all administrator accounts, and change passwords periodically. Strong passwords are not easily guessed. To break into an account with strong passwords, hackers use a brute force attack. Stopping brute force attacks is covered below.

**️ Warning**If your site has been compromised (or you even suspect that it has been compromised), you must also change the security keys in the _wp-config.php_ file that are used to encrypt cookies. Simply changing passwords is not enough, because an attacker may still have a valid cookie and be able to access your site.For more information about how to configure security keys in the _wp-config.php_ file, please visit [http://codex.wordpress.org/Editing\_wp-config.php#Security\_Keys](http://codex.wordpress.org/Editing_wp-config.php#Security_Keys).

### 

[​](https://kb.hosting.com/docs/wordpress-security#unique-wordpress-username)

Unique WordPress Username

Do not use the default _admin_ username for the administrator. Instead, create a user with a different username, assign the administrative role to it, and then delete the default _admin_ administrator.

### 

[​](https://kb.hosting.com/docs/wordpress-security#update-wordpress-plugins-and-themes)

Update WordPress, Plugins and Themes

WordPress is updated regularly to address known vulnerabilities. Running old versions of WordPress makes it easy for hackers to gain access to your site. Run updates regularly to make sure WordPress and all related plugins are up to date. For more information about how to update WordPress, please see [this article](https://kb.hosting.com/docs/updating-wordpress).

### 

[​](https://kb.hosting.com/docs/wordpress-security#delete-unused-wordpress-plugins-and-themes)

Delete Unused WordPress Plugins and Themes

Even though unused plugins and themes are disabled, that code is still visible on the Internet and can be a target for hackers. Be sure to delete any unused themes or plugins in order to reduce the opportunity for hackers to gain access to your site.

### 

[​](https://kb.hosting.com/docs/wordpress-security#regular-backups)

Regular Backups

Make regular backups of your WordPress site. Backups will not prevent a site from being compromised but they do help get a site back online quickly in case of compromise. You can use Softaculous to back up, restore, and update your WordPress site from one convenient interface. For more information about how to do this, please see [this article](https://kb.hosting.com/docs/manage-your-applications).

## 

[​](https://kb.hosting.com/docs/wordpress-security#defending-against-wordpress-brute-force-attacks)

Defending against WordPress brute force attacks

A brute force attack is a simplistic type of attack where a user or script tries to gain access to a site by repeatedly guessing different username and password combinations. Unfortunately, many people have username and password combinations that are easily guessed, so brute force attacks are often effective. If your WordPress site experiences a brute force attack, you may notice that the site responds slowly, or not at all. Additionally, you may be unable to log in. This is because the flood of login attempts during a brute force attack causes numerous PHP and MySQL calls. These calls increase server load and adversely affect website performance. There are several measures you can take to defend against brute force attacks on your site:

### 

[​](https://kb.hosting.com/docs/wordpress-security#method-#1-password-protect-the-wordpress-login-page)

Method #1: Password-protect the WordPress login page

WordPress uses the _wp-login.php_ file for logins. By adding password protection to this file, you add another layer of security to your site. Users must enter a username and password before they can even access the _wp-login.php_ file to log in to WordPress. To set up password protection for the WordPress login page, follow these steps:

1. Use your web browser to go to [http://www.htaccesstools.com/htpasswd-generator](http://www.htaccesstools.com/htpasswd-generator).
2. In the **Username** text box, type a username.
3. In the **Password** text box, type a password for the user.
4. Click **Create.htpasswd file**, and then copy the line of text. The line of text should contain the username you specified, followed by a colon ( **:** ), and then the encrypted password. For example:

```
username:$apr1$IUQgDA6U$qbXb9wEnjirNCqxezpjoe5
```

5. Create a file named _.wp-password_ in your hosting.com account’s home directory (_/home/username_, where _username_ represents your account username). Paste the line of text from the previous step into the file. There are two ways you can create and edit this file:

- Log in to your account [using SSH](https://kb.hosting.com/docs/using-ssh-secure-shell), and [use a text editor](https://kb.hosting.com/docs/editing-text-files) from the command line.
- Log in to your account using cPanel, and use an editor in the [File Manager](https://kb.hosting.com/docs/cpanel-file-manager).

**Important**Make sure that the _.wp-password_ filename begins with a period (**.** ).

6. Save the _.wp-password_ file and exit the text editor.
7. Create an _.htaccess_ file in the directory where you installed WordPress:

- If you installed WordPress in the domain’s document root, then this directory is _/home/username/public\_html_, where _username_ represents your hosting.com account username.
- If you installed WordPress in a subdirectory or subdomain, then this directory is _/home/username/public\_html/directory_, where _directory_ represents the WordPress location.

8. Copy and paste the following text into the _.htaccess_ file:

```
# Prevent Apache from serving .ht* files:
<FilesMatch "^\.ht">
  Order allow,deny
  Deny from all
</FilesMatch>
ErrorDocument 401 "401 Unauthorized"
ErrorDocument 403 "403 Forbidden"

# Protect wp-login.php:
<Files wp-login.php>
  AuthUserFile /home/USERNAME/.wp-password
  AuthName "Please log in"
  AuthType Basic
  require user WP-USERNAME
</Files>
```

9. In the _.htaccess_ file, make the following changes:

- Replace _USERNAME_ with your hosting.com account (cPanel) username.
- Replace _WP-USERNAME_ with the username that you specified in step 2.

If you want to display a login message different from “Please log in”, you can change the **AuthName** directive’s value to whatever text you want.

10. Save the _.htaccess_ file and exit the text editor.
11. Use your web browser to go to the WordPress login page (for example, [_http://www.example.com/wp-admin_](http://www.example.com/wp-admin), where _example.com_ represents your domain name).
12. You should be prompted to type a username and password. Type the username and password combination that you specified in steps 2 and 3. The WordPress login page should appear, and you can now log in to WordPress as you normally do.

### 

[​](https://kb.hosting.com/docs/wordpress-security#method-#2-block-ip-addresses-from-accessing-the-wordpress-login-page)

Method #2: Block IP addresses from accessing the WordPress login page

Another way to counter brute force attacks is by blocking IP addresses. With this configuration, you can allow one (or several) IP addresses to access the WordPress login page, and block everything else.

**Important**If you enable IP address blocking and also use Cloudflare, make sure you test site logins thoroughly. On some server configurations, the combination of Cloudflare and IP address blocking may prevent logins from working correctly.

To prevent IP addresses from accessing the login page, follow these steps:

1. Create an _.htaccess_ file in the directory where you installed WordPress:

- If you installed WordPress in the domain’s document root, then this directory is _/home/username/public\_html_, where _username_ represents your hosting.com account username.
- If you installed WordPress in a subdirectory or subdomain, then this directory is _/home/username/public\_html/directory_, where _directory_ represents the WordPress location.

If you already followed the steps to set up password protection for the login page, use the same _.htaccess_ file that you created in that procedure.

2. Copy and paste the following text into the _.htaccess_ file:

```
<Files wp-login.php>
  order deny,allow
  allow from xxx.xxx.xxx.xxx
  deny from all
</Files>
```

3. In the _.htaccess_ file, replace _xxx.xxx.xxx.xxx_ with the IP address that you want to allow for WordPress logins. All other IP addresses will be blocked from accessing the _wp-login.php_ page.

- To grant access to multiple IP addresses, you can add multiple **allow from** lines.
- To determine your current IP address, you can visit [http://ipfinder.us](http://ipfinder.us).

4. Save the _.htaccess_ file and exit the text editor.
5. Test your WordPress site to make sure that it still functions correctly, and that you can access the administration login page.

### 

[​](https://kb.hosting.com/docs/wordpress-security#method-#3-change-the-wordpress-login-url)

Method #3: Change the WordPress login URL

The default WordPress login page is _wp-login.php_, and a basic WordPress installation does not allow you to change this location. However, the [Rename wp-login.php plugin](http://wordpress.org/plugins/rename-wp-login) allows you to change the WordPress login URL. Doing so can reduce the impact of brute force attacks, which are usually scripts that are programmed to hit the _wp-login.php_ page over and over again with login attempts. When you change the WordPress login URL, anyone who tries to access the _wp-login.php_ page or _wp-admin_ directory receives a “404 Not Found” error message. To change the WordPress login URL, follow these steps:

1. Log in to your WordPress site.
2. Click **Plugins**, and then click **Add New**.
3. In the **Search** text box, type `rename wp-login`, and then click **Search Plugins**.
4. The **Rename wp-login.php** plugin appears in the list of search results.
5. Under **Rename wp-login.php**, click **Install Now**, and then click **OK** to start the installation.
6. After the plugin installation finishes, click **Activate Plugin**. The **Permalink Settings** page appears.
7. Under **Common Settings**, select a permalink structure for your site.

 > 📘 Note You cannot use the default permalink structure with the Rename wp-login.php plugin.

8. Under **Login**, in the **Rename wp-login.php** text box, type a URL for the login page, or accept the default value of **login**.
9. Click **Save Changes**. The new WordPress login URL appears near the top of the **Permalink Settings** page.
10. Test your WordPress site to make sure that it still functions correctly, and that you can access the login page using the new URL. Additionally, if you try to access _wp-login.php_ or _wp-admin_, you should receive a “404 Not Found” error message.

### 

[​](https://kb.hosting.com/docs/wordpress-security#method-#4-enable-cloudflare-for-your-site)

Method #4: Enable Cloudflare for your site

Cloudflare is a content delivery network (CDN) that can block malicious requests before they reach your site. For example, Cloudflare-enabled sites were significantly protected during a large-scale WordPress brute force attack that occurred in April 2013. Cloudflare works by routing traffic to your website through its own network. As a result, Cloudflare is able to block certain types of malicious requests. Cloudflare also increases website performance by leveraging its worldwide server network to deliver content to users more efficiently. For general information about Cloudflare, please see [these articles](https://kb.hosting.com/docs/cloudflare). For instructions about how to enable Cloudflare for your site, please see [this article](https://kb.hosting.com/docs/how-to-activate-cloudflare).

**Important**If you enable Cloudflare and also use the IP address blocking method described in this article, make sure you test site logins thoroughly. On some server configurations, the combination of Cloudflare and IP address blocking may prevent logins from working correctly.

## 

[​](https://kb.hosting.com/docs/wordpress-security#related-articles)

Related articles

- [Securing a hacked site](https://kb.hosting.com/docs/securing-a-hacked-site)
- [Updating WordPress](https://kb.hosting.com/docs/updating-wordpress)

Was this page helpful?

YesNo

Ctrl+I