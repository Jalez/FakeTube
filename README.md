<!-- @format -->

# FakeTube (Temporary title)

## About this program:

This is a simple React SPA (single page application) that takes search terms from the user and searches the Youtube API(info: https://developers.google.com/youtube/v3/docs/search/list) using axios (https://github.com/axios/axios).

Semantic-ui (https://semantic-ui.com/) is in use for some parts of the program during the development phase, but is gradually being replaced by self-developed css as the project progresses.

Currently, only the front-end has been fleshed out, as this project is mostly about exploring the creation of websites using the React JavaScript library. Should this project continue to be developed later down the line toward a more "production"-ready state, the creation of a backend would be necessary. For database, mongoDB would seem like the obvious choice, but for the sake of practice self-made sql-based database could be considered.

## State:

Under development (As of 2021).

## Developers

Jaakko Rajala, jaakko.rajala@tuni.fi

## Current Todo list(In no specific order atm):

- [ ] Make video-list display more than 5 items through the youtube api. Perhaps the next 5 suggested items?
- [ ] Come up with a better way to display the video-list? Not a priority.
- [ ] Remodel the chat-component and more specificly, the single comment-component.
- [ ] Separate comment-component to separate react components.
- [ ] Add a working database. Probably with MongoDB, could possibly do something SQL-based for practise sake?  
- [ ] Use the database to store data for actual accounts, comments, video-preferations, etc.
- [ ] Add a unique default video-list based on users most popular search terms. (current term: books)
- [ ] Create a login screen (Probably a pop-up that only triggers if no user has been logged in in the past.)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
