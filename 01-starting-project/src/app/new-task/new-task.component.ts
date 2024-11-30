import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks/tasks.services';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  // standalone: true,
  // imports:[FormsModule]
})
export class NewTaskComponent  {
  @Output() public close = new EventEmitter<void>();
  @Input({required: true}) public userId!:string; 
  public enteredTitle: string = '';
  public enteredSummary: string = '';
  public enteredDate: string = '';
  private taskService = inject(TaskService)

  // public enteredTitle = signal<string>('');
  // public enteredSummary = signal<string>('');
  // public enteredDate = signal<string>('');

  public onCancelAddTask() {
    this.close.emit();
  }

  public onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.close.emit();
  }
}
