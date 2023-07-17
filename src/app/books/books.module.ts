import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { Router, RouterModule } from '@angular/router';
import { BooksRoutingModule } from './books-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCardComponent } from './book-card/book-card.component';
import { HomeComponent } from './home/home.component';
import { BookService } from './services/book-service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookCardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    BookService
  ]
})
export class BooksModule { }
