import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

export interface Author{
  authorName: string;
  dateOfBirth: string;
  numberOfBooks: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
  private authors: Author[] = [
    {
      authorName:"TestAuthorName1",
      dateOfBirth:"01.01.21",
      numberOfBooks: 1
    },
    {
      authorName:"TestAuthorName2",
      dateOfBirth:"01.01.22",
      numberOfBooks: 2
    }
  ]

  private books = [
  {bookName: 'TestBook1', authorName:'TestAuthorName1',
    genre:'horror', pages: 100},
  {bookName: 'TestBook2', authorName:'TestAuthorName2',
    genre:'fantasy', pages: 150},
  {bookName: 'TestBook3', authorName:'TestAuthorName1',
    genre:'comedy', pages: 200},
  {bookName: 'TestBook4', authorName:'TestAuthorName2',
    genre:'action', pages: 250},
  {bookName: 'TestBook5', authorName:'TestAuthorName1',
    genre:'romcom', pages: 300},
  ];

  getBooks(authorName: string): Observable<any[]>{
    return of(this.books.filter( elem=>{
      return elem.authorName === authorName;
    }));
  }

  private userName = '';

  private users = [
    'TestUser', 'TestUser2', 'TestUser3'
  ];

  constructor() { }

  getAuthors():Observable<Author[]>{
    return of(this.authors);
  }

  addAuthor(author: Author){
    this.authors.push(author);
  }

  deleteAuthor(index){
    this.authors.splice(index,1);
  }

  getUser(){
    return this.userName;
  }

  setUser(name: string){
    this.userName = name;
  }

  userExists(name:string):boolean{
    return this.users.indexOf(name)!==-1;
  }
}
