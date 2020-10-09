---
title: 'Lazy state initialization'
coverImage: '/assets/blog/lazy-state-initialization/lazy-state-initialization.jpg'
headerImage: '/assets/blog/lazy-state-initialization/lazy-state-initialization.jpg'
imageAlt: ''
date: '2020-10-08T05:35:07.322Z'
ogImage:
  url: '/assets/blog/lazy-state-initialization/lazy-state-initialization.jpg'
---
<span>Photo by <a href="https://unsplash.com/@photoholgic?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Photoholgic</a> on <a href="https://unsplash.com/s/photos/lazy?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

When we use `useState()` hook, most of the time we want to set an initial state, and most of the time, it would be something like this:

```jsx
function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(currenValue => currenValue + 1);
  }

  return (
    <button onClick={incrementCounter}>{counter}</button>
  )
}
```

We initialize our counter on `0`, which is a static value. But what if we want this value to be dynamic? Like this:

```jsx
function Counter({initialValue}) {
  const [counter, setCounter] = useState(initialValue || Math.floor(Math.random() * 100));

  function incrementCounter() {
    setCounter(currenValue => currenValue + 1);
  }

  return (
    <button onClick={incrementCounter}>
      {counter}
    </button>
  )
}
```

Now, if we pass an `initialValue` to the component, the counter will be initialized to that number, and if we don’t pass any value, we initialize the counter with a random number between 0 and 99.  

If you test the code from above, it will work as expected. But something interesting happens here. Every time  the component runs, the `useState` is going to run, and it evaluates the initial state we set depending on the case. 

This value is meaningful only at the first run, after that, `useState` ignores the initial value that we pass. We could be performing a computationally expensive process for initializing state, and we don’t want to run every time the component runs. That’s what the **lazy state initialization** is for. So, to fix this problem, pass a `function` as the parameter of the `useState`, like this:

```jsx
function Counter({initialValue}) {
  function initializeCounter() {
    return initialValue || Math.floor(Math.random() * 100)
  }
  const [counter, setCounter] = useState(initializeCounter());


  function incrementCounter() {
    setCounter(currenValue => currenValue + 1);
  }

  return (
    <button onClick={incrementCounter}>
      {counter}
    </button>
  )
}
```

This works as before, but the key difference is that the `inizializeCounter` function runs only one time, when the initial state is set. And we can do it even better:

```jsx
function Counter({initialValue}) {
  const [counter, setCounter] = useState(() => initialValue || Math.floor(Math.random() * 100));

  function incrementCounter() {
    setCounter(currenValue => currenValue + 1);
  }

  return (
    <button onClick={incrementCounter}>
      {counter}
    </button>
  )
}
```

We can just pass an anonymous function as a param of the `useState`. Now we improved the performance of our code just with a small change. Be careful about when to use it. If you only pass a static value, you don’t need to do this, the lazy state initialization is really useful when **performing a computationally expensive process for initializing state**, keep it in mind.

I learned this on [Get Really Good at React | Epic React by Kent C. Dodds](https://epicreact.dev/) 😃
