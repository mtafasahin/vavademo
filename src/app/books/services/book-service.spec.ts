import { BookService } from "./book-service";
import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { BOOKS } from "./test-data";
describe('BookService', () => {
    
    let bookService: BookService,
        httpTestingController: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                BookService
            ]
        });

        httpTestingController = TestBed.inject(HttpTestingController)
        bookService = TestBed.inject(BookService);

    })

    it('should retrieve books without filters and default paging values (1,12)', () => {
        bookService.getBooks("")
            .subscribe(books => {
                expect(books).toBeTruthy();
                expect(books.data.length).toBe(12);
                expect(books.total).toBe(30);
            })

        const req = httpTestingController.expectOne('https://vavaapi.azurewebsites.net/api/books?page=1&pagesize=12');
        expect(req.request.method).toEqual("GET");
        const books = BOOKS;
        req.flush({
            "total": 30,
            "totalPageCount": 3,
            "data": books.slice(0,12)
        });
    })

    it('should retrieve no data', () => {
        bookService.getBooks("")
            .subscribe(books => {
                expect(books).toBeTruthy();
                expect(books.data.length).toBe(0);
                expect(books.total).toBe(0);
            })

        const req = httpTestingController.expectOne('https://vavaapi.azurewebsites.net/api/books?page=1&pagesize=12');
        expect(req.request.method).toEqual("GET");
        const books = BOOKS;
        req.flush({
            "total": 0,
            "totalPageCount": 0,
            "data": []
        });
    })

    it('should retrieve categories', () => {
        bookService.getDistinctCategories()
            .subscribe(cats => {
                console.log(cats);
                expect(cats).toBeTruthy();
                expect(cats.length).toBe(2);
            })

        const req = httpTestingController.expectOne('https://vavaapi.azurewebsites.net/api/books/categories');
        expect(req.request.method).toEqual("GET");
        const books = BOOKS;
        req.flush(["Category1","Category2"]);
    })

    it('should retrieve categories', () => {
        bookService.getBook(1)
            .subscribe(book => {
                console.log(book);
                expect(book).toBeTruthy();
               
            })

        const req = httpTestingController.expectOne('https://vavaapi.azurewebsites.net/api/books/1');
        expect(req.request.method).toEqual("GET");
        req.flush({
            "id": 1,
            "title": "Handcrafted Soft Towels",
            "description": "placeat esse esse rerum sit nostrum",
            "coverImageUrl": "https://loremflickr.com/640/480?lock=2553453217841152",
            "author": "Nora Streich-Jast",
            "category": "Science"
          });
    })

})