---
title: 'How TailwindCSS made me a better developer'
coverImage: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80'
headerImage: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&h=700&q=80'
imageAlt: 'CSS Code in a screen'
date: '2020-05-20T05:35:07.322Z'
ogImage:
  url: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80'
---

When I started programming, I remember that I made my first website on Laravel [(Innotica)](https://innotica.net/) and I realized that CSS was hard.
At that time, I didn't know anything about Angular or ReactJS (VueJS wasn't created yet), and in 4 months a had to build a website for a company.

We didn't make any design, we just got started on coding (and learning about Laravel), and we took a template form the Internet with some
components. Responsive design was really tough. Now that I see that design, I hate it, but it was my first test in web development!

When [TailwindCSS](https://tailwindcss.com/) came out, I was really excited, utility-first framework? what was that? Then, I read [Utility-First](https://tailwindcss.com/docs/utility-first).

So, I gave it a try. At first, it took me some time to remove the Bootstrap "pre-built components" from my head. Then, I
started to see Adam Wathan screencasts on [Youtube](https://www.youtube.com/channel/UCy1H38XrN7hi7wHSClfXPqQ) and I was
wrong about the process to make good, reusable and easy to maintain UI. So, I changed the way I make UI. This is my process:

1. Depending on the project name and if they had a logo or some previous design, I build in my head how it looks like.
2. I make some research on [Pinterest](https://www.pinterest.com/), [Dribble](https://dribbble.com/), [Uplabs](https://www.uplabs.com/)
3. Then, go to [Figma](https://www.figma.com) and try to build a main page with the ideas that I have. In this step I use a lot what I learned
with [Refactoring UI](https://refactoringui.com/) book, **TailwindCSS** and recently, with [Tailwind UI](https://tailwindui.com). I try to find
good designs on the Internet, but always thinking in the code. In this process I use colors from **TailwindCSS** because it is easier,
you can get started really fast and try designs with those colors.
Then, if I need it, I define a different primary and secondary palette, different from the tailwind palette. Another thing, that I've been
checking as well is light and dark theme colors, depending on the project.
4. When I finish the main page I look for some feedback from other people, and try to build a new version with this information.
5. In **Figma**, I separate the pages from the UI components as I can reuse them. Also, I define the colors, shadows, etc, as local styles.
6. Depending on my perception of the project, I may created a mobile version of the page. because sometimes it can be really different.
7. Next, I start the development. I install **TailwindCSS** and **Tailwind UI**.
8. As I learned from Adam, I do my development mobile-first. Then, I add responsive modifiers, depending on the case,
while I'm increasing the screen size.
9. I add some cool animations to the page, and if I really need it, I add custom css classes.
10. And that's it! With this flow I've been able to build cool UIs in a couple of days. And the good thing is that this
works in mobile development as well.

I realized how important is to define and follow a process when build UI. With **TailwindCSS** I've improved by a lot the way
I build UI. I fact I learned how write CSS by using Tailwind. So, if you are new in the web development, I highly recommend
that you start using Tailwind and watch the screencasts from Adam, because I guarantee you that you will learn lot.

**Note:** This website is build with **TailwindCSS** and It only took me a couple of days. 😁
