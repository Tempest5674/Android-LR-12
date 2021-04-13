import { Component } from '@angular/core';import { NavController } from '@ionic/angular';
import { Author, DataGetterService } from '../service/data-getter.service';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = 'Автори книг'

  authors: Author[];

  showNew = false;
  showEdit = -1;

  userName: string;

  constructor(private dataGetter: DataGetterService, private shareData: SharedDataService) {
    this.dataGetter.getAuthors().subscribe(
      (data)=>{
        this.authors = data;
      }
    );
    this.userName = this.dataGetter.getUser();
  }

  add(){
    this.showNew = true;
  }

  addAuthor(author){
    this.dataGetter.addAuthor(author);
    this.showNew = false;
  }

  delete(index: number){
    this.dataGetter.deleteAuthor(index);
  }

  ionViewWillEnter(){
    if(this.shareData.getTextData()!=''){
      this.title = this.shareData.getTextData();
    }
  }
}
