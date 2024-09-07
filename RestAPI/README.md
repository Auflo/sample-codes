## Library Book Subscription API Documentation

### Endpoints

**POST /api/books** - Create a new book subscription
Request body should include book details.
Response will include the created book subscription.

**GET /api/books** - Retrieve all book subscriptions
Response will include an array of all book subscriptions.

**GET /api/books/:id** - Retrieve a single book subscription by ID
Response will include the book subscription details if found.

**PUT /api/books/:id** - Update a book subscription by ID
Request body should include updated book details.
Response will include the updated book subscription if the ID is found.

**DELETE /api/books/:id** - Delete a book subscription by ID
Response will confirm deletion or inform if the ID was not found.
