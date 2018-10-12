# donation

A React SPA project for showing donations for a charity.

## Setup

- Download all the files in the donation folder (git clone the repo)

- In the terminal run: `npm install` to install all the dependencies for the project.

- Run `npm start` to get the app started.

- Head to http://localhost:3000/ to see it.

## Testing

Run `npm run test` to run the test suites

I have written a few basic tests using Jest and Enzyme. As TDD is very important to me I wanted to approach the task using that methodology. However, given time restraints I started the project and then wrote the tests. You can run the test suite by running `npm test` in the terminal. I have used a mix of unit and snapshot tests for each component. I have kept the failing tests in the suite to show progress. If I had more time I would like to fix them! The main task is that the data comes in asynchronously and I need to create a test which mocks the async call.

## My approach

I started out by setting up a simple create-react-app project as I wanted to jump into development quickly. I also created a login for the Just Giving Developer service and waited for approval. While I was waiting I began creating the component files I wanted to use. I decided on using the styled-components package as it keeps the styling inside the components and also allows you to use JavaScript in the styling. Using this I created a simple box where the donations would go and started on the Ajax data request. As I still hadn't been approved I used another API (CocktailDB) to test and prepare the data fetch asynchronously and get it loaded separately into the series of boxes. Utilising a number of ES6 structures such as arrow functions, destructuring and #map, the data was mapped over and a separate box component was rendered with the name, amount donated and image of each donor. After I was approved for the JG API I swapped out the API endpoint and object references. I then worked on the tests, some of which were difficult as the app involves an API call which needs to be mocked.

## Due to time constraints

If I had more time to work on this project I would like to fix the async test mocks and write more tests to cover all the code. Currently the API call is done in the App component, which should be moved out into a separate file and imported into the component (I began work on this but didn't manage to finish it in time). I could improve the styling and add the ability to view the donations from all the charities and the ability to filter and sort them. This could also involve using Redux to handle state.

TDD is an important method of software development for me and if I had more time I would like to build the app from the ground up writing the Jest tests first. This would make the app more stable and scalable for the future. This would also involve making sure the snapshot test of the Donation component was working correctly.
