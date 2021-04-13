import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Author } from 'src/app/service/data-getter.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {

  @Input() author: Author;
  @Input() isNew: boolean;
  @Output() addAuthor = new EventEmitter();
  @Output() cancelAddingAuthor = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit() {
    if(this.isNew){
      this.author = {
        authorName: '',
        dateOfBirth: '',
        numberOfBooks: null
      };
      this.title = "Новий автор";
    }
  }

  addNew(){
    if(this.isNew) {
      this.addAuthor.emit(this.author)
    }
  }

  cancelAdding(){
    if(this.isNew){
      this.cancelAddingAuthor.emit();
    }
  }

}
