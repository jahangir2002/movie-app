
# Movie App

Website Link : 
[Movie-app](https://movie-get.netlify.app/) 





## Description

Movie-App is a practice project built with Vite and Appwrite to create a sleek, modern website for discovering and searching for movies. The application leverages the Movie Database API to fetch movie data and display trending movies.
## Screenshots

![Movie-App](https://github.com/user-attachments/assets/4839e7f3-5e3d-4aa6-98e2-e704a80ec1d5)
##  Table of Contents 

- Table of Contents
- Technologies Used
- Features
- Project Setup
## Tech Stack

- Vite: A fast development build tool and a package manager that provides a smooth and efficient development experience.

- Appwrite: A backend server that manages user authentication, databases, and other functionalities, making it easy to develop secure and scalable applications.

- React: A JavaScript library for building user interfaces, allowing you to create reusable UI components.

- The Movie Database (TMDb) API: An API that provides access to a vast collection of movie data, including details about popular and trending movies.

- Tailwind CSS: A utility-first CSS framework that enables you to build custom designs quickly and efficiently.

- CSS Modules: A CSS file in which all class and animation names are scoped locally by default, allowing you to write modular and reusable styles.
## ✨Features

### 📈 Trending Movies

Display a list of popular and trending movies fetched from The Movie Database (TMDb) API.

#### How It Works:

Fetching Data : On initial load, the application makes a request to the TMDb API to fetch the list of trending movies.

Display : The fetched movie data is displayed with movie posters and titles.

Update: The list of trending movies is periodically updated.

### ⏱ Search Functionality with Debouncing
Description:

Users can search for movies using a debounced input field to minimize API requests.

#### How It Works:

Debouncing: The useDebounce hook is used to delay the API request until the user has stopped typing for 500ms. This reduces the number of API requests and improves performance.

Fetching Data: The application fetches movie data based on the user's search query.

### 🎞 Dynamic Trending Movies
Description:

Trending movies are dynamically fetched from the Appwrite database.

#### How It Works:

Search Impact: When a user searches for a movie, the search count for that movie is updated in the Appwrite database.

Dynamic Update: If a searched movie becomes popular, it appears in the trending section.

Data Source: The application fetches both trending and all movies data from the API and the Appwrite database.

### 📝Additional Notes:

The application ensures that the trending section is always up-to-date with the most popular searched movies.

Combining data from TMDb API and Appwrite provides a rich and dynamic user experience.
## Project Setup

To get started with the project, follow these steps:

1. Clone the repository

```bash
git clone https://github.com/jahangir2002/movie-app.git

```
2. Install dependencies

```bash
cd movie-app
npm install

```
#### Set up environment variables:

Create a new file named `.env.local` in the root of your project and add the following content:

```
VITE_IMDB_API_KEY=

VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=

```

#### Running the Project
```
npm run dev
```
