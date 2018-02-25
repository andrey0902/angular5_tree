/**
 * Created by andrei on 25.02.2018.
 */
export class TasksModel {
  public id: number;
  public title: string;
  public parentId: number;
  public order: number;
  public status: string;
  public children = [];
  public editMod = false;

  constructor(task) {
    this.id = task.id;
    this.parentId = task.parent === null ? 0 : task.parent;
    this.title = task.text;
    this.order = task.order;
    this.status = task.status;
  }
}
