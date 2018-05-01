import { Injectable, Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AppService} from '../app.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private appservice: AppService) { }

  ngOnInit() {
  }
  sendEmail(f: NgForm) {
    console.log(f.value);
    console.log("sendEmail function!!");
    this.appservice.sendEmail(f.value);

  }

}
