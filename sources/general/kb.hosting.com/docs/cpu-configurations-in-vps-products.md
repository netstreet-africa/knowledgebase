# Source: https://kb.hosting.com/docs/cpu-configurations-in-vps-products

This article discusses CPU configurations in hosting.com’s managed VPS and unmanaged VPS products. A head-to-head CPU comparison between the various VPS products is not as straightforward as it may seem. This is because the VPS products use different virtualization technologies and hardware configurations. We are always innovating new plans for our customers so that we can be at the forefront of technology. As a result, we have a multitude of current customers using different configurations. Older managed VPS and unmanaged VPS use [OpenVZ virtualization](https://openvz.org), while newer managed and Unmanaged VPS plans utilize [Virtuozzo virtualization](https://www.virtuozzo.com/). With that in mind, the CPU configuration for each VPS product is as follows:

- On an **Unmanaged VPS**, more vCPUs (virtual CPUs) give you access to more virtual cores on the node. Because the CPUs on these servers use HyperThreading, the operating system sees each physical core as two cores. The number of clock cycles available on each core varies according to the overall load from all virtual machines on the node.
- On a **Managed VPS**, you have access to the full number of cores, but as with an unmanaged VPS, the number of clock cycles available varies according to the overall load from all virtual machines on the node.

Was this page helpful?

YesNo

Ctrl+I