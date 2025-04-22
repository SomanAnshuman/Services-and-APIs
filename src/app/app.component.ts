import { Component } from '@angular/core';
import { UsersService } from './service/users.service';
import { User } from './interfaces/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = [];
  selectedUser: User | undefined;

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
    });
  }

  addUser(user: User) {
    if (!this.selectedUser) {
      this.userService.saveUsers(user).subscribe((data: User) => {
        if (data) this.getUser();
      });
    } else {
      const userData = { ...user, id: this.selectedUser.id };
      this.userService.updateUser(userData).subscribe((data: User) => {
        if (data) this.getUser();
      });
      delete this.selectedUser;
    }
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((data: User) => {
      console.log(data);
      if (data) this.getUser();
    });
  }

  selectUser(id: string) {
    this.userService.getSelectedUser(id).subscribe((data: User) => {
      this.selectedUser = data;
    });
  }
}
