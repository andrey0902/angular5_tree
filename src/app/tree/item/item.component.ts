import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() public category: any;
  constructor() { }

  ngOnInit() {
     console.log('category', this.category);
  }
  public onVegetableDrop(event) {
    console.log('event li drop', event);
  }
}
