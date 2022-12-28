import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const user = this.myForm.value.user;
    const password = this.myForm.value.password;
    if (user == 'admin' && password == '123456') {
      this.loadingLogin();
    } else {
      this.error();
    }
  }

  error() {
    this._snackBar.open('Contraseña o usuario incorrecto', 'Error', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  loadingLogin() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 1500);
  }
}
