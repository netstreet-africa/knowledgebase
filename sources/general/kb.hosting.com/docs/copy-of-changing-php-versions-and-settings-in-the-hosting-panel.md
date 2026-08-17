# Source: https://kb.hosting.com/docs/copy-of-changing-php-versions-and-settings-in-the-hosting-panel

## 

[​](https://kb.hosting.com/docs/copy-of-changing-php-versions-and-settings-in-the-hosting-panel#changing-the-php-version)

Changing the PHP version

To change the active PHP version, follow these steps:

1. Log in to your Enhance control panel and navigate to the customer account you want to change the PHP version for
2. When the control panel appears, in the left sidebar, click **Websites**: ![](https://files.readme.io/228bef28a564fa447f4a92d5c208a9c69d68e7e5322737068090c99d2d6b34a5-image.png)
3. On the **Manage websites** page, click the website you want to manage.
4. A list of tabs appears at the top of the page. Click the **Advanced** tab, and then click **Developer tools**: ![](https://files.readme.io/d61773971b252670d1aaa77aa52298563ca5c27202e6d7931b2966ff4221ddc4-image.png)
5. In the **PHP** section, in the **Version** list box, select the PHP version you want to use for your site: ![](https://files.readme.io/721957ecfacf6e8a7b7751cb0277bd85c40e72aef2c349b82ef9e703bc5571b0-image.png)
6. Click **Update**.

**Important**Make sure the new PHP version is compatible with any applications you are running. Otherwise, your website may not work correctly.

## 

[​](https://kb.hosting.com/docs/copy-of-changing-php-versions-and-settings-in-the-hosting-panel#changing-php-settings)

Changing PHP settings

You can change php.ini directives to customize your PHP environment. To do this, follow these steps:

1. Log in to your Enhance account and navigate to the customer account you want to modify PHP settings for.
2. When the control panel appears, in the left sidebar, click **Websites**: ![](https://files.readme.io/228bef28a564fa447f4a92d5c208a9c69d68e7e5322737068090c99d2d6b34a5-image.png)
3. On the **Manage websites** page, click the website you want to manage.
4. A list of tabs appears at the top of the page. Click the **Advanced** tab, and then click **Developer tools**: ![](https://files.readme.io/d61773971b252670d1aaa77aa52298563ca5c27202e6d7931b2966ff4221ddc4-image.png)
5. In the sidebar, click **php.ini editor**: ![](https://files.readme.io/28fb454fd6bcaac13a57ac760b5571730440007774b0034e766e460303fd1bd1-image.png)
6. In the **php.ini editor** section, click **Add directive**: ![](https://files.readme.io/d28f6c906ef7cfe79ea31f5787ede34d780db28ab1b61c15554971f3be65abdb-image.png)
7. In the **Directive** text box, type the name of the directive you want to configure: ![](https://files.readme.io/762081030e8aa643eb36012800a412e8399a75ddd0f6eb9241ed39bb975c7571-image.png)
8. In the **Value** list box, select **Text** or **Boolean**:
 1. For a text value, type the value in the **Text** text box.
 2. For a boolean value, click **Enable** or **Disable**.
9. Click **Create**. The directive appears in the list of configured directives.
10. To make the new _php.ini_ settings take effect, follow these steps:
 - In the left sidebar, click **PHP**.
 - In the **Restart PHP container** section, click **Restart**.

Was this page helpful?

YesNo

Ctrl+I