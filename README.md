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

2. Install all npm modules once you're inside the directory after cloning the repository:

   ```
   npm install
   ```

3. To start the application, use:
   ```
   npm start
   ```

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

- The project doesn't use the MongoDB object id `_id` for editing, deleting, or getting data. Instead, a `book_id` is used as a user-friendly option.
- The `book_id` will be generated at the time of creating a new book. It will consider the last `book_id` number and increment the number for the new book.

## Deployment process was made through render.com

- While creating new setup render asks to connect thru github .
- Add your repo in connect area, after successfull connection provide commands to build .
- In my case it was `npm install` and for start `node app.js`
- It takes areound 10-15 mins for project to get setup in render.com which will provide URL
- Server restart i've set to automatic for last commit.

URL for render.com : https://brewapp.onrender.com/
