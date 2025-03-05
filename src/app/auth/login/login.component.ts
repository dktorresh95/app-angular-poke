import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  submit() {

  }
}
