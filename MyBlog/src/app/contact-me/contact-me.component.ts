import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email = 'krystian.izdebski1999@gmail.com';
  phoneNumber = '+48 736 027 582';
  linkedInTitle = 'Krystian Izdebski';
  linkedInLink = 'https://www.linkedin.com/in/krystian-izdebski/';
}
