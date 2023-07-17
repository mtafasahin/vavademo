import { Component, HostBinding, Input } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

  // @HostBinding('class') get Class() {
  //   return "col-12 col-md-6 col-lg-3"
  // }

  @Input() 
  book!: Book

}
