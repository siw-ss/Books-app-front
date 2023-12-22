import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent implements OnInit {
  books!: any;

  constructor(private bookService: BookService, private http:HttpClient){}
  ngOnInit(): void {
    //this.getBooks();
    let response = this.http.get("http://localhost:8080/api/books");
    response.subscribe((data) => this.books = data);
  }
  /*getBooks():void{
    this.bookService.getAllBooks().subscribe(data =>{
      this.books = data;
    })
  }*/
}
