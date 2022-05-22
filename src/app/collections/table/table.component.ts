import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data = [] as any;
  @Input() headers = [] as any;
  // @Input aliasing, 'class' will be reassigned to 'classNames'
  @Input('class') classNames = '';

  constructor() {}

  ngOnInit(): void {}
}
