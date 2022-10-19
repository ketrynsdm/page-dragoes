import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DragonsResult } from '../../interface/dragons-result.model';

@Component({
  selector: 'app-registration-dragons',
  templateUrl: './registration-dragons.component.html',
  styleUrls: ['./registration-dragons.component.scss'],
})
export class RegistrationDragonsComponent implements OnInit {
  
  private readonly API = environment.API;

  formDragon = this.formBuilder.group({
    name: [''],
    type: [''],
    createdAt: [new Date().toDateString()],
    histories: [''],
    id: [''],
  });

  public postDataDragons(body: DragonsResult) {
    return this.http.post<DragonsResult>(`${this.API}`, body);
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {}

  add(): void {
    this.postDataDragons(this.formDragon.getRawValue()).subscribe((data) => {
      this.router.navigate(['list-dragons']);
    });
  }
}
