import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { HeaderComponent } from './components/header/header.component';
import { TodoInputAddItemsComponent } from './components/todo-input-add-items/todo-input-add-items.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoButtonDeletAllComponent } from './components/todo-button-delet-all/todo-button-delet-all.component';

//pages
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    TodoInputAddItemsComponent,
    TodoListComponent,
    HeaderComponent,
    TodoButtonDeletAllComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
