---
title: 'How to Automate Deployments Like a Pro — Adding a new Digital Ocean host to Rancher'
coverImage: '/assets/blog/how-to-automate-deployments-like-a-pro-adding-a-new-digital-ocean-host-to-rancher/how-to-automate-deployments-like-a-pro-adding-a-new-digital-ocean-host-to-rancher.png'
headerImage: '/assets/blog/how-to-automate-deployments-like-a-pro-adding-a-new-digital-ocean-host-to-rancher/how-to-automate-deployments-like-a-pro-adding-a-new-digital-ocean-host-to-rancher.png'
imageAlt: 'Ship'
date: '2019-01-01T05:35:07.322Z'
ogImage:
  url: '/assets/blog/how-to-automate-deployments-like-a-pro-adding-a-new-digital-ocean-host-to-rancher/how-to-automate-deployments-like-a-pro-adding-a-new-digital-ocean-host-to-rancher.png'
---

This is the second article about automate deployments like a pro. Today, we will learn to add a new host to Rancher. Below you can find the whole series:

- [Installing Docker Rancher with SSL](/blog/how-to-automate-deployments-like-a-pro-installing-docker-rancher-with-ssl).
- **Adding a new Digital Ocean host to Rancher**.
- Adding a new service to our Digital Ocean Host.
- Adding a Drone CI service.
- Configuring Github repository with Drone CI.
- Deploy your application.

For this tutorial, We are going to add a service server to host our services, like a web app or whatever you want.

On the Rancher, we need to go to Infrastructure > Hosts and click add host button. You will find the next view:

![Add host](/assets/blog/how-to-automate-deployments-like-a-pro-adding-a-new-digital-ocean-host-to-rancher/add-host.png)

You can select between custom, Amazon EC2, Azure, DigitalOcean, and Packet. So, we click on DigitalOcean, and we will be asked for an Access Token from DigitalOcean.

Now, we go to DigitalOcean dashboard and click on API > Token/Keys. Then click on Generate New Token:

![API](/assets/blog/how-to-automate-deployments-like-a-pro-adding-a-new-digital-ocean-host-to-rancher/api.png)

We will see a prompt window where give it a name, and select if you want to allow to Write or not, in this case, we will select read and write options:

![New access token](/assets/blog/how-to-automate-deployments-like-a-pro-adding-a-new-digital-ocean-host-to-rancher/new-access-token.png)

Once you click on generate token, you will see the new generated token:

![API key](/assets/blog/how-to-automate-deployments-like-a-pro-adding-a-new-digital-ocean-host-to-rancher/api-key.png)

Now, copy and paste on Rancher, and click on Configure Droplet. You will see the next form:

![Configure droplet](/assets/blog/how-to-automate-deployments-like-a-pro-adding-a-new-digital-ocean-host-to-rancher/configure-droplet.png)


It is very similar to the configuration when we create a new droplet on DigitalOcean. Finally, we click on Create, and that's it! Rancher will create a new Droplet for us.
