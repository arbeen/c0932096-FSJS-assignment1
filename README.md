# How to Use the User Management App

## 1. User List
- View all users with options to **View**, **Edit**, or **Delete**.

## 2. Viewing User Details
- Click **Details** to see user info. Use **Back to User List** to return.

## 3. Adding a New User
- Click **Add New User**, fill out the form with required details, and click **Submit**.

## 4. Editing User Information
- Click **Edit** to update a user’s details. Click **Update** to save or **Delete** to remove the user.

## 5. Deleting a User
- Click **Delete** next to a user to remove them permanently.

## 6. Navigation
- Use **Back to User List** to return to the list or navigate through **Edit** and **Details**.


Installation and Running Locally
--------------------------------

### 1\. Install Dependencies

Navigate to the project folder and install the required dependencies using npm:

`cd c0932096`

`npm install`

### 3\. Setup MongoDB

Ensure you have **MongoDB** installed and running locally, or use a **MongoDB Atlas** cluster.


### 4\. Configure Environment Variables

Create a `.env` file in the root directory with your MongoDB connection string:

`MONGODB_URI=mongodb://localhost:27017/user_management`

### 5\. Run the Application

Start the server:

`npm start`

The app should now be running at http://localhost:3000.

### 6\. Access the App

Open a web browser and go to `http://localhost:3000` to view and manage users.

### 7\. Stopping the App

To stop the app, press **Ctrl + C** in the terminal.