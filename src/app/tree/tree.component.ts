import { Component, OnInit } from '@angular/core';
import { TreeService } from '../service/tree.servise';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  public trees: any;
  public categoriesTree: any;
  public newTrees: any;
  constructor(
    private service: TreeService
  ) {
    this.newTrees = this.service.newTask;
    this.trees = this.service.categoriesTree;
    this.categoriesTree = this.service.categoriesTree;
  }

  ngOnInit() {
    //console.log('trees', this.trees);
  }

  public onDrop(event) {
    console.log('event ul dragg', event);
  }

}
