# Source: https://kb.hosting.com/docs/configuring-opensrs-access-for-whmcs

This article describes how to configure OpenSRS access for WHMCS. WHMCS supports OpenSRS integration. To set up this configuration, you must follow some additional steps so WHMCS can access your OpenSRS account. To do this, follow these steps:

1. If you have not done so already, set up OpenSRS registrar integration in WHMCS. For information about how to do this, please visit [http://docs.whmcs.com/OpenSRS](http://docs.whmcs.com/OpenSRS).
2. Open a support ticket at [https://my.hosting.com](https://my.hosting.com). In the ticket, request that hosting.com unblock the firewall for ports **55000** and **55443** for the IP address range **216.40.33.0/24**.
3. After you receive notification from hosting.com that your server’s firewall has been opened for the specified ports, whitelist the server IP address in your OpenSRS account. To do this, follow these steps:
 - Log in to your OpenSRS account.
 - Under **Profile Management**, click **Add IPs for Script/API Access**.
 - On the **Script/API Access** page, type the server IP address for your WHMCS installation, and then click **Add Rule**.

 > 🚧 Important It can take up to one hour for the IP address whitelist setting to propagate and take effect.

4. You should now be able to access your OpenSRS account from WHMCS.

## 

[​](https://kb.hosting.com/docs/configuring-opensrs-access-for-whmcs#more-information)

More information

- To view the official WHMCS documentation, please visit [http://docs.whmcs.com](http://docs.whmcs.com).
- To view the official OpenSRS documentation, please visit [http://www.opensrs.com/site/resources/documentation](http://www.opensrs.com/site/resources/documentation).

## 

[​](https://kb.hosting.com/docs/configuring-opensrs-access-for-whmcs#related-articles)

Related articles

- [Getting started with cPanel](https://kb.hosting.com/docs/getting-started-with-cpanel)

Was this page helpful?

YesNo

Ctrl+I