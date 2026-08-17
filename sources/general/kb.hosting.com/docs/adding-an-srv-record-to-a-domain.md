# Source: https://kb.hosting.com/docs/adding-an-srv-record-to-a-domain

This article describes how to add an SRV record to a domain. SRV records are DNS entries that specify how a domain handles particular services. For example, you may need to add an SRV record to your domain when configuring SIP or a third-party service, such as Microsoft Office 365.

## 

[​](https://kb.hosting.com/docs/adding-an-srv-record-to-a-domain#adding-an-srv-record-in-cpanel)

Adding an SRV record in cPanel

If you have an account that includes cPanel access, you can add SRV records using the Zone Editor. To do this, follow these steps:

1. Log in to cPanel.

 > 📘 Note If you do not know how to log in to your cPanel account, please see [this article](https://kb.hosting.com/docs/accessing-cpanel).

2. In the **DOMAINS** section of the cPanel home screen, click **Zone Editor**: 
 ![cPanel - Domains - Zone Editor](https://static.hosting.com/kb/kb-cpanel-78-domains-zone-editor.png)
3. Locate the domain for which you want to add an SRV record, and then click **Manage**: 
 ![cPanel - Zone Editor - Manage domain](https://static.hosting.com/kb/kb-cpanel-paper-lantern-zone-editor-manage.png)
4. Click **Add Record**, and then in the **Type** list box, select **SRV**.
5. In the **Name** text box, type the name for a valid SRV record, using the following format: \__service.\_protocol.domain._
 - **\_service** is the symbolic name of the service. For example, \_sip.
 - **\_protocol** is the transport protocol of the service. For example, \_tcp or \_udp.
 - _domain_ is the domain name for which the SRV record is valid. For example, _sip.example.com_.
6. In the **TTL** text box, type the TTL (time to live) value, or accept the default value.
7. In the **Priority** text box, type the priority for the SRV record.
8. In the **Weight** text box, type the weight for the SRV record.
9. In the **Port** text box, type the port number for the SRV record.
10. In the **Target** text box, type the name of the server that provides the service.
11. Under **Actions**, click **Add Record**. cPanel adds the SRV record to the DNS zone file.

## 

[​](https://kb.hosting.com/docs/adding-an-srv-record-to-a-domain#reseller-hosting-accounts)

Reseller hosting accounts

As a reseller, you can use WebHost Manager to add SRV records to your customers’ domains. To do this, follow these steps:

1. Log in to WebHost Manager.
2. From the WebHost Manager home screen, click **DNS Functions**, and then click **Edit DNS Zone**.
3. In the list box, select the domain for which you want to add an SRV record, and then click **Edit**. The **Edit DNS Zone** page appears.
4. Scroll down the page to the **Add New Entries Below this Line** section.
5. In the first text box, type the service name and protocol (for example, **\_sip.\_tcp** ).
6. In the **Select** list box, click **SRV**. Four additional text boxes appear.
7. In the **Priority** text box, type the priority for the service.

 > 📘 Note If you are unsure what value to use, type **0** .

8. In the **Weight** text box, type the weight for the service.

 > 📘 Note If you are unsure what value to use, type **0** .

9. In the **Port** text box, type the TCP or UDP port that the service uses.
10. In the **Hostname** text box, type the hostname of the server that provides the service (for example, _sip.example.com_ ).
11. Click **Save**.

## 

[​](https://kb.hosting.com/docs/adding-an-srv-record-to-a-domain#more-information)

More information

For more information about SRV records, please visit [https://en.wikipedia.org/wiki/SRV\_record](https://en.wikipedia.org/wiki/SRV_record).

Was this page helpful?

YesNo

Ctrl+I