import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'Designer', employed: false },
    { name: 'Jill', age: 26, job: 'Engineer', employed: true },
    { name: 'Elyse', age: 25, job: 'Engineer', employed: true },
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'In a job' },
  ];

  constructor() {
    console.log(this.data, this.headers);
  }

  ngOnInit(): void {}
}
