import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') subscForm: NgForm;
  defaultSubscription: string = "advanced";
  submitted: boolean = false;
  subscData = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit() {
    this.subscData.email = this.subscForm.value.email;
    this.subscData.subscription = this.subscForm.value.subscription;
    this.subscData.password = this.subscForm.value.password;

    this.submitted = true;
    this.subscForm.reset();
  }
}
