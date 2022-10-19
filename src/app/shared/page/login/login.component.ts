import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formDragons = this.formBuilder.group({
    login: [null, Validators.required],
    password: [null, Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private router: Router,) { }

  ngOnInit(): void {
  }

  login():void {
    this.router.navigate(['list-dragons']);
  }

}
