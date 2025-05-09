import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // This module is required for HttpClient
    FormsModule, // This module is required for ngModel
    DragDropModule, // This module is required for drag and drop functionality
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
