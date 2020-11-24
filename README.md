# Rest API Project

### 1. Create an express API for a note taking app. Use [notes.js](./notes.js) as your database.

The API should allow the user to do the following:

 * Create a new note
 * Update a notes title
 * Update a notes message
 * Delete a note
 * Get a note by id
 * Get all notes

Here is an example of how to use the note taking database.
```js
const {Store, Note} = require('./notes.js')
const note = new Note("grocery list", "eggs,bananas")
Store.writeNote(note)
console.log(Store.getNote(note.id).message)
```
