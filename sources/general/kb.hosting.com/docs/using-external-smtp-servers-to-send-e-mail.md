# Source: https://kb.hosting.com/docs/using-external-smtp-servers-to-send-e-mail

This article discusses using external SMTP servers to send email. Whether or not you can do this depends on which server hosts your account.

To determine which server hosts your account, look at the server name:

- If the server name for your account includes _a2hosting.com_ (for example, _mi3-ss14.a2hosting.com_), then your account is on an A2 Hosting server.
- If the server name for your account does **not** include _a2hosting.com_ (for example, _e4497.usc1.stableserver.net_), then your account is not on an A2 Hosting server.

For information about how to determine the server name for your account, please see [this article](https://kb.hosting.com/docs/determining-your-accounts-server-name).

## 

[​](https://kb.hosting.com/docs/using-external-smtp-servers-to-send-e-mail#accounts-not-on-a2-hosting-servers)

Accounts not on A2 Hosting servers

For hosting accounts that are **not** on an A2 Hosting server, you can use external SMTP servers to send email.

## 

[​](https://kb.hosting.com/docs/using-external-smtp-servers-to-send-e-mail#accounts-on-a2-hosting-servers)

Accounts on A2 Hosting servers

For hosting accounts that are on A2 Hosting servers, you **cannot** use external SMTP servers to send e-mail messages if you have one of the following hosting packages:

- Shared web hosting
- Reseller hosting
- Managed WordPress hosting

For these hosting packages, you must use the hosting server to send email using SMTP. Alternatively, you can use an HTTP API to send email. Ask your mail provider if they offer an API to use instead of SMTP. HTTP API mail sending plugins are available for popular CMS from providers such as Mailchimp, Sendgrid, and Mailgun. You can also use HTTP APIs in custom programs, as demonstrated in [Using the Mailchimp API with PHP](https://kb.hosting.com/docs/using-the-mailchimp-api-with-php).

Was this page helpful?

YesNo

Ctrl+I