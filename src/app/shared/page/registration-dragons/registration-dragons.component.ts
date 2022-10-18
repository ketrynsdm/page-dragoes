import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DragonsResult } from '../../interface/dragons-result.model';
import { ListDragonsComponent } from '../list-dragons/list-dragons.component';

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

  public post(body: DragonsResult) {
    return this.http.post<DragonsResult>(`${this.API}`, body);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {}

  adicionar(): void {
    this.post(this.formDragon.getRawValue()).subscribe((data) => {
      this.router.navigate(['list-dragons']);
    });
  }
}
