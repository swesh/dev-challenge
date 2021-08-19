High Level Approach to the solution
====================================

Major challenge in this problem statment is to update the table at regular intervals when data is recieved
from web-socket.

1. Overhead is involved in DOM manipulation, we cannot afford to build the DOM again and again becuase DOM repainting is complex task, so there is a need to minimze the DOM lookups and repainting.
 
    Solution
    ==========
    1. I am building table row html and storing it "key"(html) in data itself which is recived from stomp server.
    prepareTableRowMarup() function in TableDrawer.js is doing this task.

    2. Then I am sorting the data array on lastChangeAskBid field, in sortTableData() function, TableDrawer.js
    3. Follwed by accumulating the entire table HTML in prepareSortedTableMarup().
    4. At last I am making a single DOM lookup and replacing the table html with updated dataSet which is sorted on lastChangeAskBid.

    updateTable(html) is updating the table.


2. To build Sparkline I am appending a new div with correspond id same as name field.
    and drawing sparkline on the each interval. 
    
    createSparkLine() function, TableDrawer.js creates sparkLine.

I have created short functions to follow SRP.



To run the project..

npm i
npm start

To run test cases

npm run test