import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myarray : any = [];
  header : any;

  constructor(private dataService: DataService) { }

   getData() {
    this.dataService.getData().subscribe(
      data => {
        this.myarray = data;
        this.header = "The Fetched Data"
        console.log(data)
        return data;
      }
    );
  }
}
