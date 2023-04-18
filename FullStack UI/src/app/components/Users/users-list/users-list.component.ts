import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';


//---------------decorater
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{

  users: User[] =[];
  constructor (private userService : UsersService){
  }
  ngOnInit(): void {
    this.userService.GetAllUsers()
    .subscribe({
      next: (users) => {
        this.users = users;
        //console.log(users)
      },
      error: (response) =>{
        console.log(response);
      }
    })
  }
  nameSearch : string ='';

}
