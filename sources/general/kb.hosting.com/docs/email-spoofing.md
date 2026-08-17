# Source: https://kb.hosting.com/docs/email-spoofing

Email spoofing is a technique used by hackers to gain access and plant malware into your system by altering the email header to impersonate a legitimate or trusted organization or person. The trick here is get the recipient to open and respond to the email when they see the sender is apparently someone they know and trust.

## 

[​](https://kb.hosting.com/docs/email-spoofing#why-is-email-spoofing-dangerous)

Why is email spoofing dangerous?

Although email spoofing can be easily resolved by simply deleting the emails, many people fall into the trap because the source of the email, as shown in the [email headers](https://kb.hosting.com/docs/viewing-e-mail-message-headers), appears to be from a legitimate and trustworthy source. Additionally, the contents of the emails are typically well crafted, making it difficult for users to identify a fraudulent email. Many people follow the instructions in the email, disclosing personal information, banking information, or clicking links in the email. This then allows hackers to gain access into the user’s system.

## 

[​](https://kb.hosting.com/docs/email-spoofing#how-to-identify-email-spoofing)

How to identify email spoofing

Here are some suggestions to help identify email spoofing:

1. **Check the display name and the email address:** In your email client, hover over the display name and verify that the email address matches what you are expecting.
2. **Check the reply path:** When you click **Reply**, the email address should match the sender in the original email.
3. **Check the overall tone of the message content:** Does it sound legitimate?

For information about how to view the email headers for your email client application, please see [this article](https://kb.hosting.com/docs/viewing-e-mail-message-headers).

### 

[​](https://kb.hosting.com/docs/email-spoofing#what-is-the-difference-between-email-spoofing-and-email-phishing)

What is the difference between email spoofing and email phishing?

Phishing emails typically request personal information such as credit card numbers or PIN numbers, or they collect user information through a pop-up notification requesting the user to click and fill out the details. Spoofing emails use false email headers and IP addresses to entice users to provide requested information or click on a link, allowing hackers to easily obtain user information.

For more information about how to protect yourself from email phishing attempts, please see [this article](https://kb.hosting.com/docs/email-phishing-scam-attempts).

## 

[​](https://kb.hosting.com/docs/email-spoofing#how-to-avoid-or-stop-email-spoofing)

How to avoid or stop email spoofing

Here are some effective ways to help stop email spoofing:

- Enable spam filtering: You can enable an automated spam filtering system in cPanel that filters incoming messages using a variety of techniques.
- To protect your own email accounts, consider implementing Sender Policy Framework (SPF), Domainkeys Identified Mail (DKIM), and Domain-based Message Authentication, Reporting and Conformance (DMARC):
 - **Sender Policy Framework (SPF)** is an authentication protocol that lists IP addresses in a DNS TXT record that are permitted to send email on behalf of domains.
 - **Domainkeys identified mail (DKIM)** is a method of assigning a private key to an email message so the receiving server can use the key for verification.
 - **Domain-based Message Authentication, Reporting & Conformance (DMARC)** is a protocol that helps determine the authenticity of an email message using both SPF and DKIM.

Was this page helpful?

YesNo

Ctrl+I