# brewapps-nodejs

## Tech Stack

- JavaScript
- Node.js
- MongoDB

## Getting Started

1. Clone the project by using:

   ```
   git clone https://github.com/Deepsk315/brewapps-nodejs.git
   ```

2. Install PM2 Globally by:

   ```
   npm install -g pm2
   ```

3. Install all npm modules once you're inside the directory after cloning the repository:

   ```
   npm install
   ```

4. To start the application, use:
   ```
   npm start
   ```
   It will start the PM2 process. Use `pm2 logs 0` to see console errors. If you're able to see "server started" logs with the MongoDB connection established, things are working fine.
   `pm2 stop 0` to stop the server.
   `pm2 delete 0` to terminate the server

## API List

1. **Add New Book**

   Endpoint: `/api/add-book`

   Description: In the request body, it accepts 3 parameters: Title, Author, and Summary. All 3 are required.

2. **Update a Book**

   Endpoint: `/api/edit-book/:id`

   Description: `:id` needs to be passed as a query parameter. The request body can contain Title, Author, or Summary. At least one of the 3 is required to update the book.

3. **Get List of All Books**

   Endpoint: `/api/list`

   Description: Fetches the list of all books registered so far, including the total count.

4. **Get Single Book Content**

   Endpoint: `/api/book/:id`

   Description: `:id` needs to be passed as a query parameter to get a single book's content.

5. **Delete an Existing Book**

   Endpoint: `/api/delete-book/:id`

   Description: `:id` is required for deleting a book from the database.

## Note

- The system doesn't use the MongoDB object id `_id` for editing, deleting, or getting data. Instead, a `book_id` is used as a user-friendly option.
- The `book_id` will be generated at the time of creating a new book. It will consider the last `book_id` number and increment the number for the new book.
