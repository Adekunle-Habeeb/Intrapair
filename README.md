<!-- 

Hi Intrapair! Thank you for considering me

Task 1

This task is aimed to test my knowledge of Binary Indexed Tree (BIT) in Data Structures and Algorithms. While I have little to no knowledge of DSA, I have managed to find a solution to the task with the help of resources online.

The problem asks us to find, for each element in the original input array, how many smaller elements appear to its right in the same array, and then store these counts in a new array


To put it simply, for each element arr[i] in the new array, we want to count the number of elements in the original input array that are smaller than arr[i] and appear to the right of it (at indices greater than i).


Here's an example to illustrate this:

Given the original input array: [3, 4, 9, 6, 1]

For the new array:

The first element is 3, and the smaller elements to the right of 3 are [1], so the count is 1.
The second element is 4, and the smaller elements to the right of 4 are [1], so the count is 1.
The third element is 9, and the smaller elements to the right of 9 are [6, 1], so the count is 2.
The fourth element is 6, and the smaller elements to the right of 6 are [1], so the count is 1.
The fifth element is 1, and there are no smaller elements to the right of 1, so the count is 0.
Therefore, the new array will be [1, 1, 2, 1, 0].




From Line 1 - line 4 in the code 

The code uses a Binary Indexed Tree (BIT) to count the smaller elements on the right side of each element in the nums array. The counts are stored in the result array. The BIT efficiently keeps track of these counts while iterating through the array.


Line 6 - line 11

The update() function is used to update the Binary Indexed Tree (BIT) with a new value. It increments the value in the BIT at the given index and then moves to the next relevant BIT node. This process continues until all relevant BIT nodes are updated for the given index, ensuring that the BIT is correctly updated for the new value.


Line 13 - 20
The query() function counts the number of smaller elements in the Binary Indexed Tree (BIT) up to a given index. It does this by summing the values in the BIT nodes while moving backward to previous nodes until reaching the root. The final count represents the number of smaller elements up to the given index, which is then returned.



Line 22 - line 29
The code calculates the count of smaller elements to the right of each element in the nums array. It uses a Binary Indexed Tree (BIT) to efficiently keep track of the counts. The result is returned in the result array, providing the counts of smaller elements for each element in the nums array.


The rest of the code starts by defining an array called inputArray with the values [3, 4, 9, 6, 1]. Then, the countSmaller() function is called with this array, and the result is stored in the resultArray variable. Finally, the content of resultArray is printed to the console


HOW TO RUN THE CODE

From the folder, Open the terminal and navigate to apptitude1 then type 'node main.js' to the console





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

<!-- 

Hi intrapair!

Task 2

This task is aimed to test my knowledge of Hash Table in Data Structures and algorithms and as I have rightly stated, I have little to no knowledge of DSA but I have managed to find solution to the task with the help of resources online


The task is to write a function that takes a string as an argument and returns the first recurring character in the string, or null if there is no recurring character.

For example:

If the input string is "acbbac", the first recurring character is "b," so the function should return "b."
If the input string is "abcdef", there are no recurring characters, so the function should return null


The 'findFirstRecurringCharacter' function takes a string 'str' as input and finds the first recurring character in the string. It uses an object (charMap) as a hash table to keep track of characters encountered so far. The function iterates through the string and returns the first recurring character it finds, or null if there are no recurring characters.


HOW TO RUN THE CODE

From the folder, Open the terminal and navigate to apptitude2 then type 'node app.js' to the console


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



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

































