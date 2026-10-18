# Web Lab 5 - React Product Dashboard

This is a small React application built for Assignment 5. It demonstrates core React concepts like functional components, props, state management (useState), conditional rendering, and composition (children).

## File organization
* `src/App.jsx`: The root component that holds the application state (`showProducts` and `name`) and handles conditional rendering.
* `src/components/ProductList.jsx`: Contains the static array of products and maps through them to render individual product items.
* `src/components/Product.jsx`: A reusable component that accepts `title` and `price` as props and displays them.
* `src/components/Card.jsx`: A layout wrapper component that utilizes the `children` prop to apply a consistent border and padding to its contents.

## Challenges faced
* Understanding how to pass data between components using props required careful tracking of variable names.
* Managing state in the parent component (`App.jsx`) to control the visibility of a child component (`ProductList.jsx`) was an interesting challenge in learning React's one-way data flow.
* Implementing the `children` prop in the `Card` component required a shift in thinking from standard HTML elements to composable React components.
