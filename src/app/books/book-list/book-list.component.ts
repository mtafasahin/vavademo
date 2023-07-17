import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';
import { BOOKS } from '../services/test-data';
import { PagedData } from '../services/book-service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
    @Input()
    books!: Book[]
}
