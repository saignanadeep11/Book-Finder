Book Finder
A React application that allows users to search for books by title or author using the OpenLibrary API. This app provides a user-friendly interface to find book details, display search results efficiently, and handle large datasets smoothly.

Features
Search by Title or Author: Select the search type to find books by title or author name.
Debounced Search: Reduces unnecessary API requests by waiting until the user stops typing.
Loading Indicator: Shows a loading animation when fetching data from the API.
No Results Message: Displays a message if no results are found after typing stops.
Virtualized List: Uses react-window to display search results efficiently, even with large data sets.

Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/saignanadeep11/Book-Finder.git
cd book-finder

Install Dependencies:

bash
Copy code
npm install
Run the App:

bash
Copy code
npm start
