---
title: 'Why do we need use React key when rendering lists'
coverImage: '/assets/blog/react-key-attribute/react-key-attribute.jpg'
headerImage: '/assets/blog/react-key-attribute/react-key-attribute.jpg'
imageAlt: 'List'
date: '2020-10-05T05:35:07.322Z'
ogImage:
  url: '/assets/blog/react-key-attribute/react-key-attribute.jpg'
---
<span>Photo by <a href="https://unsplash.com/@glenncarstenspeters?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Glenn Carstens-Peters</a> on <a href="https://unsplash.com/s/photos/list?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

You probably have seen this warning: `Warning: Each child in a list should have a unique “key” prop` when you are trying to render a list from an array in React. Although it is a warning, you should be really careful about it, because your component could work different from what is expected. Let’s say that we want to render the next list:

```jsx
const list = ['first', 'second', 'third'];

const uiList = (
	<ul>
		{list.map(item => (
			<li>{item}</li>
		))}
	</ul>
)
```

What React is doing is interpolating an array of elements to be rendered. The problem is when you want to re-render the list. If you add/remove an item from the array, React doesn’t know where is the change in the array. So, if you reorder the list, React won’t know which one changed. This is specially tricky when the items in the list are components that manage states.

This is what the `key` is for. React uses this attribute to associate the rendered element with its position in the list. Now, let’s say that you solve the issue like this:

```jsx
const list = ['first', 'second', 'third'];

const uiList = (
	<ul>
		{list.map((item, index) => (
			<li key={index}>{item}</li>
		))}
	</ul>
)
```

This won’t work, because if the `index` (position in the array) changes, the `key` attribute will change as well, and if we reorder the list, the `key` will still match with the position, but the item has changed its position. So, in our case, we can use the item itself:

```jsx
const list = ['first', 'second', 'third'];

const uiList = (
	<ul>
		{list.map((item) => (
			<li key={item}>{item}</li>
		))}
	</ul>
)
```

But be careful about it, you need to be sure that the `key` attribute is unique in the array.

For more information about it, check [Lists and Keys – React](https://reactjs.org/docs/lists-and-keys.html)
