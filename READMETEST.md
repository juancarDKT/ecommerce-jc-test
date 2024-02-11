# Code Test

Welcome to this code test! :)

You must create an application consisting of **3 main components**:

- A search box
- The list of results
- Product detail description

The application should consist of both a server and a client. The server should expose a RESTful API, and the client should consume it. Use any frontend framework you like (Svelte or React) and any backend as well (Svelte Kit, Next, or Express) based on JavaScript or TypeScript languages.

## Context

We are an ecommerce with all kinds of products. We want to create our web app. For now, **our market will be mobile**.

In this initial version, users will be able to search for the product name. We will show them a list of products, and they can click on each one to view the details.

Considerations:

- We are uncertain if the framework we use now will be final, but we want to reuse as much code as possible.
- The application should be user-friendly and **visually appealing**. Feel free to copy the design or use a component catalog.
- **SEO for the application is VERY important**. So, Google's robot should be able to crawl our page smoothly, and the performance should be appropriate.
- We also want users to be able to share products on social media.

## Requirements

### Functionality

1. **Create the 3 pages**: Home with search box, search results, and detail.

2. **Page routes will be**:

- Home with search box

  - Route: `/`
  - Description: Displays a search box for product searches. Upon searching, navigate to the Search Results view.

- Search Results:

  - Route: `/items?search=`, for example: `/items/?search=laptop`
  - Description: Displays below the search box the number of results and the results for each category. Each result card should display: title, description, price, category, image, and rating.

- Product Detail: "/items/:id"
  - Route: `/items/:id`
  - Description: Shows the complete product description, including all details such as price, description, brand, stock, category, etc. Displays all images. Also, include a button to make a purchase (even if it doesn't work).

3. **API**: Create two endpoints based on the content of the `products.json` file, but you don't have to follow that schema. The endpoints to create are:

- `/api/items?q=:query` where `:query` is the user's search. It should return a JSON with the data to be displayed in the list of items.
- `/api/items/:id`, where `:id` is the selected product's id. It should return a JSON with the data of the selected item.

4. **Deployment**: The application should be deployed on a free hosting service (Netlify, Vercel, Firebase, etc) and should be accessible through a public URL. **Indicate the URL when submitting the test.**

5. **Testing**: The application must have AT LEAST one test. Write the test you consider most important for your application.

## Code Recommendations

1. **Code Structure**: The code should be well-organized and easy to read, applying development best practices (SOLID principles, Clean Code, Dependency Injection, Inversion of Control, and others).

2. **HTML Semantics**: HTML should be semantic and accessible.

3. **Team Consideration**: Prepare your project with the idea that anyone on your team might have to work on it in the future (scripts in package.json, minimal documentation in README, comments in code if necessary, etc.).

4. **Code Formatting**: Ensure your code is consistently formatted. You can use Prettier or any other tool you prefer.

5. **Production Ready**: Make sure your application is production-ready. Minimize code, optimize images, etc.

## Additional Challenges

**Want to go above and beyond?** Here are some additional challenges you can attempt:

- Implement the shopping cart functionality.
- Manage a session and restore the shopping cart upon reconnections.
- Make the design responsive.
- Integrate pagination both in the API and the web.

## Interview

If you advance to the next phase, we will ask you to participate in an interview with us. During the interview, we will ask you to explain your code and make some changes to it.

- You will need to explain the code you have written and the decisions you have made.
- We will propose some changes and you will have to adapt the code live.

## Contact

If you have any questions about the test, you can contact us.

Good luck and happy coding!
