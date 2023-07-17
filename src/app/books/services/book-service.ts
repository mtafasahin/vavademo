import { Injectable, booleanAttribute } from "@angular/core";
import { Observable, findIndex, map, of } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Book } from "../model/book";
import { BOOKS } from "./test-data";

export interface PagedData<T> {
    total: number,
    totalPageCount: number,
    data: T[]
}

@Injectable({
    providedIn: 'root'
  })
  export class BookService {
    
    // should be read from env.
    private apiUrl = 'https://vavaapi.azurewebsites.net/api/books';

    constructor(private http: HttpClient) { }

    getDistinctCategories(): Observable<string[]> {
      
        return this.http.get<string[]>(`${this.apiUrl}/categories`);
        // To simulate http calls 
        // return of( [...new Set(BOOKS.map(book => book.category))] );
      }

      getBooks(selectedCategory: string, pageNumber: number = 1 , pageSize: number = 12): Observable<PagedData<Book>> {
        let url = this.apiUrl;
        url += `?page=${pageNumber}&pagesize=${pageSize}`;
        if (selectedCategory && selectedCategory !== '') {
          url += `&category=${selectedCategory}`;
        }
        return this.http.get<PagedData<Book>>(url);

        //simulate http request
        // const books = BOOKS.filter(book => selectedCategory ? book.category == selectedCategory : true);
        // const total = books.length;
        // const totalPageCount = Math.ceil(total / pageSize);
        // return of({
        //     total: total,
        //     totalPageCount: totalPageCount,
        //     data: books.slice((pageNumber-1)*pageSize, pageNumber*pageSize)
        // });
      }

      getBook(id: number): Observable<Book | undefined> {
       
        
        return this.http.get<Book>(`${this.apiUrl}/${id}`);
        //simulate http request
        // return of(BOOKS.find(book => book.id == id));
        
      }

  }