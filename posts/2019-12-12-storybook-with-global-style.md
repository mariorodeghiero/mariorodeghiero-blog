---
date: 2019-12-12 00:14:00
title: Storybook with a global style
description: Import globalStyle for all stories
category: react
background: "#7AAB13"
image: "/assets/img/blog-image.png"
---

[Storybook](https://storybook.js.org/) is an excellent tool to improve, organize, and test your components. Today I work with ReactJS and styled-components, and storybook, but Vue, Angular, Mithril, Marko, HTML, Svelte, Meteor, Ember, Riot and Preact are currently supported.
This library has  44k+ stars on GitHub with MIT License.

## Install

In the following examples the "create-react-app", "styled-components" and "storybook" will be used.

**create-react-app**

> $ npx create-react-app my-app

> $ cd my-app

> $ npm install

**styled-components**

> $ npm install --save styled-components

**storybook**

> $ npx -p @storybook/cli sb init --type react

> $ npm i -D @storybook/addon-info

## Run storybook

> $ npm run storybook

**Note:** If you had some problem to run it, try to reinstall. `npm install`

## Global Style

I created a file **"globalStyle.js"** with some styles like colors, typography, etc...

```jsx
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 * {
    padding: 0;
    margin: 0;
    color: red;
  }

  body {
    background-color: pink;
  }
`
```

## How to config the loader

In the folder **.storybook/**  has a file with the name **config.js**. To apply the global style for all components into your project, you can use this code below.

**Note:** 

you need to change the name of **require.context( )** depending on the structure.

Make sure that you have **react**, **react-dom**, **@babel/core**, and **babel-loader** in your dependencies.

```jsx

import { withInfo } from "@storybook/addon-info";
import { configure, addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/globalStyle"
import * as React from "react";

const req =  require.context('../stories', true, /\.stories\.js$/);

addDecorator(withInfo());
addDecorator(style => <><GlobalStyle />{style()}</>);

configure(req, module)

```

## Conclusion

After this, you only need to stop and restart your project, and all the components will have a new style.
I hope this post can help you.

Thanks!!
