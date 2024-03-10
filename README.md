# TPAY TASK - 34c12f159541eb7212e7f1c06135c0de

## For the assigned task, 1-1.5 hours is enough time to make a simple appearance + implement the logic for retrieving data from the public API. Taking advantage of the fact that it was a weekend, I allocated more time to break down as many components as possible into smaller parts and create a small file structure so that the project could be easily read and be extendable and reusable

## [LINK TO DEMO](https://34c12f159541eb7212e7f1c06135c0de.netlify.app/)
<br/>
<br/>

## NODE Version: 20.11.1 LTS
### Clone repo
```
git pull [repo url HTTPS]
```

### After cloning the repository

Install dependencies 
```js
npm/pnpm install
```
then run the app
```js
npm/pnpm run dev [optional --host]
```


<br />
<br />
<br />

### TODO + `MY COMMENT`:

#### Develop a React component that includes a button and a display area below it. The button, when clicked, should initiate a request to a public API that includes a random element in the request URL, such as a userId or similar parameter, to fetch unique data on each request. This randomness ensures that the response varies with each button click, simulating a real-world scenario where different data is retrieved in each call.

### ` I created a component that retrieves random data, increased the generation of id numbers, which the API does not have, to trigger an error`
#
#### The button should display the text "Fetch Data" initially. When the data fetching process begins, replace the button's content with a loading spinner, signaling to the user that the data is being retrieved. Once the fetching process is complete, revert the button's text to "Fetch Data," and display the retrieved data in the area below the button. A 2-second delay should be implemented before showing the fetched data to simulate network latency.

### `I implemented a 2 second delay, but the API also has a slight delay`
#
####  Error handling is not a requirement for this task. However, it is essential that the user can click the button multiple times, with only the latest response being displayed in the designated area below the button.

### `I added a simple alert that informs you of a fetch error`
#
####  The use of third-party libraries for fetching data or state management is prohibited. Rely on the native fetch API for data fetching and React's built-in state management features.

### `he preparation of the task I used only SCSS for my convenience. In accordance with your guidelines and the company's views, I avoided libraries that facilitate the work such as "tailwind" etc. tried to do everything from scratch`
#
#### Center the button and the display area on the page, and apply your preferred styling to these elements. Ensure that there is a subtle animation or visual indicator when the button transitions to and from the loading state.
#
#### This project should be developed using React.js and set up with Vite. The use of TypeScript and writing tests for your component with Vitest or Jest is optional.
#
#### Host the project in a public GitHub repository, named with a random MD5 hash generated from an online tool. Include a README.md in English, providing clear instructions for setting up and running the project locally, along with any other pertinent information.

#
####  Ensure the project is compatible with computers running the latest LTS version of Node.js.