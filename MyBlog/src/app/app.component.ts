import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Izdebski';
  BarPageName = "Izdebski.it";
  currentPage: number = 1;
  englishLanguage = true;

  aboutMeButton = 'About Me';
  practicalExperienceButton = 'Practical Experience';
  whatICanButton = 'Technologies I Know';
  contactMeButton = 'Contact Me';

  changePageNumber(numberToChange){
    if(this.englishLanguage){this.currentPage = numberToChange;}
    else{this.currentPage = numberToChange + 4};
  }

  changeLanguage(isEnglish:boolean){
    this.englishLanguage = isEnglish;
  }

  changeToEnglish(){
    this.aboutMeButton = "About Me";
    this.practicalExperienceButton = 'Practical Experience';
    this.whatICanButton = 'Technologies I Know';
    this.contactMeButton = 'Contact Me';

    if(!this.englishLanguage){this.currentPage = this.currentPage - 4;}

    this.changeLanguage(true);
  }

  changeToPolish(){
    this.aboutMeButton = "O Mnie";
    this.practicalExperienceButton = 'Doświadczenie Praktyczne';
    this.whatICanButton = 'Technologie Które Znam';
    this.contactMeButton = 'Kontakt';

    if(this.englishLanguage){this.currentPage = this.currentPage + 4;}

    this.changeLanguage(false);
  }

  getCurrentPageForButton(){
    if(this.englishLanguage){
      return this.currentPage;
    }
    else{
      return this.currentPage - 4;
    }
  }
}
