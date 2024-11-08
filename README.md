# Book Search App 📚

This is a simple React application that allows users to search for books by title or author using the OpenLibrary API. It features a search bar, debounce to optimize network calls, and an efficient way of rendering results.

## Features

- **Search by Book Title or Author**: Users can switch between searching by book title or author name.
- **Debounced Search**: Reduces unnecessary API calls by only making requests when the user stops typing.
- **Efficient Display**: Uses react-window to handle large lists of book data efficiently.
- **Loading Indicator**: Displays a loading animation while fetching data.
- **Responsive UI**: Adapts to different screen sizes for an optimal experience.

## Technologies Used

- **React** for building the UI
- **Lodash Debounce** for optimizing search functionality
- **OpenLibrary API** as the data source
- **React Window** for efficiently rendering large lists

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/saignanadeep11/Book-Finder.git

   ```

2. Navigate into the project directory:
   ```bash
   cd book-search-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### API Setup

This app uses the OpenLibrary API, which doesn't require an API key.

### Running the App

Start the development server:
`bash
    npm start
    or
    `bash
yarn start
Open your browser and go to http://localhost:3000
