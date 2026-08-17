# Source: https://kb.hosting.com/docs/scheduling-tasks-in-plesk

This article describes how to configure scheduled tasks in Plesk. Using the task scheduler, you can:

- Run commands at intervals that you specify.
- Fetch URLs at intervals that you specify.
- Run PHP scripts at intervals that you specify.

Plesk is no longer included with new hosting.com plans, but it is still available on legacy Managed WordPress accounts. You can install Plesk manually on unmanaged VPS and Dedicated servers.

## 

[​](https://kb.hosting.com/docs/scheduling-tasks-in-plesk#adding-a-scheduled-task)

Adding a scheduled task

To watch a video that demonstrates the following procedure, please click below: To add a scheduled task to your account, follow these steps:

1. Log in to Plesk.

 > 📘 Note If you do not know how to log in to your Plesk account, please see [this article](https://kb.hosting.com/docs/logging-in-and-out-of-plesk).

2. In the right sidebar, click **Scheduled Tasks**: 
 ![Plesk - Scheduled Tasks icon](https://static.hosting.com/kb/kb-plesk-scheduled-tasks-icon.png)
3. Click **Add Task**.
4. On the **Schedule a Task** page, in the **Task type** section, select the type of task that you want to set up:

- Select **Run a command** to use commands recognized by the Windows Command Center. In the **Command** text box, specify the command, as well as any optional arguments in the **with arguments** text box.
- Select **Fetch a URL** to retrieve a URL with similar functionality to the [curl](https://curl.haxx.se/) program. In the **URL** text box, specify the URL you want to fetch.
- Select **Run a PHP script** to run PHP scripts hosted on the server. In the **Script path** text box, specify the path to the script file, as well as any optional arguments in the **with arguments** text box. In the **Use PHP version** list box, select the PHP version you want to use to run the script.

5. In the **Run** section, specify the frequency and time with which you want to run the scheduled task.
6. In the **Description** text box, type a note or comment related to the scheduled task, or leave the text box empty.
7. In the **Notify** section, select how frequently you want to receive notifications related to the scheduled task.
8. To immediately run the scheduled task, click **Run Now**.
9. To save the scheduled task, click **OK**.

## 

[​](https://kb.hosting.com/docs/scheduling-tasks-in-plesk#editing-a-scheduled-task)

Editing a scheduled task

To edit an existing scheduled task, follow these steps:

1. Log in to Plesk.

 > 📘 Note If you do not know how to log in to your Plesk account, please see [this article](https://kb.hosting.com/docs/logging-in-and-out-of-plesk).

2. In the right sidebar, click **Scheduled Tasks**: 
 ![Plesk - Scheduled Tasks icon](https://static.hosting.com/kb/kb-plesk-scheduled-tasks-icon.png)
3. Click the scheduled task you want to edit. Plesk displays the same **Schedule a Task** page that you used to create the task with all of the task’s settings.

## 

[​](https://kb.hosting.com/docs/scheduling-tasks-in-plesk#removing-a-scheduled-task)

Removing a scheduled task

To remove a scheduled task from your account, follow these steps:

1. Log in to Plesk.

 > 📘 Note If you do not know how to log in to your Plesk account, please see [this article](https://kb.hosting.com/docs/logging-in-and-out-of-plesk).

2. In the right sidebar, click **Scheduled Tasks**: 
 ![Plesk - Scheduled Tasks icon](https://static.hosting.com/kb/kb-plesk-scheduled-tasks-icon.png)
3. Select the check box for the task or tasks you want to remove, and then click **Remove**.
4. Click **Yes** to confirm the deletion. Plesk removes the task or tasks that you selected.

## 

[​](https://kb.hosting.com/docs/scheduling-tasks-in-plesk#more-information)

More information

To view the official Plesk documentation about how to use the task scheduler, please visit [http://docs.plesk.com/en-US/onyx/customer-guide/scheduling-tasks.65207](http://docs.plesk.com/en-US/onyx/customer-guide/scheduling-tasks.65207).

## 

[​](https://kb.hosting.com/docs/scheduling-tasks-in-plesk#related-articles)

Related articles

Was this page helpful?

YesNo

Ctrl+I