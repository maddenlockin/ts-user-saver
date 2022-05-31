# Github 'User Saver' App

## Description

Users are able to search for github profiles through the search bar. If the user submits the username of an existing github profile, the app stores the username in the database and updates the success message and list below the search bar.

## Information
- [x] There is a search bar at the top of the page in which users can enter Github usernames. Upon hitting the "enter" button the application will search for username.
- [x] Upon pressing enter in the textbox, the application retrieves this URL https://api.github.com/users/<username>;
- [x] If there is a result, the application displays a success message to the user and saves data. If there is an error, the application displays an error message.
- [x] Below the search box there are rows of data corresponding to users in the database. A mock design is attached below on the next page.

![UX mock example](/public/example.png "example user saver app UX").

## How To Set Up 

Run the following commands to setup:

1. git clone https://github.com/maddenlockin/ts-user-saver.git
1. cd ts-user-saver
1. npm i
1. npm start to see live server
1. node index.js -> to see a test output

## Libraries & Tools Used
- initiated with create-react-app's typescript template
- chose to use React External Link in Item Component. It has a default of rel='noopener noreferer' and target='_blank'. It felt cleaner to have those established by the library than to add them to the return explictly. 
Docs: (https://github.com/acelaya/react-external-link)
- installed Firebase(version 9.8.2) in order to connect to the Firestore server

## File Structure

    App -> Search -> Message
    App -> List -> Item 
      

## Decisions and Tradeoffs

1. ES6 imports and React Functional Components were chosen because we have the ability to use state with hooks without a class. I am partial to FC. 
1. I chose to send Firebase only the user-input github username, as opposed to all of the user data. Then when the list of usernames is fetched from Firebase, the rest of the user data is fetched from the Github API. (see fetch-utils githubInfo() and Item.tsx)
1. I sought to minimize prop drilling and initialized all pieces of state at the lowest level. 
1. ** Note on scalability:  
  Currently, when a user submits the new username is added to the backend and the list of usernames is fetched with the updated entry. This is inconsequential with the scale of this exercise. If the app were larger I would reduce calls to the API and handle the displayed list in the UI by updating the frontend state. Depending on the use case I may use caching to account for the possible periodic updates to profiles. (see Search.tsx)
1. With more time, I would like to return the list in alphabetical order or sequentially. I am unsure what the organizational structure is based on currently. 
1. I used interfaces as opposed to types for initializing state and establishing prop types; I also used JX.Element instead of FC as the type for all children of App.tsx.
1. I did not have time to account for edge cases

## Personal Note

This was my first time using Typescript! It was fun and challenging to figure out while utilizing React. Going from a non-typed language to strictly defining types has a sharp learning curve and I am excited to continue learning it! 

If you would like to see more of my process through building the app, I made a javascript version initially, here : https://github.com/maddenlockin/CDW-take-home-js 
You will need to clone it down, cd into it, npm i and npm start to see the live-server. 