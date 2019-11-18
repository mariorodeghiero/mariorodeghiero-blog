---
date: 2018-06-21 01:00:00
title: HtmlWebpackPlugin Multiples HTML files
description: Generating multiple HTML files with HtmlWebpackPlugin
category: webpack
background: "yellow"
image: "/assets/img/blog-image.png"
---

This is my first article in English, so I hope you like and sorry for some grammatical
error. In the last days I made some modifications in my blog and one of them was to stop
using Gulp and to use the [Webpack](https://webpack.js.org). During the configurations, I faced some difficulties and one of them was the process of generating
multiple HTML files using the plugin [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin).

## Versions

```js
     "html-webpack-plugin": "^2.30.1",
     "webpack": "^3.11.0"
```

We assume that you already have the webpack configured and want to implement the HtmlWebpackPlugin plugin to generate   multiple html files. So, we need to install the plugin, using the command below:

> \$ npm i --save-dev html-webpack-plugin

or

> \$ yarn add --dev html-webpack-plugin

## Default HtmlWebpackPlugin Configuration

Once you have the requirements configured, usually use the plugin like this:

```js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

let HWPConfig = new HtmlWebpackPlugin({
  template: __dirname + "/index.html",
  file: "index.html",
  inject: "body"
});

module.exports = {
  .
  .
  .
  plugins: [
    HWPConfig
  ]
}
```

I like to store the plugin settings in any variable and then use it inside plugins.

## Custom HtmlWebpackPlugin Configuration

If we used the default setting for each new file and depending on the number of files, would leave our webpack configuration file, very extensive. So let's create the following configuration :

```js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

let HWPConfig = new HtmlWebpackPlugin({
  template: __dirname + "/index.html",
  file: "index.html",
  inject: "body"

let articlesHtmlPlugin = [
    'sass-react', 
    'chart-js', 
    'copy-right', 
    'object-literal', 
    'spread-operator'
  ];

let multiplesFiles = articles.map(function(entryName) {
  return new HtmlWebpackPlugin({
    filename: entryName + '.html',
    template: __dirname + `/articles/{entryName}.html`
})

module.exports = {
  .
  .
  .
  plugins: [
    HWPConfig
  ].concat(articlesHtmlPlugin)
};
```

- 1 - We create an array, with the exact name of each article in the articles folder, but **without the extension**.

* 2 - We create a **"multiplesFiles"** variable, where we store in it the **"articles.map"** return. It will go through each item of the array, add the name + extension in filename and then inform the directory with the name of the file in ** template **.

- 3 - Concatenate our variable **articlesHtmlPlugin** at the end of plugins, using **"concat (articlesHtmlPlugin)"**

## Conclusion

This is one of the alternatives for generating multiple html files using the
HtmlWebpackPlugin plugin. Now with each new file created just insert the exact name in the array, that the map would take care of the rest.

Thanks!!
