import { Component, inject, Input } from '@angular/core';
import { type TaskType } from './task.model';
import { TaskService } from '../tasks.services';
// import { DatePipe } from '@angular/common';
// import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  // standalone: true,
  // imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  @Input({required: true}) public task!:TaskType;
  public taskService = inject(TaskService);

  public onCompleteTask() {
    this.taskService.removeTask(this.task.id)
  }
}
