## Run the web application

Run `npm run start` on the command line.


## Project Structure

Main file: `/src/App.jsx`

This is a react project set up with `create-react-app`. The backend server must be running for the app to have any functionality.

The server's URI is set up at `src/state/store.js` in the `model` variable as the `serverAddress` property. This URI is the single *source of truth* for all server calls made throughout the whole application.

## File Hierarchy

Each react page / tab / component is split up into its own file in the `src` folder and split-up into the `views`, `components` and `charts` folders.

The `state` folder contains the `store.js` file which contains all the global state for the application. The state management library is a `easy-peasy` which is built on top of `redux`.


## Requirements (Summary)

* Allow users to **select data** to **view insights and reports** on
* **Show sales predictions** based on product category


### Select data

* Select sales data within a custom date range
* Select columns from database tables


### View insights

* Show insights and key figures on the columns selected by users
* Live update insights and key figures based on user's selection of columns


### View reports

* Show reports on the columns selected by users
* Live update reports based on the user's selection of columns
* Allow users to click into the reports to *drill-down* and get more details on the reports and customize some parameters


### Show Predictions

* Allow users to select product categories
* Show a period of past sales and a period of future predictions in a visual format (charts)


## Work done -vs- To be done

### Done
 - [x] Project set up with routing, server connection and global state management capabilities
 - [x] Basic routes and pagination set up for data loading, reporting, insights and predictions
 - [x] Load database tables from the server
 - [x] Select tables to view data from and update table selection live
 - [x] Select columns from the selected table and get reports and insights on certain columns
 - [x] Update column selection live and get instant updates on reports and insights
 - [x] Basic predictions page with product category selection (work-in-progress)
 - [x] Basic prediction chart visualization with both past data and future sales prediction (work-in-progress)


### To be done
*(As far as current requirements)*
 - [ ] Allow user to select date range when selecting data to view (instead of monthly database table selection)
 - [ ] Create logic to get data from multiple monthly database tables and join them according to the selected date range
 - [ ] Add drill-down and customization options on the reporting UI components
 - [ ] Re-design the predictions page
	 - [ ] Show products by bar code instead of category
	 - [ ] Show a separate chart for each selected product
	 - [ ] Show past data and prediction data in the same chart
 - [ ] Add user management screens and forms
