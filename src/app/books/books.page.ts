import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataGetterService } from '../service/data-getter.service';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  authorName: string;
  books: any[];

  textData: string;

  constructor(private dataGetter: DataGetterService,
    private route: ActivatedRoute,
    private sharedData: SharedDataService) { }

  
  passData(){
    this.sharedData.setTextData(this.textData);
  }
  
  ngOnInit() {
    this.authorName=this.route.snapshot.paramMap.get('authorName');
    this.dataGetter.getBooks(this.authorName).subscribe(
      data=>{
        this.books = data;
      }
    )
  }

}
