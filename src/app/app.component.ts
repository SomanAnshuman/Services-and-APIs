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
    this.userService.saveUsers(user).subscribe((data: User) => {
      if (data) this.getUser();
    });
  }
}
