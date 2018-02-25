import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GanttModule } from './gantt/gantt.module';
import { TreeService } from './service/tree.servise';
import { TreeComponent } from './tree/tree.component';
import { ItemComponent } from './tree/item/item.component';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ScrollDirective } from './directives/scroll.directive';
import { ListComponent } from './tree/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    ItemComponent,
    SidebarComponent,
    ScrollDirective,
    ListComponent
  ],
  imports: [
    BrowserModule,
    Ng2DragDropModule.forRoot(),
    GanttModule
  ],
  providers: [
    TreeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
