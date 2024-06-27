import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent {
  contactform = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}')
    ]),
    names: new FormControl('', [
      Validators.required
    ]),
    Department: new FormControl('')
  });

  submitted: any = null;

  constructor(private router: Router) {}

  submitform() {
    if (this.contactform.valid) {
      this.submitted = this.contactform.value;
      console.log(this.contactform.value);
      this.router.navigate(['/home']);
    } else {
      console.error('Form is invalid');
    }
  }
}
