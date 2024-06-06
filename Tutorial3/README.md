# Tutorial 3

- _Date Created_: 06 Jun 2024
- _Last Modification Date_: 06 Jun 2024
- _Deployed Application URL_: <https://christin-saji-tutorial-3.netlify.app/>
- _Git URL_: <https://git.cs.dal.ca/saji/csci-5709-tutorials>

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
     git clone https://git.cs.dal.ca/saji/csci-5709-tutorials.git
     ```

3. **Navigate to the Project Directory**

   - Change the directory to the project folder:
     ```bash
     cd csci-5709-tutorials/Tutorial3/profile-app
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

### RegistrationForm.jsx

_Lines 15 - 39_

```
  const validate = () => {
    const errors = {};
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])/;

    if (!formData.firstName.match(/^[A-Za-z]+$/)) {
      errors.firstName = "First Name should contain only letters";
    }
    if (!formData.lastName.match(/^[A-Za-z]+$/)) {
      errors.lastName = "Last Name should contain only letters";
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "Invalid email format";
    }
    if (
      formData.password.length < 8 ||
      !formData.password.match(passwordRegex)
    ) {
      errors.password =
        "Password should be at least 8 characters long and contain at least one letter, one number, and one special character";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

```

The code above was created by adapting the code in [How to perform form validation in React?](https://www.geeksforgeeks.org/how-to-perform-form-validation-in-react/) as shown below:

```
const validateForm = (data) => {
        const errors = {};

        if (!data.username.trim()) {
            errors.username = 'Username is required';
        }

        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }

        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = `Password must be at
            least 8 characters long`;
        }

        if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        return errors;
    };

```

- <!---How---> The code in [How to perform form validation in React?](https://www.geeksforgeeks.org/how-to-perform-form-validation-in-react/) was implemented by adding specific validation rules for first name, last name, email, password, and confirm password.
- <!---Why---> [How to perform form validation in React?](https://www.geeksforgeeks.org/how-to-perform-form-validation-in-react/)'s Code was used because it provided a robust example of form validation in JavaScript.
- <!---How---> [How to perform form validation in React?](https://www.geeksforgeeks.org/how-to-perform-form-validation-in-react/)'s Code was modified by adding custom validation rules and error messages.

## Acknowledgments

- Hat tip to [TailwindCSS](https://tailwindcss.com/docs/guides/vite) documentation for CSS framework usage.
