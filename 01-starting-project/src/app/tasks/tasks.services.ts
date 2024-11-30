import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { type NewTaskData } from "./task/task.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks = dummyTasks;

    constructor(){
        const tasks = localStorage.getItem('tasks')

        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }

    public getUserTasks(userId: string) {
        return this.tasks.filter((task)=> task.userId === userId)
    }

    public addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
            userId: userId
          });
        this.saveTasks();
    }

    public removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id)
        this.saveTasks();
    }
}