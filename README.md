# 🧘 Yoga and Meditation
Welcome to the README file for the Yoga and Meditation web application. This project aims to create a holistic and beautiful MERN stack website as an internship assignment of Flexmoney providing comprehensive information and services related to yoga, meditation, and wellness retreats. The website is developed using a blend of HTML, CSS, JavaScript, Bootstrap, and React, with Vite serving as the streamlined development platform. I have also used Node as backend server and MongoDB as database to store all the details of user permanently. It is secured with Firebase authentication and authorization and the admission form is properly validated.

## Hosted Web Link
```
https://657eaeee66e83a44a22b5e43--effulgent-cheesecake-d1dc5f.netlify.app/
```

## Youtube Demo Link
```
https://youtu.be/ZqC-AchsOD4
```

## 📚 Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [My Approach](#my-approach)
4. [Technologies Used](#technologies-used)
5. [Getting Started](#getting-started)

## 🌟 Project Overview

This application is dedicated to fostering physical and mental well-being. It offers an array of resources, from comprehensive guides on diverse yoga and meditation practices to schedules for classes and workshops, all conducted by professionals in the field. With a commitment to enhancing inner harmony, this web application provides an all-encompassing experience.

### Key Features

- Seamlessly designed single-page layout for effortless navigation and accessibility.
- Responsive interface ensuring an optimal user experience across various devices.
- In-depth insights into distinct yoga styles and meditation techniques.
- Integration of a streamlined booking system for yoga, meditation, and counseling sessions.
- A thoughtfully curated blog section featuring articles on holistic well-being and self-care.
- Interactive contact form for inquiries and feedback.
- Secure user authentication and money transaction.

## 👨🏻‍💻 My Approach
My approach for this project was:

1. Create frontend of the website using html, css and reactjs.
   
2. Make the website responsive so that it does not get distorted in any device.
   
3. Create a user authentication and authorization to secure data.
   
4. Create Admission form to accept user's data and store them in database.
   
5. Create the backend of the form using nodejs, expressjs and mongoDB.
    
6. Do the basic validations as stated in the assignment.
    
7. Show a "Payment Successful" message when the user is registered.


The basic validations which I did in the project are as follows:

1. Every input field should be filled by the user.
   
2. User name must not be empty.
   
3. Age field must be between 18 and 65 years.
   
4. Gender should must be specified by the user.
   
5. Contact number must consist of 10 digits.
    
6. Fees should be exactly equal to 500.
    
7. User must select a slot in order to make the payment.

## ⚡ Technologies Used

The following technologies is utilized in this project:

- HTML (Hypertext Markup Language) for structuring the content of the website.
- CSS (Cascading Style Sheets) for styling and enhancing the visual appearance.
- JavaScript for implementing interactive features and dynamic functionality.
- Bootstrap for responsive design and layout.
- React for building interactive components and managing data.
- Vite (a React development environment) for efficient development workflow.
- SASS for advanced styling and customization.
- Node as JavaScript runtime environment and to perform server side operations.
- MongoDB as database management system to store and retrieve information.

## 🚀 Getting Started

### Clone the repository
```
git clone https://github.com/Brothin/Yoga-and-Meditation.git
```
```
cd Yoga-and-Meditation
```

### You need
• Node

• MongoDB or Mongo Atlas

• NPM

### Create your MongoDB account and database/cluster
• Create your own MongoDB account by visiting the MongoDB website and signing up for a new account.

• Create a new database or cluster by following the instructions provided in the MongoDB documentation. Remember to note down the "Connect to your application URI" for the database, as you will need it later. Also, make sure to change with your own password.

• Add your current IP address to the MongoDB database's IP whitelist to allow connections (this is needed whenever your ip changes).

### Create .env file
Create a .env file in the frontend folder to store your credentials. This file will store environment variables for the frontend to run. I have already added example.env for your reference.
```
VITE_API_KEY=""
VITE_AUTH_DOMAIN=""
VITE_PROJECT_ID=""
VITE_STORAGE_BUCKET=""
VITE_MESSAGING_SENDER_ID= ""
VITE_APP_ID=""
```
Create a .env file in the backend folder to store your credentials. This file will store environment variables for the backend to run. I have already added example.env for your reference.
```
ATLAS_URI=""
PORT=
```

### Installation
To install and run this project - 
Install dependencies using npm in frontend folder and run client side of application.
```
cd frontend
npm install
npm run dev
```
Install dependencies using npm in backend folder and run server side of application.
```
cd backend
npm install
npm start
```
