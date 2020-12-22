import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoListAngular';
  public newTask: string; 
  errorMsg: string;
  STORAGE_KEY = 'local_todolist';

  public items = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];

  public addTask(){
    if(this.newTask == ''){

    }
    else if(this.items.indexOf(this.newTask) == -1){
      this.items.push(this.newTask)
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items))
      this.newTask = '';
      this.errorMsg = '';
    }
    else{
      this.errorMsg = 'This item is already in your Todo List.';
    }
}

  public deleteTask(index: number){
      // this.items = this.items.filter(i => i !== index)
      this.items.splice(index, 1)
      localStorage.removeItem(this.items)
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items))
  }

}
