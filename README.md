# Bob Ross Painting Gallery 

    Bob Ross Painting Gallery is an app that finally makes it easy way to view all of the wonderful works of Bob Ross. Bob Ross, did thousands of paintings, but being able to indetify each one is very hard to do... Now users have the ability to not only view all of his works, but search for certain pieces, as well as add any works that haven't been included in his library.


# How to use the App 

- User opens up the home page to be greeted by a beautiful photo of Bob Ross followed by a brief bit of information about his life.
- For the user to get to the gallery, they simply click the gallery button in the navbar.
- Once the user lands on the gallery page, automatically all of Bob's wonderful works render below. 
-  The user can then peruse his works or search for a particular paintings they'd like to view. 
- If a user likes a particular painting they can make sure to click the favorite button at the bottom of the page. 
- When the user type in the search bar the gallery list is then filtered to only show paintings that match the characters the user typed in for their search. 
- But what if a particular painting is not in the gallery?  
- The user can then click on the add button in the navbar to go to a form that will allow them to add a new painting to the gallery. 
-  Once the user adds a new painting it will render on the add page as well as the bottom of the gallery page. 
- The user can then go back to gallery page serach for their new painting, just to make sure it's in there. 


# How the App is built 

- The App is built in react so it's important to note that the app is broken down into components that have a single use in the application. 
- The App also makes use of a client-side routing which enables us to have a single html page. 

# The <App /> Component 

- The <App /> component is the parent component and where all of the fetching, posting, and state is managed. 
- It is also the component that manages our client side routing feature: 


