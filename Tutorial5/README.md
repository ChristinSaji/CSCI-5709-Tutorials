# Tutorial 5

- _Date Created_: 06 Jun 2024
- _Last Modification Date_: 07 Jun 2024
- _Deployed Application URL_: <https://christin-saji-tutorial-5.onrender.com> (might take some time to load - render free tier)
- _Tutorial 5 Git URL_: <https://git.cs.dal.ca/saji/csci-5709-tutorials/-/tree/master/Tutorial5?ref_type=heads>
- _Tutorial Repository Git URL_: <https://git.cs.dal.ca/saji/csci-5709-tutorials>

## Authors

- [Christin Saji](christin.saji@dal.ca) - _(Owner)_

## Getting Started

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this tutorial and running on your local machine, you will first need to install the following software / libraries / plug-ins

- Node.js
- npm (Node Package Manager)

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

A step-by-step series of instructions to get a development environment running:

1. **Install Node.js and npm**

   - Download and install Node.js from [Node.js](https://nodejs.org/).
   - npm is included with Node.js.

2. **Clone the Repository**

   - Open a terminal/command prompt.
   - Run the following command to clone the repository:
     ```bash
     git clone https://git.cs.dal.ca/saji/csci-5709-tutorials
     ```

3. **Navigate to the Project Directory**

   - Change the directory to the project folder:
     ```bash
     cd csci-5709-tutorials/Tutorial5
     ```

4. **Install Dependencies**

   - Install the necessary dependencies using npm:
     ```bash
     npm install
     ```

5. **Start the Development Server**

   - Start the server:
     ```bash
     node server.js
     ```
   - The app should open in your default web browser at `http://localhost:3000`.

## Deployment

To deploy the Node.js app to Render, follow these steps:

1. **Create a GitHub Repository**

   - Ensure your project is in a GitHub repository. If it’s not already in one, you can create a new repository and push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/your-username/your-repo-name.git
     git push -u origin main
     ```

2. **Sign Up / Log In to Render**

   - Go to [Render](https://render.com/) and sign up or log in if you already have an account.

3. **Create a New Web Service**

   - Click on the "New" button and select "Web Service".
   - Connect your GitHub account to Render.
   - Select the repository you want to deploy.

4. **Configure Your Web Service**

   - **Name**: Give your service a name.
   - **Branch**: Select the branch you want to deploy (typically `main` or `master`).
   - **Build Command**: Set to `npm install`.
   - **Start Command**: Set to `node server.js`.

5. **Deploy**

   - Click on "Create Web Service" to start the deployment process. Render will automatically build and deploy your application.

## Built With

- [Express](https://expressjs.com/) - The web framework used
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [Render](https://render.com/) - For deployment
- [npm](https://www.npmjs.com/) - Dependency Management
