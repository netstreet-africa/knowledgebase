# Source: https://kb.hosting.com/docs/managed-vps-migrations

This article discusses differences between A2 Hosting Managed VPS and hosting.com Managed VPS configurations, and how they affect migrations. There are several differences between A2 Hosting Managed VPS and hosting.com Managed VPS configurations. When migrating an A2 Hosting Managed VPS to a hosting.com Managed VPS, please keep the following points in mind:

- **CloudLinux**: A2 Hosting Managed VPS run CloudLinux, while hosting.com Managed VPS currently run AlmaLinux 9. AlmaLinux 9 removed direct support for older PHP versions, whereas CloudLinux builds custom secured releases of PHP versions that are no longer maintained. Therefore, in order to run older PHP versions on a hosting.com VPS, you need CloudLinux installed. 
 CloudLinux also includes several other commonly used features, such as:
 - **CageFS**: You can isolate user directories from each other on the server using CageFS.
 - **PHP Selector**: This feature enables you to quickly switch between PHP versions and settings.
 - **Node.js Selector, Python Selector, and Ruby Selector**: These features enable you to create and deploy applications using cPanel.
- **Imunify360**: Imunify360 is on A2 Hosting VPS, so we will install it on a hosting.com VPS during a migration and transfer the license key.
- **LiteSpeed**: Many A2 Hosting VPS run LiteSpeed. If it is installed on your VPS, we will install it on a hosting.com VPS during a migration and transfer the license key.
- **Redis**: A2 Hosting VPS are provisioned automatically to run Redis on an IP address and port (not a socket). On a hosting.com VPS, you can enable Redis using a button in cPanel.

If you have any other questions about Managed VPS migrations, please open a support ticket at [https://my.hosting.com](https://my.hosting.com) and we will assist you.

Was this page helpful?

YesNo

Ctrl+I