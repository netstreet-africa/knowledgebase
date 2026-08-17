# Source: https://kb.hosting.com/docs/preventing-outgoing-e-mail-from-being-marked-as-spam

This article discusses steps you can take to help prevent outgoing messages from being marked as spam.

**Important**This article is intended for users who have legitimate e-mail messages that are being marked as spam. Make sure you are familiar with the guidelines relating to spam as described in the [FCC CAN-SPAM Act](https://www.fcc.gov/guides/spam-unwanted-text-messages-and-email).

## 

[​](https://kb.hosting.com/docs/preventing-outgoing-e-mail-from-being-marked-as-spam#how-to-help-prevent-outgoing-e-mail-from-being-marked-as-spam)

How to help prevent outgoing e-mail from being marked as spam

Mail servers use many different techniques to filter spam. Spammers constantly adapt to these anti-spam measures, so administrators have to continually modify server configurations to help reduce spam. As a result, there is no single thing you can do to ensure that all of your outgoing messages are delivered successfully. Nevertheless, there are still some things you can do to help improve the odds of successful delivery. Try the following techniques:

- If possible, do not send HTML-only messages (send plain-text messages instead, or multi-part MIME messages with a text/plain component).
- If you do send HTML-only messages, make sure they use valid HTML markup. You can use the [W3C Markup Validation Service](http://validator.w3.org) to test content (you can test a URL, upload a file, or paste HTML into a text box).
- Avoid using lots of exclamation marks ( **!** ) or dollar signs ( **$** ) in the message subject.
- Create SPF (Sender Policy Framework) records and enable DKIM (DomainKeys Identified Mail). For information about how to do this, please see [this article](https://kb.hosting.com/docs/managing-e-mail-deliverability-settings).

### 

[​](https://kb.hosting.com/docs/preventing-outgoing-e-mail-from-being-marked-as-spam#sending-e-mail-to-free-e-mail-providers)

Sending e-mail to free e-mail providers

Free e-mail providers such as Yahoo and Hotmail reject messages based on spam reports or a poor IP address reputation. So the more engaged your recipients are with your messages, the better. For example, when your recipients open and read your messages, or pull them out of the spam folder into their inboxes, these are positive indications to the provider that the messages are legitimate. There are several additional things you can do to improve the chances that your e-mail messages are delivered successfully to recipients who use free e-mail providers:

Please note that it may take several days for any changes to have an effect.

#### 

[​](https://kb.hosting.com/docs/preventing-outgoing-e-mail-from-being-marked-as-spam#yahoo)

Yahoo

- Create SPF (Sender Policy Framework) records and enable DKIM (DomainKeys Identified Mail). For information about how to do this, please see [this article](https://kb.hosting.com/docs/managing-e-mail-deliverability-settings).
- Set up reverse DNS (also known as rDNS) for your domain. For information about how to do this, please see [this article](https://kb.hosting.com/docs/configuring-reverse-dns).

#### 

[​](https://kb.hosting.com/docs/preventing-outgoing-e-mail-from-being-marked-as-spam#gmail)

Gmail

- Create SPF (Sender Policy Framework) records and enable DKIM (DomainKeys Identified Mail). For information about how to do this, please see [this article](https://kb.hosting.com/docs/managing-e-mail-deliverability-settings).
- Set up reverse DNS (also known as rDNS) for your domain. For information about how to do this, please see [this article](https://kb.hosting.com/docs/configuring-reverse-dns).
- For information about Google’s e-mail policies, please visit [https://support.google.com/mail/answer/81126](https://support.google.com/mail/answer/81126).

#### 

[​](https://kb.hosting.com/docs/preventing-outgoing-e-mail-from-being-marked-as-spam#msn-and-hotmail)

MSN and Hotmail

- Create SPF (Sender Policy Framework) records and enable DKIM (DomainKeys Identified Mail). For information about how to do this, please see [this article](https://kb.hosting.com/docs/managing-e-mail-deliverability-settings).
- Set up reverse DNS (also known as rDNS) for your domain. For information about how to do this, please see [this article](https://kb.hosting.com/docs/configuring-reverse-dns).
- Sign up for the Junk Email Reporting Partner (JMRP) program. To do this, please visit [https://postmaster.live.com/snds/JMRP.aspx](https://postmaster.live.com/snds/JMRP.aspx).

 > 📘 Note Make sure you save the verification number. You will need this number for any future correspondence with Microsoft.

- Sign up for Smart Network Data Services (SNDS). To do this, please visit [https://postmaster.live.com/snds/addnetwork.aspx](https://postmaster.live.com/snds/addnetwork.aspx).

#### 

[​](https://kb.hosting.com/docs/preventing-outgoing-e-mail-from-being-marked-as-spam#earthlink)

EarthLink

- Create SPF (Sender Policy Framework) records and enable DKIM (DomainKeys Identified Mail). For information about how to do this, please see [this article](https://kb.hosting.com/docs/managing-e-mail-deliverability-settings).
- Set up reverse DNS (also known as rDNS) for your domain. For information about how to do this, please see [this article](https://kb.hosting.com/docs/configuring-reverse-dns).
- Send a request to EarthLink asking them to unblock your IP address. To do this, send the request to **[blockedbyearthlink@abuse.earthlink.net](mailto:blockedbyearthlink@abuse.earthlink.net)** with the subject line **BlockedIP\_ADDRESS**. Replace _IP\_ADDRESS_ with your own IP address. For more information, please visit [http://support.earthlink.net/articles/email/email-blocked-by-earthlink.php](http://support.earthlink.net/articles/email/email-blocked-by-earthlink.php).

## 

[​](https://kb.hosting.com/docs/preventing-outgoing-e-mail-from-being-marked-as-spam#what-to-do-if-your-e-mail-is-blocked-by-a-real-time-blacklist)

What to do if your e-mail is blocked by a real-time blacklist

Organizations such as [SpamCop](http://www.spamcop.net/) and [Spamhaus](http://www.spamhaus.org/) may block your outgoing messages. If you are using a dynamic IP address, this may happen because a previous user of your IP address had a compromised computer that was sending spam. As a result, the IP address has been blacklisted. You can try contacting your ISP and have them issue you a new IP address, or you can just use your ISP’s SMTP servers to send e-mail. (You would continue to use hosting.com servers for incoming mail.) If you have a static IP address, and absolutely must use hosting.com servers for outgoing SMTP mail, you must follow the instructions from the blocking organization to remove yourself from their blacklist. Before you do this, you should make sure that none of your computers are infected with a virus or other malware.

We are not affiliated with any blacklist organizations, and we do not have any control over their blacklists or policies.

## 

[​](https://kb.hosting.com/docs/preventing-outgoing-e-mail-from-being-marked-as-spam#related-articles)

Related articles

- [Managing e-mail deliverability settings](https://kb.hosting.com/docs/managing-e-mail-deliverability-settings)
- [Configuring reverse DNS](https://kb.hosting.com/docs/configuring-reverse-dns)

Was this page helpful?

YesNo

Ctrl+I