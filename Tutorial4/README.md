# Tutorial 4

- _Date Created_: 18 Jun 2024
- _Last Modification Date_: 18 Jun 2024
- _Deployed Application URL_: <https://christin-saji-tutorial-4.netlify.app/>
- _Tutorial 4 Git URL_: <https://git.cs.dal.ca/saji/csci-5709-tutorials/-/tree/master/Tutorial4/profile-app?ref_type=heads>
- _Tutorial Repository Git URL_: <https://git.cs.dal.ca/saji/csci-5709-tutorials>

## Authors

- [Christin Saji](christin.saji@dal.ca) - _(Owner)_

## Getting Started

To have a local copy of this tutorial up and running on your local machine, you will first need to install the following software / libraries / plug-ins.

### Prerequisites

- Node.js
- npm (Node Package Manager)

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
     cd csci-5709-tutorials/Tutorial4/profile-app
     ```

4. **Install Dependencies**

   - Install the necessary dependencies using npm:
     ```bash
     npm install
     ```

5. **Start the Development Server**

   - Start the Vite development server:
     ```bash
     npm run dev
     ```
   - The app should open in your default web browser at `http://localhost:5173`.

## Deployment

To deploy the React app to Netlify, follow these steps:

1. **Build the React App**

   - Run the build command:
     ```bash
     npm run build
     ```

2. **Deploy to Netlify**

   - Login to your Netlify account.
   - Drag and drop the `dist` folder (created after running the build command) to the Netlify dashboard.
   - Netlify will provide a URL for your deployed app.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - For development and build
- [Netlify](https://www.netlify.com/) - For deployment
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) - Dependency Management
- [TailwindCSS](https://tailwindcss.com/) - CSS framework for styling

## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

### ProfileListing.jsx

_Lines 23 - 25_

```
const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

```

The code above was created by adapting the code in [Best Practices for Using the filter() Method in React.js](https://dev.to/sidramaqbool/best-practices-for-using-the-filter-method-in-reactjs-3dog) as shown below:

```
const filteredUsers = useMemo(() => {
    return users.filter(user => user.name.toLowerCase().includes(filterValue.toLowerCase()));
  }, [users, filterValue]);

```

- <!---How---> The code in [Best Practices for Using the filter() Method in React.js](https://dev.to/sidramaqbool/best-practices-for-using-the-filter-method-in-reactjs-3dog) was implemented by using the filter method to filter user objects based on a search term.
- <!---Why---> [Best Practices for Using the filter() Method in React.js](https://dev.to/sidramaqbool/best-practices-for-using-the-filter-method-in-reactjs-3dog)'s Code was used because it provided a robust example of filtering an array based on a condition.
- <!---How---> [Best Practices for Using the filter() Method in React.js](https://dev.to/sidramaqbool/best-practices-for-using-the-filter-method-in-reactjs-3dog)'s Code was modified by using it to filter users based on their name and a search term, converting both to lowercase to make the search case-insensitive.

## Acknowledgments

- Hat tip to [TailwindCSS](https://tailwindcss.com/docs/guides/vite) documentation for CSS framework usage.
