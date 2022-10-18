import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DragonsResult } from '../../interface/dragons-result.model';

@Component({
  selector: 'app-dragons-details',
  templateUrl: './dragons-details.component.html',
  styleUrls: ['./dragons-details.component.scss'],
})
export class DragonsDetailsComponent implements OnInit {
  private readonly API = environment.API;

  dragonsResult: DragonsResult = {
    createdAt: '',
    name: '',
    type: '',
    histories: '',
    id: '',
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  public get(id: string) {
    return this.http.get<DragonsResult>(`${this.API}/${id}`);
  }

  ngOnInit(): void {
    const allParams = this.route.snapshot.queryParams;
    const dragonId = allParams?.['id'];
    this.get(dragonId).subscribe((res: DragonsResult) => {
      this.dragonsResult = res;
    });
  }
}
