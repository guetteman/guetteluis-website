---
title: 'Smart Parking Platform'
excerpt: "This project was built to manage parking lot in a port of Spain."
coverImage: '/assets/projects/smart-parking-platform/zone.png'
headerImage: '/assets/projects/smart-parking-platform/zone.png'
imageAlt: 'Smart parking platform'
date: '2019-10-24T05:35:07.322Z'
ogImage:
  url: '/assets/projects/smart-parking-platform/zone.png'
---

This project was built to manage parking lot in a port of Spain. We put status sensors in each stall and flow sensors
in the main access routes. A [Mango Automation](https://infiniteautomation.com/) gateway to collect the data from all the
sensors and then send this data to the platform which is built in Laravel.

![System diagram](/assets/projects/smart-parking-platform/system-diagram.png)

The phases of this project were:

1. Initial preparation
2. Design
3. Development
4. Go Live
5. Support

## Initial preparation

In this phase we collected all the procedures and information from the client, and defined the structure of the project itself.
At the end of this phase we delivered a SOW (Statements of Work), with all the details of the project.

## Design

We started by designing all the functional processes and the UI and the database structure as well. In this phase we delivered
a detailed document with the design of all the functional procedures, the first version of the UI design (it changed a little in development)
and Infrastructure of the platform with the database design.

The database models are:

- User
- Company
- Vehicle
- VehicleType
- Zone
- Stall
- StallType
- Plan
- Service
- Reservation
- Payment
- Counter
- CounterRecord
- CounterReport


## Development

We developed the platform in Laravel and the frontend in blade/VueJS with TailwindCSS, following TDD. At the middle of the development,
I realized that the pages took too much time to load, and it was because the javascript file size was big, even with
minification.

So, this is when I decided to test [InertiaJS](https://inertiajs.com/), and it changed my life. It started as a small test,
but I ended migrating the whole frontend to InertiaJS, and it was a huge improvement in the performance.

A requirement that was a challenge was the ability to see in real time the stalls' status, and the flow of the vehicles
in a custom map.

For this, I created custom VueJS component which takes a map in svg format, and draw the areas depending on the availability
and add some popup widows to see statistics by the stall or zone.    

![System diagram](/assets/projects/smart-parking-platform/statistics.png)

For the realtime dashboards, we used [Pusher](https://pusher.com/) with `laravel-echo`

## Go Live

We used [Laravel Forge](https://forge.laravel.com/) to manage the servers, and [codefresh](https://codefresh.io/) as CI/CD platform.

## Screenshots

![Stalls](/assets/projects/smart-parking-platform/stalls.png)

![Users](/assets/projects/smart-parking-platform/users.png)
