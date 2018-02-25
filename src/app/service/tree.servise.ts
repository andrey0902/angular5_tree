/**
 * Created by andrei on 24.02.2018.
 */
import { Injectable } from '@angular/core';
import { TasksModel } from './task.model';

@Injectable()
export class TreeService {
  // tslint:disable
  private temp = {
  'tasks':
    [{'id':108,'text':'тест','parent':null,'order':0,'status':'open'},
      {'id':120,'text':'ыы','parent':null,'order':1,'status':'open'},
      {'id':134,'text':'2222','parent':null,'order':2,'status':'open'},
      {'id':133,'text':'1111','parent':null,'order':3,'status':'open'},
      {'id':109,'text':'111','parent':108,'order':1,'status':'open'},
      {'id':135,'text':'21111','parent':134,'order':1,'status':'open'},
      {'id':136,'text':'222,222','parent':135,'order':0,'status':'open'},
      {'id':139,'text':'аенаенаен','parent':135,'order':1,'status':'open'},
      {'id':137,'text':'енаенаен','parent':135,'order':2,'status':'open'},
      {'id':138,'text':'нгпнгпнгпнг','parent':135,'order':3,'status':'open'}]
};
  private catalog = [
    {id: 1, title: 'noyt', parentId: 0},
    {id: 2, title: 'mini', parentId: 1},
    {id: 12, title: 'labuda', parentId: 2},
    {id: 13, title: '1234tttt', parentId: 12},
    {id: 14, title: '144444', parentId: 13},
    {id: 3, title: 'yltre', parentId: 1},
    {id: 4, title: 'YltraMini', parentId: 1},
    {id: 5, title: 'phone', parentId: 0},
    {id: 6, title: 'samsyng', parentId: 5},
    {id: 7, title: 'nokia', parentId: 5},
    {id: 8, title: 'motorola', parentId: 5},
    {id: 9, title: 'apple', parentId: 5},
    {id: 10, title: 'haomi', parentId: 5},
    {id: 11, title: 'byk', parentId: 0},
  ];
 constructor() {
  /* console.log('new', Object.values(this.buildCategoriesNew(this.temp.tasks)));
   console.log(this.temp.tasks.map(task => new TasksModel(task)));*/
   console.log('new2', Object.values(this.buildCategories(this.temp.tasks.map(task => new TasksModel(task)))));
 }

 public get newTask () {
   return this.sortByOrder(Object.values(this.buildCategories(this.temp.tasks.map(task => new TasksModel(task)))));
 }

 public sortByOrder(array: any) {
   return array.sort((a, b) => {
     return a.order - b.order;
   })
 }
 public get tree() {
   return this.catalog;
 }
 public get categoriesTree() {
   return Object.values(this.buildCategories(this.catalog));
 }

 private buildCategories(array: any[], parentId = 0) {
   const ob = {};
   for (const item of array) {
     if (item.parentId === parentId) {
       ob[item.id] = item;
       const res = this.buildCategories(array, item.id);
       if (Object.keys(res).length !== 0) {
         if (!ob[item.id].children) {
           ob[item.id].children = [];
         } else {
           ob[item.id].children.push(...this.sortByOrder(Object.values(res)));
         }
       }
     }
   }
   return ob;
 }


  private buildCategoriesNew(array: any[], parent = null) {

    const ob = {};
    for (const item of array) {
      if (item.parent == parent) {
        ob[item.id] = item;
        const res = this.buildCategoriesNew(array, item.id);
        if (Object.keys(res).length !== 0) {
          if (!ob[item.id].chailds) {

            ob[item.id].chailds = [...Object.values(res)];
            console.log('RES', res);
          } else {
            console.log('RES', res);
            ob[item.id].chailds.push(...Object.values(res));
          }
        }
      }
    }
    return ob;
  }

}
