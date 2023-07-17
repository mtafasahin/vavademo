import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { BookService, PagedData } from '../services/book-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  booklist$ !: Observable<PagedData<Book>>
  categories$!: Observable<string[]>;
  selectedCategory: string = '';
  page: number = 1;
  constructor(private bookService: BookService)  {}

  ngOnInit(): void {
    this.categories$ = this.bookService.getDistinctCategories();
    this.booklist$ = this.bookService.getBooks(this.selectedCategory);
  }

  loadBooks(page: number = 1) {
    this.page = page;
    this.booklist$ = this.bookService.getBooks(this.selectedCategory,page);
  }


    next() {
      this.page++;
      this.loadBooks(this.page);
    }

    getPage(p:number) {
      this.page = p;
      this.loadBooks(p);
    }

    prev() {
      this.page--;
      this.loadBooks(this.page);
    }

   

    visiblePages(totalPages: number): number[] {
      const visiblePageCount = 10; // You can adjust this number to control how many page numbers are shown
      const halfVisible = Math.floor(visiblePageCount / 2);
      let startPage = Math.max(1, this.page - halfVisible);
      const endPage = Math.min(totalPages, startPage + visiblePageCount - 1);
      if (endPage - startPage + 1 < visiblePageCount) {
        startPage = Math.max(1, endPage - visiblePageCount + 1);
      }
  
      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    }

}
