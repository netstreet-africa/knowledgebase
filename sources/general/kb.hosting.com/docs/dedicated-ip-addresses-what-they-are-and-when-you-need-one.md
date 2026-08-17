# Source: https://kb.hosting.com/docs/dedicated-ip-addresses-what-they-are-and-when-you-need-one

## 

[​](https://kb.hosting.com/docs/dedicated-ip-addresses-what-they-are-and-when-you-need-one#do-i-need-a-dedicated-ip-address)

Do I need a dedicated IP address?

A dedicated IP address means your hosting account has its own unique IP that isn’t shared with any other users on a server. This article explains what that means in practice, who benefits from one, and who probably doesn’t need it.

## 

[​](https://kb.hosting.com/docs/dedicated-ip-addresses-what-they-are-and-when-you-need-one#what-is-a-dedicated-ip-address)

What is a dedicated IP address?

Every server on the internet has an IP address — a numerical identifier that other systems use to find and communicate with it. By default, reseller hosting accounts share an IP address with other accounts on the same server. A dedicated IP gives your account its own address, completely separate from everyone else.

## 

[​](https://kb.hosting.com/docs/dedicated-ip-addresses-what-they-are-and-when-you-need-one#who-genuinely-benefits-from-a-dedicated-ip)

Who genuinely benefits from a dedicated IP?

There are a few specific situations where a dedicated IP makes a real difference. **High-volume or business email senders.** If you or your clients send large volumes of email — or send business-critical emails like newsletters, transactional messages, or bulk communications — your sending reputation matters. On a shared IP, that reputation is influenced by everyone else sending from the same address. If another user on your shared IP gets blacklisted, it can affect your deliverability too. A dedicated IP isolates your sending reputation so your email performance is based primarily on your own sending practices and configuration. Reduced risk of disruption from other users.On shared IPs, issues like abuse, rate limiting, or blacklisting caused by other accounts can impact everyone using that IP. A dedicated IP removes that dependency and gives you full control over how your IP is used. IP whitelisting requirements.Some third-party services, APIs, payment gateways, or corporate firewalls only allow connections from specific, known IP addresses. If you need a consistent, dedicated IP to whitelist with an external service, a shared IP is not suitable because it is used by multiple users and cannot be exclusively assigned to your service. **Clients who require isolation for compliance or security reasons.** Some businesses in regulated or security-sensitive environments prefer the added isolation of a dedicated IP as part of their overall infrastructure and risk management practices **Clients who need an extra level of security and reliability** in the face of DDOS attacks. When one of the accounts on your same server attracts a large scale DDOS attack that requires a security team to split accounts & traffic across different IPs on the same server, this could cause your websites to go down. There are also cases where a servers primary IP are null routed temporarily while an attack is being mitigated. The server is okay but accounts that were on IP’s that were hit and moved will no longer resolve. This is where having a dedicated IP is strongest. The server is okay and your accounts are as well since they were on their own dedicated IP that was not impacted by the attack

## 

[​](https://kb.hosting.com/docs/dedicated-ip-addresses-what-they-are-and-when-you-need-one#who-probably-doesn%E2%80%99t-need-one)

Who probably doesn’t need one?

Most standard reseller hosting clients don’t need a dedicated IP. If you’re running typical websites, standard email volumes, and your business doesn’t particularly depend on email delivery, a shared IP works perfectly well. The technology that once made dedicated IPs essential for SSL — SNI — is now supported by virtually all modern browsers and servers, so that reason for needing one has largely gone away for most users.

## 

[​](https://kb.hosting.com/docs/dedicated-ip-addresses-what-they-are-and-when-you-need-one#how-to-add-a-dedicated-ip-to-your-plan)

How to add a dedicated IP to your plan

You can add a dedicated IP address directly from your client area. Log in, navigate to your reseller plan, and select the Dedicated IP option.

## 

[​](https://kb.hosting.com/docs/dedicated-ip-addresses-what-they-are-and-when-you-need-one#still-have-questions)

Still have questions?

If you’re not sure whether a dedicated IP is right for your setup, open a support ticket and describe your use case. The team can advise based on your specific situation.

Was this page helpful?

YesNo

Ctrl+I