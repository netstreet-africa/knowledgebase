# Source: https://kb.hosting.com/docs/managing-dns-settings-in-the-hosting-panel

This article describes how to manage DNS settings for a domain in the hosting.com Hosting Panel.

**Important**This article only applies to domains purchased from **hosting.com** on or after April 28, 2025 that do **not** have an associated hosting product. (In other words, a standalone domain, such as one used only for email hosting services.) For more information about the DNS management options available for different domain types, please see [Hosting.com DNS management](https://kb.hosting.com/docs/hosting-com-dns-management).

To manage DNS settings for your domain, follow these steps:

1. Log in to the Hosting Panel at [https://my.hosting.com](https://my.hosting.com).
2. In the left sidebar, under **Products & Services**, click **DNS**: ![](https://files.readme.io/c2e8b0afc2784f23f83ba475680de8a4bdbd9f99857cef5bffb9ec6ed143f5db-image.png)
3. If you previously created a zone for your domain, in the **Select a domain** list box, select your domain, and then click **Manage Domain**. Go to step 5.
4. If you have not created a zone previously for your domain, the **Create a new zone** dialog appears: ![](https://files.readme.io/8dada1e4103d9bef16071acb6c46ac4a2150b461e973f77fa41b44b51358066e-image.png)
 - In the **Select a domain** list box, select your domain, and then click **Create zone**.

 > 📘 Note If you click **Create zone** and receive a **Zone already exists** message, then the domain you selected already has a DNS zone on our nameservers. Most likely the domain is associated with a hosting product and is not a standalone domain: ![](https://files.readme.io/c6faca03cbf68ce2c30494e6663cd5b1489a103ae7813cebf57f971b213995dc-image.png)

5. The **DNS Editor** tab appears for the domain: ![](https://files.readme.io/2101b3c36ce145218faeeb2640f8253d2878e7052d8c43db58f8f4e9f754854d-image.png)
 - To edit an existing record in the zone, click **Edit**, make your changes, and then click **Save Changes**: ![](https://files.readme.io/6faced060d02f7e35579c55369df426b216c98bd090c01b74b55089795a4046c-image.png)
 - To delete an existing record in the zone, click **Delete**.
 - To add a new record to the zone, click **Add New Record**, and then click **Create**: ![](https://files.readme.io/d1e95d2015f6bf3537831c02628dcb210f0f72db4ff0232013a3f5a912cab5ca-image.png)

If you receive a **It looks like this domain isn’t currently pointing to us** message, then your domain’s nameservers are pointed to another provider. For your DNS changes in the Hosting Panel to take effect, you must update the nameservers for your domain:![](https://files.readme.io/d3e91c69343c71883dd22ef6c7a75c644514a07ea949857404397623c50fdfe1-image.png)

Was this page helpful?

YesNo

Ctrl+I