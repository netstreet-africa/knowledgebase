# Source: https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know

### 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#-faq)

❓ FAQ

Common questions about Enhance reseller hosting. [Read more →](https://kb.hosting.com/docs/enhance-reseller-hosting-frequently-asked-questions)

### 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#-adding-customers)

👤 Adding Customers

How to add a new customer to your Enhance account. [Read more →](https://kb.hosting.com/docs/adding-a-new-customer-to-your-enhance-resellers-account)

### 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#-wordpress-management)

🌐 WordPress Management

Managing your WordPress site in the Enhance control panel. [Read more →](https://kb.hosting.com/docs/managing-your-wordpress-site-in-the-enhance-control-panel)

Enhance is built for today’s hosting professional. It’s quicker, more intuitive, and gives you tools that cPanel doesn’t — like self-service site imports, built-in Cloudflare syncing, one-click WordPress during site creation, and real-time Slack notifications for your business. There’s a short familiarization period, as with any new tool. Most resellers are running comfortably within a day. This guide walks you through the key differences so you can hit the ground running.

# 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#terminology)

Terminology

## 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#the-language-has-changed-slightly)

The language has changed slightly.

| Old | New |
| --- | --- |
| ~WHM~ | _Primary Panel_ Your reseller-level control panel |
| ~cPanel accounts~ | _Customers_ The accounts that sit under your Primary Panel |
| ~Packages~ | _Packages_ Same name, same concept — no change here |
| ~”Log in as” a cPanel account~ | _Impersonate_ How you access a customer’s control panel |

# 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#packages)

Packages

## 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#create-your-packages-first)

Create your packages first.

In both panels, you’ll want to create your packages before onboarding customers, so you have something to assign when they arrive. ![](https://files.readme.io/ab9326c7f032b7d13649815d822f7f58a86a7266a05a662af158d3880b215f70-image.png) Packages in Enhance let you define disk space, bandwidth, number of websites, email accounts, databases, and a range of feature toggles — all in one cleanly laid-out screen.

# 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#the-big-one)

The Big One

## 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#adding-a-new-customer-is-three-steps-not-one)

Adding a new customer is three steps, not one.

This is the day-to-day task you’ll run most often, and it’s the biggest structural difference between cPanel and Enhance — so pay close attention here. In WHM, creating a new account was a single form: domain, password, package, Create, done. In Enhance, this is broken into three separate steps. It feels like more work at first, but it’s actually more flexible — you can onboard a customer before they’ve picked a domain, change packages independently, and add additional websites under the same customer later without any extra setup. ![](https://files.readme.io/de3c8f954299c19b41a3932dfeca82c34530b43242582da51199f33f7e75e762-image.png) 
![](https://files.readme.io/1b01d7d5947681dc2e7630481cbd928a1b63fa6a9b76064c564402b9144ae48c-image.png) 
![](https://files.readme.io/f1b5c0accbafae06e4f191aeb3b51d42ba3727f29679dfe540520ddba8c14990-image.png) 
![](https://files.readme.io/e1af95a073988fa2fac8dda95de16247070019cffb341552805a1e096e1b99e0-image.png) 
![](https://files.readme.io/eed107bde301738df0ca4d501e14bb513a533d4f27f881a3cf92c295a36e198f-image.png) 
![](https://files.readme.io/d7aff3a997296ca279d908d2573c771c28e6c2adc75c11ea475314d99bf236a2-image.png) 
![](https://files.readme.io/c7a3cf71301ba3b72027db6103cb13c52226497b7c92a3268f369142f739d258-image.png) 
![](https://files.readme.io/ed885340d11987748d92edda3ac436f0359fb82ea727a11bda956450f27b50bd-image.png) 

If you’re onboarding a client who doesn’t have their domain registered yet, you can skip Step 3 entirely for now. The customer and package are ready, and you can come back and add the website whenever the domain is live. Or hand off login details to the client so they can add their own website.

# 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#impersonation)

Impersonation

## 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#accessing-a-customer%E2%80%99s-control-panel)

Accessing a customer’s control panel.

When you need to log into a customer’s account to install WordPress, set up email, check files, or troubleshoot — this is the Enhance equivalent of clicking the little orange cPanel logo in WHM. ![](https://files.readme.io/6e053f5f4901fa90d22c5d1a8fcd026cba75caf3a93f5585586ebba2eadb7a3f-image.png) 
![](https://files.readme.io/f9edbd236df1b256e1291740b857e1250b30682d626dc93df61efe8e78c5a4d8-image.png) Once you impersonate, you’ll see a yellow banner across the top of the screen confirming you’re inside the customer’s account. A Return to Admin button in the top-right takes you back to your Primary Panel whenever you’re done.

# 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#client-access-important)

Client Access _Important_

## 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#setting-up-your-customers%E2%80%99-login-url)

Setting up your customers’ login URL.

In cPanel, your customers accessed their accounts via port 2083 (e.g. yourdomain.com:2083) or a redirect to /cpanel. In Enhance, there are no port-based logins or redirects. Instead, you set a branded control panel URL that your customers use to log in — giving your hosting business a more professional appearance from day one. **To set this up**: Log into your Enhance Primary Panel → Settings → Platform → Control Panel Domain Here you’ll specify the URL your customers will use to access their panel — **for example cp.yourdomain.com**. You’ll need to point this domain’s DNS to your server before it will work. Once set, your customers visit that URL and log in with the username and password you assigned when creating their customer account.

If you haven’t set a control panel domain yet, your customers won’t have a URL to log into. Set this up before onboarding your first customer so the experience is seamless from the start.

# 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#daily-operations)

Daily Operations

## 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#files-email-databases-&-everything-else)

Files, email, databases & everything else.

Once you’re impersonating a customer, the left-hand menu gives you everything the customer themselves would see — and it’s where you’ll do most of the day-to-day work a cPanel technician does.

1. **Websites** — Add websites, install WordPress, manage SSL, set PHP versions, and access the file manager for each site.
2. **Emails** — Create and manage email accounts, forwarders, and aliases.
3. **Logs** — Access server and website logs for debugging and audit.
4. **Packages** — View package resources and limits.
5. **Users** — Manage additional users with access to this customer’s account.
6. **Integrations** — Connect Cloudflare, Slack, and other services.

**Heads up**Everything you used to click through the cPanel icons for is here, just organised into clearer sections.

# 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#self-service-imports)

Self-Service Imports

## 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#bring-your-old-sites-over-yourself)

Bring your old sites over yourself.

This is one of the biggest benefits in Enhance and something we want to highlight specifically. ![](https://files.readme.io/a2fab76593298bdff9cc7bf4699bf4063800b27733b847550c49acb6fb92ea48-image.png) 
![](https://files.readme.io/3c22272d93a91beccce4772bc891980f381d7b2f413b58b0b40c50df84d403b6-image.png) 
The entire site — files, databases, emails, DNS — is brought over automatically. No ticket, no waiting, no back-and-forth. For larger or more complex migrations, our support team is still here and can handle the full white-glove migration for you if you prefer.

# 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#when-you-need-us)

When You Need Us

## 

[​](https://kb.hosting.com/docs/from-cpanel-to-enhance-everything-you-need-to-know#we%E2%80%99re-here)

We’re here.

If something isn’t behaving the way you expect, or you can’t find the equivalent of a cPanel feature you rely on — don’t struggle with it.

1. Open a support ticket from your client area. Our team is fluent in both panels and can walk you through the cPanel-to-Enhance equivalent of anything.
2. For migration help specifically, open a ticket and our migrations team will take it from there for you.

![](https://files.readme.io/7c02d0dd0c366bcdf5a8b1feff6913f24f4be0b1f4baf3965c21daca5b1d75e3-image.png) 

Was this page helpful?

YesNo

Ctrl+I