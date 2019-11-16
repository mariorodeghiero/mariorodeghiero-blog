---
date: 2018-12-22 00:54:00
title: styled-components
description: css in js with styled-components
category: css
background: "#7AAB13"
---



<a class="link" href="https://www.styled-components.com/" target="_blank">styled-components</a> is a library with more than 2 million downloads that allowto use css in javascript. Styled-components allows us some features that help us indevelopment process such as: browser compatibility, individual css for each componentneed to import .css files ... you can check more in <a class="link" href="https://www.styled-components.com">styled-components</a> Now let's see how the styled-components work with ReactJS.

## Install

In the following examples will be used the "create-react-app" and "styled-components" therefore it is necessary to install them to give continuity.

**creact-react-app**

> $ npx create-react-app my-app

**styled-components**

> $ npm install --save styled-components

## Exemplo 1

In this example we will create a component called "Button.js" ancall it in "App.js" to render. I will not go into the merits of how to use a component i"react.js", if you want to learn more about react.js, I have some articles that addressethe steps. Our component will have the following structure:

```jsx
import React, { Component } from "react"
import styled from "styled-components"

const StyleButton = styled.button`
  background: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

class Button extends Component {
  render() {
    return (
      <div>
        <StyleButton>Button</StyleButton>
      </div>
    )
  }
}

export default Button
```

That sounds magical right? I do not know about you but when I first saw it was 😱😍, today I'm fascinated to use "CSS in JS". Styled-components uses "ES6 template literals", so we can store a function inside the variable and use it to present our Button.

<img
    class="screenShot"
    src="../static/assets/img/ScreenShot-StyleButton.png"
    alt="screen-Shot App.js"
  />

## Conclusion

To talk more about styled-components like (props, theme, injectglobal, mixins function, etc ...), I will split into some posts, so just follow the blog.
These are just a few of the many features that styled-components provides to streamline the development process, leaving our code more performative. It is worth checking the documentation directly on the  
<a class="link" href="https://www.styled-components.com//documentation/file.styled-components_REFERENCE.html">styled-components</a> and know a little more about the power it offers.

Thanks!!
