<!--
Hi Intrapair!

This task is aimed at testing my ability to design and implement a RESTful API using backend technologies. It assesses my skills in API design and development, data validation, and working with the "moment" module in Node.js for date and time manipulation.


The task requires creating a RESTful API for a laundry company's mobile app. Users can select their desired pickup day (Monday - Saturday) and how often they want the service (4 times, 2 times, or once a month). 


From Line 1 - line 8
The code sets up an Express web server and includes middleware for handling JSON data, while also loading the necessary external libraries for environment variables and date parsing.
 
From Line 10 - 24

This code sets up a server route to handle POST requests at "/pickup-dates". When a client sends a POST request with data including "pickup_day" and "recurrence", the server calculates a list of pickup dates based on the provided day and the number of weeks specified.

The server generates the pickup dates starting from the current date and formats them in two ways: one in ISO 8601 format (e.g., "2023-07-30") and the other in a human-readable format (e.g., "30 July 2023").

Finally, the server sends the list of pickup dates back to the client in JSON format, making it easy for applications to schedule and display recurring pickups.
 

The rest of the code starts an Express server on a specified port which is port:3000 in this case and logs a message when the server is running.



HOW TO RUN THE CODE

From the folder, Open the terminal and navigate to apptitude3 then type 'npm install' to install the dependencies. afterwards, type 'node app.js' to the console


API POSTMAN LINK
http://localhost:3000/pickup-dates


  -->

