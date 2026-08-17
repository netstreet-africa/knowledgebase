# Source: https://kb.hosting.com/docs/rto-recovery-time-objective-and-rpo-recovery-point-objective-metrics

Some enterprise-level SLAs (Service Level Agreements) specify the following metrics:

- **RTO (Recovery Time Objective)**: This is the maximum time allowed to restore operations after a disruption.
- **RPO (Recovery Point Objective)**: This is the maximum amount of data loss measured in time that an organization can tolerate. For example, an RPO of six hours means backups must occur at least every six hours to limit data loss.

We do not have specific values for these metrics in the hosting.com SLA. However, we have a [99.9% uptime commitment](https://hosting.com/about/99-9-uptime-commitment/) for virtually all of our services. This mean that:

- For RTO, we do everything possible on our side to minimize server and network downtime (for example, redundant switches, RAID, etc.).
- For RPO, many of our services include daily backups. However, as we are not familiar with your usage patterns or application deployments, you should consider your own backup and recovery processes as well (for example, the time required to redeploy applications, your database requirements, etc.).

For more information, go to our [Server Maintenance Policy](https://hosting.com/about/server-maintenance-policy/).

Was this page helpful?

YesNo

Ctrl+I