import { Component } from '@angular/core';
import { Book } from './shared/interfaces/book.interface';
import { BookService } from './shared/services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-with-node';
  books: Book[];

  constructor(
    private bookService: BookService
  ) {}

  onGetBooks() {
    this.bookService.getBooks().subscribe(
      (result) => {
        this.books = result;
      }
    );
  }
}
