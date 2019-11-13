---
date: 2019-10-02 05:54:23
title: styled-components
description: css in js with styled-components
category: css
background: "#7AAB13"
---
<div>
        <h1 class="title">styled-components</h1>
        <h4>"css in js with styled-components"</h4>
        <p>
          <a class="link" href="https://www.styled-components.com//" target="_blank"
            >styled-components</a
          >
          is a library with more than 2 million downloads that allows us to use css in javascript.
          Styled-components allows us some features that help us in the development process such as:
          browser compatibility, individual css for each component, no need to import .css files ...
          you can check more in
          <a class="link" href="https://www.styled-components.com//" target="_blank"
            >styled-components</a
          >
          <br />
          Now let's see how the styled-components work with ReactJS.
        </p>
      </div>
<div>
        <h2 class="sub-title">Install</h2>
        <p>
          In the following examples will be used the "create-react-app" and "styled-components"
          therefore it is necessary to install them to give continuity.
        </p>
        <p><strong>creact-react-app</strong></p>
        <p class="command-line">$ npx create-react-app my-app</p>
        <p><strong>styled-components</strong></p>
        <p class="command-line">$ npm install --save styled-components</p>
      </div>

```jsx
  import React, { Component } from 'react';
          import styled from 'styled-components';

          const StyleButton = styled.button`
            background: palevioletred;
            color: white;
            font-size: 1em;
            margin: 1em;
            padding: 0.25em 1em;
            border: 2px solid palevioletred;
            border-radius: 3px;
          `;

          class Button extends Component {
            render() {
            return (
              &lt;div&gt;
              &lt;StyleButton&gt;Button&lt;/StyleButton&gt;
              &lt;/div&gt;
            )}
          }

          export default Button;

```

```jsx
import React from "react"
import PropTypes from "prop-types"
import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

import GlobalStyle from "../../styles/global"
import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyle />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

```