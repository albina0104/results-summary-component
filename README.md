# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned / Useful resources](#what-i-learned--useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

| Desktop                            | Mobile                             |
| ---------------------------------- | ---------------------------------- |
| ![](./screenshots/screenshot1.png) | ![](./screenshots/screenshot2.png) |

### Links

- Solution URL: [https://github.com/albina0104/results-summary-component](https://github.com/albina0104/results-summary-component)
- Live Site URL: [https://albina0104.github.io/results-summary-component/](https://albina0104.github.io/results-summary-component/)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- Mobile-first workflow
- [React](https://react.dev/) - JS library

Note: this is my first React app!

### What I learned / Useful resources

- [Junior vs Senior React Folder Structure - How To Organize React Projects](https://www.youtube.com/watch?v=UUga4-z7b6s) - YouTube video from Web Dev Simplified, helped me to understand how to organize my project.

- We only need to install `sass` and `import "./App.scss";` right in JS files, and that's it, we can use Sass in the React project! Article: [How to Use Sass in React](https://www.makeuseof.com/react-sass-how-use/).

- We can make a transparent color out of a Sass color variable like this:
  ```scss
  background-color: color.adjust($color, $alpha: -0.9);
  ```
  This is the end result we will get in CSS:
  ```css
  background-color: rgba(255,87,87,.1);
  ```
  Note: the `$color` variable can hold any color, for example `hsl(0, 100%, 67%)`.
  
  Article: [Manipulating Sass Colors With HSL And Opacity Functions](https://vanseodesign.com/css/sass-colors-part-2/).

- To align one flex child to the right, set it with `margin-left: auto;`

  From the flex spec:
  One use of auto margins in the main axis is to separate flex items into distinct "groups". The following example shows how to use this to reproduce a common UI pattern - a single bar of actions with some aligned on the left and others aligned on the right.
  ```css
  .wrap div:last-child {
    margin-left: auto;
  }
  ```
  Solution from a StackOverflow post: [How can I align one item right with flexbox?](https://stackoverflow.com/questions/35269947/how-can-i-align-one-item-right-with-flexbox).

- If I'm passing props `color` and `itemType`:
  ```js
  <SummaryItem color='red' itemType={data[0].category} />`
  ```
  Then if I want to destructure props in a child, I have to use exactly same prop names:
  ```js
  function SummaryItem({ color, itemType })`
  ```
  If I try to use `category` instead: `function SummaryItem({ color, category })` - it will be `undefined`.


- [How to add multiple CSS classes in React](https://www.codingdeft.com/posts/react-multiple-class/) - this article helped me to add multiple classes correctly, from which one is a passed prop:
  ```js
  <div className={`${color} summary-item`}>
  ```
  But before that, I managed to find a way myself that works exactly the same:
  ```js
  <div className={[color + ' summary-item']}>
  ```

- If I want to use images in `create-react-app`, relative paths for images don't seem to work. I need to add the images into the `public` folder to solve the issue.

  StackOverflow post: [Correct path for img on React.js](https://stackoverflow.com/questions/37644265/correct-path-for-img-on-react-js).

- Create React App can automatically convert a json to an object when you import a .json file.

  I used the following method to import a JSON file:
  ```js
  const data = require('./data/data.json');
  ```

  Articles:
  - [Mastering JSON in ReactJS](https://tamalweb.com/json-reactjs)
  
  - [3 ways to import a JSON file in React](https://www.learnbestcoding.com/post/81/3-ways-to-import-a-json-file-in-react).

- Article: [Styling in React: 5 ways to style React apps](https://blog.logrocket.com/styling-react-5-ways-style-react-apps/).

- [How to Deploy Create React App to GitHub Pages? (Custom Domain & GitHub Actions)](https://www.youtube.com/watch?v=K5DTIf-jWhk) - YouTube video which helped me to deploy my React app to GitHub Pages.
  First, we need to add the `homepage` attribute to the `package.json`:
  ```json
  {
    "name": "results-summary-component",
    "homepage": "https://albina0104.github.io/results-summary-component",
    ...
  }
  ```
  To deploy React App to GitHub Pages, we need to create a branch and upload the compiled files in that branch. To simplify the process, we can install `gh-pages`:
  ```bash
  $ npm installl gh-pages
  ```
  Also we need to add two scripts to the `package.json`, `predeploy` to compile HTML and CSS files, `deploy` to upload those files to the `gh-pages` branch:
  ```json
  "scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  ```
  Then we need to run in the terminal:
  ```bash
  $ npm run deploy
  ```
  It will make a production-ready build and upload the build to the `gh-pages` branch, from which GitHub will automatically deploy the website.

  I didn't manage to automate deployment with GitHub Actions using instructions from this video, it didn't work, I will need to research this topic further in the future.

  Note: the absolute homepage path was done for deploying the app to GitHub Pages, but it broke links in the local build, so the images disappeared from the website. I found the following solution in the [Create React App documentation](https://create-react-app.dev/docs/deployment/#serving-the-same-build-from-different-paths) - to use this instead:
  ```json
  "homepage": ".",
  ```
  This will make sure that all the asset paths are relative to `index.html`.

- I learned how to create borders only in the corners thanks to a StackOverflow answer to this question: [How can I show only corner borders?](https://stackoverflow.com/a/69827141). Among all difficult looking and not perfect options, one simple approach was offered, which uses multiple `box-shadow`:
```css
div {
  width: 150px;
  height: 150px;
  padding: 10px;
  box-shadow:
    -80px -80px 0 -70px black,
     80px -80px 0 -70px black,
    -80px  80px 0 -70px black,
     80px  80px 0 -70px black;
}
```

## Author

- Frontend Mentor - [@albina0104](https://www.frontendmentor.io/profile/albina0104)
- GitHub - [albina0104](https://github.com/albina0104)
