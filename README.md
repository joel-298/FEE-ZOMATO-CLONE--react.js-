Zomato Clone: Front-End Food Ordering Website
Overview:
We have developed a food ordering website inspired by Zomato using React.js, HTML, and CSS. This project implements modern web development features such as API fetching, routing, hooks, and responsive design. Additionally, a json-server is used to simulate a backend, allowing data to be fetched dynamically from db.json.

Basic Setup:
To run this project successfully, you will need to follow the steps below. Make sure you have VS Code installed, along with essential extensions for HTML, CSS, Node.js, Vite, React, and JavaScript.

Terminals:
For this project, you will need to run two terminals—one for the front end and one for the back end.
1. Back-End Setup (using db.json):
  In the first terminal, you will set up the json-server to serve API data.

  Navigate to the project directory:
    cd <name of the directory>
    Install the json-server globally:
    npm install -g json-server
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    json-server --watch db.json

2. Front-End Setup (React project):
  In the second terminal, you will run the React front-end project.
  cd <name of the directory>
  npm install
  npm run dev




Key Features:-
1) Navigation Bar:
  We have built a fully functional navigation bar that enhances user experience with a smart scrolling feature, allowing smooth navigation across sections of the website.
2) React Routing:
  React Router is used to navigate between different pages of the website without page reloads.
3) Add to Cart Functionality:
  Users can add food items to the cart, with the cart dynamically updating based on the selected items.
4) Responsive Design:
  The website is fully responsive, adjusting seamlessly to various screen sizes and devices using media queries.
5) Filtering Food Items:
  A filtering system allows users to sort food items based on their preferences (e.g., price, category, rating), providing a personalized experience.
6) Custom API:
  We have manually written every entry in the db.json file, which serves as our API. At this point, we do not yet know how to create our own APIs using Node.js, so we used json-server to simulate a backend.
7) API Fetching:
  Data from the API is fetched using fetch or axios, and rendered dynamically on the front end.
8) Props for Data Flow:
  We have implemented data transfer from parent to child components using React props.
  For child-to-parent communication, we have employed callback functions (this concept is known as "lifting state up").
9) React Hooks:
  The project utilizes several React Hooks such as useState, useEffect, and useContext to manage state, lifecycle events, and shared data between components.




Limitations:-
1) Search-Bar : 
  Search-Bar does not work for now .... 
