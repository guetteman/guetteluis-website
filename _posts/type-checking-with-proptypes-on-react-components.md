---
title: 'Type checking with propTypes on React components'
coverImage: '/assets/blog/type-checking-with-proptypes-on-react-components/type-checking-with-proptypes-on-react-components.jpg'
headerImage: '/assets/blog/type-checking-with-proptypes-on-react-components/type-checking-with-proptypes-on-react-components.jpg'
imageAlt: ''
date: '2020-09-30T05:35:07.322Z'
ogImage:
  url: '/assets/blog/type-checking-with-proptypes-on-react-components/type-checking-with-proptypes-on-react-components.jpg'
---

When you are working with React in javascript, there is now type checking out of the box when you pass props. And the problem is that we could pass the wrong values to these props, or even forget to pass them at all. So, this is when `propTypes` comes to save us:

Let’s say that we have the next component:

```js
function Message({subject, greeting}) {
  return <div className="message">{greeting}, {subject}</div>;
}
```

If we don’t pass the correct props, we won’t get the result that we want. So, we add the next code:

```js
function Message({subject, greeting}) {
  return <div className="message">{greeting}, {subject}</div>;
}

Message.propTypes = {
  message(props, propName, componentName) {
    if (!props[propName]) {
      return new Error(`${propName} is required`)
    }
  }
}
```

Now, if we call the component without defining the `subject` prop:

```jsx
<Message greeting="Hello" />
```

You will get the next warning:

```
Warning: Failed prop type: subject is in Message
```

> One important thing is that React moved `React.PropTypes` to a different package since v15.5. In latest versions use `prop-types` library instead.

With this package you can make type checking like this:

```jsx
import PropTypes from 'prop-types';

function Message({subject, greeting}) {
  return <div className="message">{greeting}, {subject}</div>;
}

Greeting.propTypes = {
    subject: PropTypes.string,
    greeting: PropTypes.string
};
```

Check more information in [Typechecking With PropTypes – React](https://reactjs.org/docs/typechecking-with-proptypes.html).

I learned this on [Get Really Good at React | Epic React by Kent C. Dodds](https://epicreact.dev/) 😃
