import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() public tree: any;

  constructor() { }

  ngOnInit() {
   // console.log('category', this.tree);
  }

}
