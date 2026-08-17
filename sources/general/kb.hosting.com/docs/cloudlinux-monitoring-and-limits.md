# Source: https://kb.hosting.com/docs/cloudlinux-monitoring-and-limits

This article discusses how CloudLinux monitors and regulates resource usage to improve performance and stability on the following products:

- Shared hosting
- Reseller hosting
- Turbo Web hosting
- Managed VPS
- Managed Dedicated server

## 

[​](https://kb.hosting.com/docs/cloudlinux-monitoring-and-limits#about-cloudlinux)

About CloudLinux

Shared, reseller, managed VPS, and managed Dedicated servers run CloudLinux, an operating system that includes many features for optimizing hosting environments. CloudLinux actively monitors resource usage, and proactively limits accounts when they exceed predefined resource usage limits.

**Important**CloudLinux checks running processes every minute. Because CloudLinux does not check processes every second, it is possible that short intervals of high usage can be missed.

## 

[​](https://kb.hosting.com/docs/cloudlinux-monitoring-and-limits#what-cloudlinux-monitors-and-regulates)

What CloudLinux monitors and regulates

CloudLinux monitors and regulates the following system resources:

- **CPU usage:** If your account’s CPU usage exceeds predefined limits, CloudLinux slows it down to acceptable limits. Your site remains available during this time. When CPU usage falls below the maximum limit, CloudLinux stops limiting your site. DDoS (Distributed Denial of Service), spambot, and brute force attacks are all possible causes of high CPU usage. A poorly configured site can also cause this limit to be reached.

 > 📘 Note To determine your account’s current CPU usage, log in to cPanel. On the cPanel home screen, under **Stats** , locate **CPU Usage** .

- **Input/output (disk) usage:** If disk usage exceeds predefined limits, CloudLinux slows down your site to bring it back within acceptable limits. Your site remains available during this time.

 > 🚧 Important Because of the way I/O limits work on CloudLinux, something as simple as installing or upgrading a WordPress plugin, running a site backup, or doing other normal operations can cause an account to hit the disk I/O limit temporarily. (This may show as a “fault” on the **Resource Usage** page in cPanel.) This is expected behavior, and not an actual problem as long as it is the only limit your account is reaching. However, if your account is hitting other resource limits (for example, memory or CPU), then there are likely other issues occurring that deserve further investigation.

- **Memory usage:** CloudLinux monitors your account’s virtual and physical memory usage. If memory usage exceeds predefined limits, visitors to your site receive “500 Internal Server Error” or “503 Error” messages in their web browser. Additionally, CloudLinux slows down your site to bring it back within acceptable limits.

 > 📘 Note To determine your account’s current memory usage, log in to cPanel. On the cPanel home screen, under **Stats** , locate **Virtual Memory Usage** and **Physical Memory Usage** . Please note that the **Physical Memory Usage** value also includes disk cache usage, so the actual amount of physical memory usage is not entirely accurate. If the actual amount of available physical memory ever runs low, however, CloudLinux automatically frees the disk cache memory.

- **Process usage:** CloudLinux monitors the number of processes running on your account. HTTP, SSH, CGI, and PHP connection requests all count towards this predefined limit, which is generous. If your web site exceeds this limit, visitors receive “503 Error” messages in their web browser. The limit is primarily in place to help prevent DDoS, spambot, and brute force attacks from affecting entire servers. However, a poorly configured site can also cause this limit to be reached.

 > 📘 Note To determine your account’s current process usage, log in to cPanel. On the cPanel home screen, under **Stats** , locate **Entry Processes** .

- **MySQL usage:** CloudLinux’s MySQL Governor monitors your account’s MySQL usage and restricts it if any of the following resources exceed predefined limits:
 - CPU usage
 - Disk reads and writes
 - Number of database connections

No error messages are displayed when this restriction occurs. When MySQL usage falls below the predefined limits, the MySQL Governor removes the restrictions. DDoS (Distributed Denial of Service), spambot, and brute force attacks, as well as plugins and unoptimized databases, are all possible causes of high MySQL usage.

Hosting.com’s Smart System Notifier also monitors server performance and stability. Instead of monitoring usage constantly like CloudLinux, the Smart System Notifier monitors accumulated daily usage totals.

## 

[​](https://kb.hosting.com/docs/cloudlinux-monitoring-and-limits#more-information)

More information

- For general information about CloudLinux, please visit [https://www.cloudlinux.com/](https://www.cloudlinux.com/).
- For more information about CloudLinux limits, please visit [https://docs.cloudlinux.com/introduction/](https://docs.cloudlinux.com/introduction/).

Was this page helpful?

YesNo

Ctrl+I