import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
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
  idDragon: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute,) {}

  public get() {
    return this.http.get<DragonsResult[]>(this.API);
  }
  public delete(id: string) {
    return this.http.delete<DragonsResult[]>(`${this.API}/${id}`);
  }

  ngOnInit(): void {
    this.get().subscribe((res: DragonsResult[]) => {
      this.dragonsResult = res;
    });
    const allParams = this.route.snapshot.queryParams;
    this.idDragon = allParams?.['id'];
    this.delete(allParams?.['id']).subscribe((res: DragonsResult[]) => {
      this.dragonsResult = res;;
    });
  }

}
