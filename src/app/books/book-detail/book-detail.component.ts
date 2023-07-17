import { Component } from '@angular/core';
import { Book } from '../model/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {
  book!: Book | undefined

  constructor(private router: Router, private route: ActivatedRoute, private bookService: BookService) {
    this.route.params.subscribe(params => {
      if(params['bookid']) {
        this.loadBook(+params['bookid'])
      }
    })
  }

  loadBook(bookId: number) {
    this.bookService.getBook(bookId).subscribe(b => this.book = b)
  }

}
