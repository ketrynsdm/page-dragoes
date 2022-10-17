import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DragonsResult } from '../../interface/dragons-result.model';

@Component({
  selector: 'app-list-dragons',
  templateUrl: './list-dragons.component.html',
  styleUrls: ['./list-dragons.component.scss'],
})
export class ListDragonsComponent implements OnInit {
  private readonly API = environment.API;

  dragonsResult: DragonsResult[] = [];

  constructor(private http: HttpClient) {}

  public get() {
    return this.http.get<DragonsResult[]>(this.API);
  }

  ngOnInit(): void {
    this.get().subscribe((res: DragonsResult[]) => {
      this.dragonsResult = res;
    });
  }
}
