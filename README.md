# Given Instructions
Using React with TypeScript and Firestore (Google's NoSQL database), implement a Github "user saver" app. The app should meet the following criteria:


1. There is a search bar at the top of the page in which users can enter Github usernames. Upon hitting the "enter" button the application will search for username.
2. Upon pressing enter in the textbox, the application retrieves this URL https://api.github.com/users/<username>;
3. If there is a result, the application displays a success message to the user and saves data. If there is an error, the application displays an error message.
4. Below the search box there are rows of data corresponding to users in the database. A mock design is attached on the next page.
Each row contains this information:
  - Username w/ link to Github profile 
  - name
  - public_repos
  - public_gists
  - followers 
  - following
  - created_at in MM/DD/YYYY format


The app does not need to worry about authentication or user-specific lists of any kind. The FireStore credentials can be hardcoded and don't need to be hidden in a .env file. Please use best practices when creating this application (such as separate out concerns/basic architecture) and provide a ReadMe markdown with explanations of your architecture decisions and other decisions you made about your app. Decisions may include use of third party libraries, a problem that came up and how you decided to solve it and/or reasons why you decided to structure your app a specific way. Unit testing will not be required for this challenge but is highly encouraged. As a baseline for bootstrapping, using the create react app with typescript is encouraged. For the parties reviewing your code, please include documentation in the ReadMe on how to get your up and running. Even if it is only a ‘npm i’ and ‘npm run start’, please make sure the scripts are correct and are documented on how to use your app. Below is a UX mock that should be followed for your build.

![UX mock example](/public/example.png "example user saver app UX").
--------------------------------------
# Plan & File Structure

html elements: 
  - search input
  - button
  - list 
    - of items

file structure: 
    App -> Search 
      (App holds fetch function and passes down to Search)
        (Search holds username state)
    App -> List -> Item 
      (App holds list state and passes down to List, 
      List passes mapped list item to Item)

  - Components = Search, List, Item
  - services = fetch-utils, firebase, helpers?

--------------------------------------
# Steps
  - initalized with npx create-react-app