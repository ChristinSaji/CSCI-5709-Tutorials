# Tutorial 2

- _Date Created_: 27 May 2024
- _Last Modification Date_: 27 May 2024
- _Deployed Application URL_: <https://christin-saji-tutorial-2.netlify.app/>
- _Tutorial 2 GitLab URL_: <https://git.cs.dal.ca/saji/csci-5709-tutorials/-/tree/master/Tutorial2?ref_type=heads>
- _Tutorials Repository GitLab URL_: <https://git.cs.dal.ca/saji/csci-5709-tutorials>
- _Assignments Repository GitLab URL_: <https://git.cs.dal.ca/saji/csci-5709-assignments>

## Authors

- [Christin Saji](christin.saji@dal.ca) - _(Owner)_

## Getting Started

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this tutorial up and running on your local machine, you will first need to install the following software / libraries / plug-ins:

- Node.js
- npm (Node Package Manager)

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins.

### Installing

A step-by-step series of instructions to get a development environment running:

1. **Install Node.js and npm**

   - Download and install Node.js from [Node.js](https://nodejs.org/).
   - npm is included with Node.js.

2. **Create a React App**

   - Open a terminal/command prompt.
   - Navigate to the `Tutorial2` directory.
   - Run the following command to create a React app called `dummy-app`:
     ```bash
     npx create-react-app dummy-app
     ```

3. **Navigate to the React App Directory**

   - Change the directory to `dummy-app`:
     ```bash
     cd dummy-app
     ```

4. **Install Dependencies**

   - Install the necessary dependencies using npm:
     ```bash
     npm install
     ```

5. **Start the Development Server**
   - Start the React development server:
     ```bash
     npm start
     ```
   - The app should open in your default web browser at `http://localhost:3000`.

## Deployment

To deploy the React app to Netlify, follow these steps:

1. **Build the React App**

   - Run the build command:
     ```bash
     npm run build
     ```

2. **Deploy to Netlify**
   - Login to your Netlify account.
   - Drag and drop the `build` folder to the Netlify dashboard.
   - Netlify will provide a URL for your deployed app.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Netlify](https://www.netlify.com/) - For deployment
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) - Dependency Management
