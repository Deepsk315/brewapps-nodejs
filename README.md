# brewapps-nodejs

Tech Stack :

Javascript
NodeJs
MongoDB

How to get Started :

1. Clone the project by using this
   _git clone https://github.com/Deepsk315/brewapps-nodejs.git_

2. Install PM2 Globally by :
   _npm install -g pm2_

3. Do install all npm modules once you're inside the directory after cloning the repository :
   _npm install_

4. To start the application use :
   _npm start_
   It will start the pm2 process , use _pm2 logs 0_ to see console errors

If you're able to see server started logs with mongoDB connection established , things are working fine.

API List :

1. To add new Book :
   **/api/add-book**
   In request body it accepts 3 parameters such as Title,Author & Summary , all 3 are required

2. To update a book :
   **/api/edit-book/:id**
   :id needs to be passed a query parameters , and in request body it can contain Title,Author or Summary , atleast one of 3 is required to update the book.

3. Get list of all Books
   **/api/list**
   Fetched the list of all books registered so far including total count.

4. Get Single Book Content
   **/api/book/:id**
   :id needs to be passed a query parameters to get a single book content.

5. Delete a existing book.
   **/api/delete-book/:id**
   :id is required for deleting a book from database.

Note : I've not used mongo object id "\_id" to edit,delete,get data, I have added a book_id which can be user friendly option. the book_id will be generated at the time of creating a new book .It will see the last book_id number and increment the number for the new book.
