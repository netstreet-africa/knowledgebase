# Source: https://kb.hosting.com/docs/making-persistent-node-js-applications

For security and performance reasons, long-running processes are periodically terminated on cPanel Shared and Reseller servers. This includes Node.js applications. This article discusses two ways to keep your Node.js application up and running:

- **Use the Node.js Selector in cPanel**: This is the preferred method.
- **Use a cron job**: You only need to set up a cron job if you have manually created a Node.js application (in other words, you did not use the Node.js Selector in cPanel).

## 

[​](https://kb.hosting.com/docs/making-persistent-node-js-applications#method-#1-use-the-node-js-selector-in-cpanel)

Method #1: Use the Node.js Selector in cPanel

This is the preferred method for maintaining persistent Node.js applications on cPanel shared and reseller servers. The Node.js Selector maintains the running state of Node.js applications, with an easy-to-use interface that you can use to stop, start, and restart applications. For information about how to use the Node.js Selector in cPanel, please see [this article](https://kb.hosting.com/docs/create-application-with-nodejs-selector).

## 

[​](https://kb.hosting.com/docs/making-persistent-node-js-applications#method-#2-use-a-cron-job)

Method #2: Use a cron job

**Important**The following procedure assumes that you have already installed Node.js according to [this article](https://kb.hosting.com/docs/installing-and-configuring-nodejs-on-managed-hosting) .

If you need to run an application on a specific port, then you cannot use the Node.js Selector and must manually create the application instead. Popular methods of creating persistent Node.js applications like PM2 and Forever, however, will not work. They are also running processes, and are subject to periodic termination. Cron jobs, however, run periodically and are not terminated, so you can rely on them to restart a terminated Node.js process. To set up a cron job to restart your application, follow these steps:

1. Log in to cPanel.

 > 📘 Note If you do not know how to log in to your cPanel account, please see [this article](https://kb.hosting.com/docs/accessing-cpanel).

2. In the **ADVANCED** section of the cPanel home screen, click **Cron Jobs**: 
 ![](https://static.hosting.com/kb/kb-cpanel-78-advanced-cron-jobs-icon.png)
3. Under **Cron Email**, type the e-mail address where you want to receive notifications, and then click **Update Email**. Every time the cron job runs, the e-mail account receives a message.

 > 📘 Note If you do not want to receive e-mail notifications for a particular cron job, you can append **\>/dev/null 2>&1** to the cron job command, which redirects all output to **/dev/null** .

4. Under **Add New Cron Job**, specify the interval for the command you want. For this application we want the cron to run as often as possible to insure maximum uptime for the node.js application. In the **Minutes** text box type `*/15` or select **Once per Fifteen Minutes(\*/15)** from the **Minutes** list box. No other time settings are required.
5. In the **Command** text box, type the following command, replacing _mylock_, _app\_directory_, and _startup\_file_ with the correct values for your own application:

    ```
    /usr/bin/flock -n /tmp/mylock.lock ${HOME}/nodejs/bin/node ${HOME}/app_directory/startup_file.js
    ```

 The _flock_ command used in this example checks to see if the node instance is still running before attempting to start a new instance. As long as the original process is still running, a new one is not started. This avoids port contention issues that can interrupt the application and generate errors.
6. Click **Add New Cron Job**. cPanel creates the cron job.

## 

[​](https://kb.hosting.com/docs/making-persistent-node-js-applications#related-articles)

Related articles

- [Creating a Node.js application with cPanel using the Node.js Selector](https://kb.hosting.com/docs/create-application-with-nodejs-selector)
- [Installing and configuring Node.js on managed hosting](https://kb.hosting.com/docs/installing-and-configuring-nodejs-on-managed-hosting)

Was this page helpful?

YesNo

Ctrl+I