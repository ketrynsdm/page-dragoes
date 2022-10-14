import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-dragons',
  templateUrl: './list-dragons.component.html',
  styleUrls: ['./list-dragons.component.scss'],
})
export class ListDragonsComponent implements OnInit {
  dragonsResult = [
    {
      createdAt: '2022-10-11T06:48:32.190Z',
      name: 'Toothless 2',
      type: 'Fire',
      histories: 'Teste',
      id: '149',
    },
    {
      createdAt: '2022-10-11T22:36:32.552Z',
      name: 'Fafnir',
      type: 'Fire',
      histories: '',
      id: '150',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
