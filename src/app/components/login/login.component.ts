import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor() {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password: new FormControl(null, [Validators.required,Validators.minLength(4)]),
    })
  }


  onSubmit() {
    console.log(this.loginForm.value);

  }
}




