import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vava-cars-interview';

 

// // Generate a random book object
// function generateBook(id) {
//   const title = faker.random.words(3);
//   const description = faker.lorem.paragraph();
//   const coverImageUrl = faker.image.imageUrl();
//   const author = `${faker.name.firstName()} ${faker.name.lastName()}`;
//   const category = faker.random.arrayElement(['Fiction', 'Non-Fiction', 'Science', 'Technology', 'History']);
  
//   return {
//     id: id.toString(),
//     title,
//     description,
//     coverImageUrl,
//     author,
//     category
//   };
// }

// // Generate an array of 1000 books
// const books = [];
// for (let i = 1; i <= 1000; i++) {
//   const book = generateBook(i);
//   books.push(book);
// }

// // Output the books as JSON
// const jsonBooks = JSON.stringify(books, null, 2);
// console.log(jsonBooks);


}
