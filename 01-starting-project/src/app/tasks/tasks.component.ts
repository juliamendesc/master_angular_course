import { Component, Input } from '@angular/core';
import { TaskService } from './tasks.services';

@Component({
  selector: 'app-tasks',
  // standalone: true, // for usage with modules
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) public name!: string;
  public isNewTask: boolean = false;

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  public onStartNewTask() {
    this.isNewTask = !this.isNewTask;
  }
  
  public onCloseAddTask() {
    this.isNewTask = false
  }
 
}
