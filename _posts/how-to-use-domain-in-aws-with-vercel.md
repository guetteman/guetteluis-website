---
title: 'How to use domain in AWS with Vercel'
coverImage: '/assets/blog/how-to-use-domain-in-aws-with-vercel/how-to-use-domain-in-aws-with-vercel.png'
headerImage: '/assets/blog/how-to-use-domain-in-aws-with-vercel/how-to-use-domain-in-aws-with-vercel.png'
imageAlt: 'Vercel.com'
date: '2020-05-22T05:35:07.322Z'
ogImage:
  url: '/assets/blog/how-to-use-domain-in-aws-with-vercel/how-to-use-domain-in-aws-with-vercel.png'
---

Recently, I learned that quite painful to connect a domain that you have in AWS Route53 to Vercel. When you add a custom
domain to one of your projects, Vercel will ask you to add some records to the Nameservers configuration. 

![Nameservers](/assets/blog/how-to-use-domain-in-aws-with-vercel/nameservers.png)

Also, it will ask you to add an alias to `alias.zeit.co`

![Alias](/assets/blog/how-to-use-domain-in-aws-with-vercel/aname.png)

You won't have any issues when adding the nameservers in route53 hosted zone configuration. The problem is when you want
to add the alias. Route53 won't let you do that. 

So, what I did was to move the DNS management to Vercel in the registered domain, and moving all the records to Vercel 
(You don't need to transfer the domain to Vercel, just the DNS Management). 

Now in the Vercel [domains dashboard](https://vercel.com/dashboard/domains) 
you will see all your domains, and in the `Nameservers` column you will see `Vercel`, which means that your domain is using
Vercel's nameservers.

To configure your DNS, you will need to use Vercel's CLI and you can read its documentation [here](https://vercel.com/docs/cli?utm_source=zeit-dashboard&utm_medium=web&utm_campaign=configure-dns#commands/dns).

Finally, you can add your base domain to your project!  
