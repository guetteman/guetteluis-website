---
title: 'React Fragments'
coverImage: '/assets/blog/react-fragments/react-fragments.jpg'
headerImage: '/assets/blog/react-fragments/react-fragments.jpg'
imageAlt: ''
date: '2020-10-01T05:35:07.322Z'
ogImage:
  url: '/assets/blog/react-fragments/react-fragments.jpg'
---
<span>Photo by <a href="https://unsplash.com/@brannon_naito?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Brannon Naito</a> on <a href="https://unsplash.com/s/photos/fragments?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

Let’s say that we want to set to elements site-by-side in a React component:

```jsx
function columns() {
	return (
		<th>First column<th>
		<th>Second column<th>
	)
}
```

If you used like this, React will complain about this

```text
Adjacent JSX elements must be wrapped in an enclosing tag....
```

So, we could wrap the code inside a `<div>`, but this would result in an invalid HTML (in our case), and honestly, you wouldn’t want to add more elements Than the ones you really need. That’s what the React fragments are for. They allow you to wrap a group of children side-by-side, and they won’t appear in the resulting HTML. You can use it like this:

```jsx
function columns() {
	return (
		<React.Fragment>
			<th>First column<th>
			<th>Second column<th>
		</React.Fragment>
	)
}
```

Or with the shorthand, like this

```jsx
function columns() {
	return (
		<>
			<th>First column<th>
			<th>Second column<th>
		</>
	)
}
```

And the result HTML will be:

```html
<th>First column<th>
<th>Second column<th>
```

You can add a key prop when you want to use them inside a `map`. For more information, you can check [Fragments – React](https://reactjs.org/docs/fragments.html)
