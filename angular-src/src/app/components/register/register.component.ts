import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fName: String;
  lName: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService) { }

  ngOnInit() {
  }

  onSubmit() {
    const user = {
      fname: this.fName,
      lname: this.lName,
      email: this.email,
      username: this.username,
      password: this.password
    };

    // Required Feilds
    if (!this.validateService.validateRegister(user)) {
      console.log('Please fill out everything!');
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      console.log('Please enter a valid Email');
      return false;
    }
  }
}
