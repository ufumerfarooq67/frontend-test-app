# Next.js App

Welcome to our User List App

## Overview

This app has two routes. The first route is home route which contains the list of users with pagination, a gender dropdown to filter data and a search input field to search a particular record.

## Specs

1. Next js 14
2. Ant Design UI
3. React Icons
4. Node v18.17.1
5. Google Maps - Replace the key in your env and it should be good to go.

## Getting Started

1. **Clone the Repository:**
   Close the repo and install the deps.

2. **File Structure**
   The main folder is the app folder which contains multiple folders having separete responbility.
   - components folder: This folder will have 2 subfoldes. One for screens which will have all the UI for each screen/page and other named as "UI" to have all re-useable components.
   - custom-hooks: This folder will contain all the custom hook e.g. hook for api call, user authentication etc.
   - context: This folder will contain all the context apis e.g socket context, ringcentral/twilio context etc.
   - store: This folder will contain the implementation of our store e.g Redux, Flux, BloC etc
   - utils: This folder will contain all the utilities including contants, functions interfaces, types and etc.
   - service: This folder will contain all third-party service integration. e.g Google Maps, GPT API, OCR Integration and etc.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production.
- `npm start`: Starts the app in production mode.

## Env

Make sure to create a `.env` file using local_env (Always keep your secrets in your vault)

## Run

To run the project, follow the given instructions:

- Start by pressing `Ctrl + Backtick`. Go to the terminal or You can use cmd or any other terminal
- Change the directory to the app directory
- Run `npm i`. This will install all the dependencies.
- Run `npm run dev` to start the development server. OR Run `npm run build` to build a production-ready-app.
