# Source: https://kb.hosting.com/docs/migrations-and-legacy-e-mail-client-applications

This article discusses account migrations and how they can affect legacy e-mail client applications.

## 

[​](https://kb.hosting.com/docs/migrations-and-legacy-e-mail-client-applications#account-migrations)

Account migrations

In some cases, it may be necessary to move your account to a newer server. Some reasons for migration to a newer server include:

- **Plan upgrade**: You are upgrading your hosting package to a new plan that requires moving to a new server.
- **Server end-of-life**: For stability and security reasons, we may need to move your account to a newer server if your current server reaches the end of its useful operational life.

In most cases, you will not notice any changes in how your applications and accounts function. However, if you are using an older, legacy client application, you may experience issues, such as connection problems. This is because some older applications rely on outdated versions of software to run. This is particularly the case with SSL/TLS support for e-mail applications.

## 

[​](https://kb.hosting.com/docs/migrations-and-legacy-e-mail-client-applications#microsoft-outlook-2010-and-older-versions)

Microsoft Outlook 2010 and older versions

There are several security-related issues that affect Outlook 2010 and Microsoft Windows 7 (and older versions of Outlook and Windows). These issues affect the native Windows SSL library, which is a code module that applications such as Outlook rely on to perform essential functions. These functions include establishing and maintaining secure server connections. For example, you may receive the following error message in Outlook:

```
'Receiving' reported error (0x800CCC1A): 'Your server does not support 
the connection encryption type you have specified. Try changing the 
encryption method. Contact your mail server administrator or Internet 
service provider (ISP) for additional assistance.'
```

This error occurs because Windows 7 uses outdated SSL protocols, and does not include support for the newer TLS protocol. Because Microsoft is no longer updating Windows 7, they strongly recommend updating to the following:

- Windows 8 or a newer version.
- Outlook 2013 or a newer version.

Alternatively, you can use a newer, more modern e-mail client application, such as one of the following:

- [Mozilla Thunderbird](https://www.thunderbird.net): For information about how to configure Mozilla Thunderbird to access hosting.com e-mail accounts, please see [this article](https://kb.hosting.com/docs/setting-up-mozilla-thunderbird).
- [Mailbird](https://www.getmailbird.com): For information about how to configure Mailbird to access hosting.com e-mail accounts, please see [this article](https://kb.hosting.com/docs/setting-up-mailbird).

These e-mail clients use their own SSL/TLS libraries (instead of those included with Windows) to establish and maintain secure connections. Additionally, these applications are updated frequently, which helps ensure the security of your e-mail accounts and their contents.

## 

[​](https://kb.hosting.com/docs/migrations-and-legacy-e-mail-client-applications#older-versions-of-apple-macos)

Older versions of Apple macOS

There are several security-related issues that affect older versions of macOS. Because these are older versions, Apple no longer updates them. Instead, we recommend updating your computer to the most recent version of macOS (or to the version that immediately precedes it). Alternatively, if you do not want to upgrade your computer to a newer version of macOS, you can use a newer, more modern e-mail client application, such as [Mozilla Thunderbird](https://www.thunderbird.net). For information about how to configure Mozilla Thunderbird to access hosting.com e-mail accounts, please see [this article](https://kb.hosting.com/docs/setting-up-mozilla-thunderbird).

Thunderbird uses its own SSL/TLS libraries (instead of those included with macOS) to establish and maintain secure connections. Additionally, Thunderbird is updated frequently, which helps ensure the security of your e-mail accounts and their contents.

Was this page helpful?

YesNo

Ctrl+I