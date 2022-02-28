# Bob Ross Painting Gallery 

    Bob Ross Painting Gallery is an app that finally makes it easy way to view all of the wonderful works of Bob Ross. Bob Ross, did thousands of paintings, but being able to indetify each one is very hard to do... Now users have the ability to not only view all of his works, but search for certain pieces, as well as add any works that haven't been included in his library.


# How to use the App 

- User opens up the home page to be greeted by a beautiful photo of Bob Ross followed by a brief bit of information about his life.
- For the user to get to the gallery, they simply click the gallery button in the navbar.
- Once the user lands on the gallery page, automatically all of Bob's wonderful works render below. 
-  The user can then peruse his works or search for a particular paintings they'd like to view. 
- If a user likes a particular painting they can make sure to click the favorite button at the bottom of the page. 
- When the user types a character in the search bar the gallery list is then filtered to only show paintings that match the characters the user typed in for their search. 
- But what if a particular painting is not in the gallery?  
- The user can then click on the add button in the navbar to go to a form that will allow them to add a new painting to the gallery. 
-  Once the user adds a new painting it will render on the add page as well as the bottom of the gallery page. 
- The user can then go back to gallery page serach for their new painting, just to make sure it's in there. 


# How the App is built 

- The App is built in react so it's important to note that the app is broken down into components that have a single but reusable use in the application. 
- The App also makes use of a client-side routing which enables us to have a single html file. 
- The App is compromised of 7 components: 

    - App 
     - NavBar 
     - Home 
     - Gallery
        - Search 
        - PaintingCard 
     - Add 
        - PaintingCard

- The App utilizes each component for a specfic purpose:


    - App 
         - Is the parent component, which stores our state, handles the fetching, as well as the posting.
         - It also holds all of the seprate child components that allow our app to have functionality. 
         - Makes use of the Route, and Switch hooks which provide us with the client side routing functionality.
    - NavBar 
        - The first component rendered in the App component.
        - Stays on the page no matter which path the user navigates to.
        - Uses NavLink hook to provide the paths to each of the seperate links provided for the user to click.
    -  Gallery 
        - Gallery is the first component offered within our switch statement: 
            - Important to note, our switch statement / hook is being used to offer up a number of paths for our app component to render.
            - Depending on the path determined by the client's request the app component will render different components, Gallery being the first option.
        - Within the Gallery component there are a couple of different actions taking place: 
            - The first being rendering the paintings, which takes place in the displayPainting variable, which runs a map function for every painting and renders the painting card to the page via the PaintingCard  component 
            - The second being the Search component which allows users the ability to search for a particular painting, by updating the App components state via filtering the result of Search components value. 
    
    - Add 
        - Add is the second component offered within our app's switch statement.
        - The add component renders a controlled form that takes in the title of a new painting and an image url and then add's that information to our server while also updating state for include the newly added painting 
        - The only component present within the Add  is the PaintingCard component, which in this case only renders one card to the page with the information being passed via props of the information provided via the form. 
    - Home 
        - Home is the final component offered within the switch statement and renders the home page. 
        - All that is contained within the home component is very simple JSX including a header an image and a paragraph of information. 

# REST, Hooks, & State

    -  The painting data is being fetched within the useEffect() hook
    - The useEffect hook is run upon the page rendering 
    - It takes the the data and update the state of the application using the setPaintings state hook
    - When a user add's a new painting to the collection that information is pushed up via props and a POST request is then made upon clicking the add button
    - Within the promise of the POST request state is then updated with a copy of the current state, as well as the new painting 



    