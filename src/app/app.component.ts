import { Component, ViewChild } from '@angular/core';
import { OptionsConfig, Project } from './gantt/services/interface';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('gantt') public gantt;
  title = 'app';
  public subject = new Subject();
  constructor() {
    this.createStream

      .subscribe((value) => {
      console.log('value', value);
    });
    this.startStream();
  }
  public options: OptionsConfig = {
    locale: 'ru',
    activity: {
      headerCol: [
        {
        name: 'name',
     /*   width: '50%'*/
        },
        {
         name: 'id',
         width: '50%'
        }
      ],
      width: '20%',
    },
    body: {
      width: '80%'
    },
    showProgress: true,
    showTooltip: true,
    typeTooltip: 'name',
    showCurrentDay: true,
  };

  public project: Project = {
    id: 5,
    name: 'New Gannt',
    startDate: '2018-02-13',
    start: '2017-00-01',
    end: '2017-02-01',
    currentDate: '2017-00-10',
   tasks: [
      {
        id: 1,
        treePath: 'parent 1',
        parentId: 5,
        name: 'parent 1',
        resource: 'res1',
        subTasks: [
          {
            'id': 55,
            'treePath': 'parent 1',
            'parentId': 1,
            'name': 'parent 1',
            'resource': 'res1',
            'start': '2017-02-28',
            'end': '2017-03-02',
            'percentComplete': 100,
            'status': 'Completed'
          },
          {
            'id': 2,
            'treePath': 'parent 1',
            'parentId': 1,
            'name': 'parent 1',
            'resource': 'res1',
            'start': '2017-01-012',
            'end': '2017-01-16',
            'percentComplete': 50,
            'status': 'pending'
          }
        ]
      },
         {
        'id': 2,
        'treePath': 'parent 2 lajsf a;dksjf a;kkjf ;alskdjkf',
        'parentId': 2,
        'name': 'parent 2 lajsf a;dksjf a;kkjf ;alskdjkf',
        'resource': 'res1',
        subTasks: [
          {
            'id': 12,
            'treePath': 'parent 1',
            'parentId': 2,
            'name': 'parent 1',
            'resource': 'res1',
            'start': '2017-01-22',
            'end': '2017-01-23',
            'percentComplete': 40,
            'status': 'error'
          },
          {
            'id': 11,
            'treePath': 'parent 1',
            'parentId': 11,
            'name': 'parent 1',
            'resource': 'res1',
            'start': '2017-01-13',
            'end': '2017-01-14',
            'percentComplete': 30,
            'status': 'progress'
          }
        ]
      },
      {
        'id': 3,
        'treePath': 'parent 1',
        'parentId': 3,
        'name': 'parent 3',
        'resource': 'res1',
        subTasks: [
          {
            'id': 322,
            'treePath': 'parent 1',
            'parentId': 3,
            'name': 'parent 1',
            'resource': 'res1',
            'start': '2017-01-01',
            'end': '2017-01-03',
            'percentComplete': 10,
            'status': 'Completed'
          },
          {
            'id': 555,
            'treePath': 'parent 1',
            'parentId': 555,
            'name': 'parent 1',
            'resource': 'res1',
            'start': '2017-01-05',
            'end': '2017-01-08',
            'percentComplete': 23,
            'status': 'Completed'
          }
        ]
      }
    ]
  };

  public setNew() {
   const task =  {
          'id': 44,
          'treePath': 'parent 1',
          'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
          'name': 'new task',
          'resource': 'res1',
          subTasks: [
            {
              'id': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
              'treePath': 'parent 1',
              'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
              'name': 'parent 1',
              'resource': 'res1',
              'start': '2017-02-08',
              'end': '2017-02-13',
              'percentComplete': 28,
              'status': 'Completed'
            },
            {
              'id': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
              'treePath': 'parent 1',
              'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
              'name': 'parent 1',
              'resource': 'res1',
              'start': '2017-01-12',
              'end': '2017-01-16',
              'percentComplete': 66,
              'status': 'Completed'
            }
          ]
        };
    this.gantt.addTask(task);
  }

  public addSubTask() {
    const subTask =             {
      'id': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
      'treePath': 'parent 1',
      'parentId': 1,
      'name': 'parent 1',
      'resource': 'res1',
      'start': '2017-01-22',
      'end': '2017-01-25',
      'percentComplete': 19,
      'status': 'Completed'
    };

    this.gantt.addSubTask(subTask);
  }
  public onBarsClick(event) {
    console.log('event bars', event);
  }

  public onCellClick(event) {
    console.log('event onCellClick', event);
  }

  public get createStream() {
    return this.subject.asObservable();
  }

  public startStream() {
    this.subject.next([1, 3, 5, 7, 0, 5, 4, 3, 2, 1]);
  }
}
