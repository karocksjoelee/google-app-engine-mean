import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly booksURL = '/api/books';

  constructor(
    private http: HttpClient
  ) { }

  getBooks() {
    return this.http.get<Book[]>(this.booksURL);
  }
}
