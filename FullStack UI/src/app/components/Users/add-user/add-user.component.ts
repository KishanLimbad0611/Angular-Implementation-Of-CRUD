import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  implements OnInit{


 
  addUserRequest: User={
    userId: '',
    name: '',
    email:'',
    phone : 0,
    address:'',
    dateOfBirth: new Date()

  }
  constructor(private userService: UsersService, private router: Router){}
  ngOnInit(): void {
  }

  //---------------add user
addUser(){
  this.userService.addUser(this.addUserRequest,) // this would be observable so we can subscribe it before we trigger it
  .subscribe({
    next:(user) =>{
      this.router.navigate(['users']);
      
    }
  })
}

}
