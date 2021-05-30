import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyBlog';
  BarPageName = "Izdebski.it"

  currentPage: number = 1;

   buttonState:{
    first: 'false',
    second: false,
    third: false,
    fourth: false;
  }

  changePageNumber(numberToChange){
    this.currentPage = numberToChange;
  }
}
