---
date: 2021-02-01 00:54:00
title: GitHub actions
description: GitHub Actions using node.js workflow
category: tests
background: "#7AAB13"
image: "/assets/img/blog-image.png"
---

Usually, I start my personal and professional projects with a default GitHub actions config to be able to test every pull request from the beginning of development. So I decided to share in this article how to use GitHub actions + node.js in order for you to run the tests while keeping your application safe. This is a simple workflow but it is very helpful.

## Create action

1 . Go to the Actions tab on your GitHub repository.

2 . Choose the template Node.js workflow.

3 . Replace the exisitng code adding the code below:

```yml
# This workflow will do a clean install of node dependencies, build the source code 
# and run tests across different versions of node.

name: my-actions

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [12.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Set up Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Run the tests
      run: npm test

    - name: Build
      run: CI=false npm run build
```

**Note**: If you need to use another node version, you can replace it for `node-version: [10.x, 12.x, 14.x]`

4 . Commit the workflow to a new branch.

5 . Create a pull request titled CI for Node.

6 . Now you can see your actions running if your repository contains the scripts in the package.json file.

## GitHub Actions vocabulary

> Workflow: A workflow is a unit of automation from start to finish, including the definition of what triggers the automation, what environment or other aspects should be taken account during the automation, and what should happen as a result of the trigger.(GitHub, 2020).

> Job: A job is a section of the workflow, and is made up of one or more steps. In this section of our workflow, the template defines the steps that make up the build job.(GitHub, 2020).

> Step: A step represents one effect of the automation. A step could be defined as a GitHub Action, or another unit, like printing something to the console.(GitHub, 2020).

> Action: A GitHub Action is a piece of automation written in a way that is compatible with workflows. Actions can be written by GitHub, by the open source community, or you can write them yourself!(GitHub, 2020).


## Conclusion

I think now you can start using GitHub actions in your projects. I will not explain what each line does but if you want to know more about what it does, I really recommend accessing the [GitHub Lab](https://lab.github.com/) and start the GitHub actions course for free. 😁 
