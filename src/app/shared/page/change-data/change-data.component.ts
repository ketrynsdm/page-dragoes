import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  salva: string[] =[]

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  formDragon = this.formBuilder.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
  });

  public get(id: string) {
    return this.http.get<DragonsResult>(`${this.API}/${id}`);
  }

  ngOnInit(): void {
    const allParams = this.route.snapshot.queryParams;
    const idDragon = allParams?.['id'];
    this.get(idDragon).subscribe((res: DragonsResult) => {
      this.dragons = res;
    });
  }

  edit(target: { value: any; }) {
    console.log(target.value);
    
  }

  salvar(): void {
    const { name, type } = this.formDragon.getRawValue();
    if (this.formDragon.valid) {
      this.changeData.emit(name && type || '');
      this.salva.push()
    }
  }
}
