# issue faces

- need to cast params.id to a number when matching 
books.find((b) => b.bookId === parseInt(params.id));

- Ensure Correct Image Path
Also, note that the image path in your books.json is relative and may not work correctly when the file is fetched from the public folder. Since you're fetching books.json from public, you should either move the images to the public folder or adjust the paths accordingly.
You can either:

Move the images to /public/assets/books/silent-patient.jpeg.

