import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private http: HttpClient) {}

  public getLisDragons() {
    return this.http.get<DragonsResult[]>(this.API);
  }
  public deleteDragons(id: string) {
    return this.http.delete<DragonsResult[]>(`${this.API}/${id}`);
  }
  public delete(id: string | null) {
    if(id) {
      this.deleteDragons(id).subscribe(() => {
        this.getLisDragons().subscribe((res: DragonsResult[]) => {
          this.dragonsResult = res;
        });
      });
    }
  }

  ngOnInit(): void {
    this.getLisDragons().subscribe((res: DragonsResult[]) => {
      this.dragonsResult = res.sort((item1, item2) => {
        if((item1.name && item2.name) && item1.name < item2.name) {
          return -1;
        }
          return 1;
      });
    });
    // const allParams = this.route.snapshot.queryParams;
    // this.idDragon = allParams?.['id'];
    // this.delete(allParams?.['id']).subscribe((res: DragonsResult[]) => {
    //   this.dragonsResult = res;;
    // });
  }

}
