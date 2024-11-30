import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

// type User = {
//   id:string,
//   avatar:string,
//   name:string
// }

// interface User {
//   id:string,
//   avatar:string,
//   name:string
// }

@Component({
  selector: 'app-user',
  // standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required:true}) public user!: User;
  // @Input({required:true}) public id!: string;
  // @Input({required:true}) public avatar!: string;
  // @Input({required:true}) public name!: string;
  @Input({required:true}) public selected!: boolean;
  @Output() public select = new EventEmitter<string>();

  /* WITH SIGNALS */
  // public avatar = input.required<string>();
  // public name = input.required<string>();
  // public imagePath = computed(()=>'assets/users/' + this.avatar())
  // public select = output<string>();


  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser(){
    this.select.emit(this.user.id)
  }
}
