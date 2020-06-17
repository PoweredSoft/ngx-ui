import { Component, OnInit, Input } from '@angular/core';
import { IDataSource } from '@poweredsoft/data';

@Component({
  selector: 'psbx-ds-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.scss']
})
export class TextFilterComponent implements OnInit {

  @Input() dataSource : IDataSource<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
