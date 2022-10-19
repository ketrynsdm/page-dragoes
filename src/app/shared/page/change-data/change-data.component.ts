import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DragonsResult } from '../../interface/dragons-result.model';

@Component({
  selector: 'app-change-data',
  templateUrl: './change-data.component.html',
  styleUrls: ['./change-data.component.scss'],
})
export class ChangeDataComponent implements OnInit {
  @Output() public changeData = new EventEmitter<string>();

  private readonly API = environment.API;

  dragons = {
    createdAt: '',
    name: '',
    type: '',
    histories: '',
    id: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  formDragon = this.formBuilder.group({
    name: [''],
    type: [''],
    createdAt: [''],
    histories: [''],
    id: [''],
  });

  idDragon: string = '';

  public getDataDragons(id: string) {
    return this.http.get<DragonsResult>(`${this.API}/${id}`);
  }
  public putgetDataDragons(id: string, body: DragonsResult) {
    return this.http.put<DragonsResult>(`${this.API}/${id}`, body);
  }

  ngOnInit(): void {
    const allParams = this.route.snapshot.queryParams;
    this.idDragon = allParams?.['id'];
    this.getDataDragons(allParams?.['id']).subscribe((res: DragonsResult) => {
      this.formDragon.reset(res);
    });
  }

  save(): void {
    this.putgetDataDragons(this.idDragon, this.formDragon.getRawValue()).subscribe((data) => {
      this.router.navigate(['list-dragons']);
    });
  }

  close(): void {
    this.router.navigate(['list-dragons']);
  }
}
