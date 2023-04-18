import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';


declare var window : any;

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})



export class EditUserComponent implements OnInit{
  userDetails : User = {
    userId: '',
    name :'',
    email:'',
    phone : 0,
    address:'',
    dateOfBirth: new Date()
  };
  formModal : any;
  
  constructor(private route: ActivatedRoute , private userService: UsersService, private router :Router){}
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    this.route.paramMap.subscribe({
      next:(params) =>{
        const id = params.get('id');

        if(id){
          this.userService.GetUser(id)
          .subscribe({
             next  : (response)=>{
              this.userDetails = response;
            }
          })
        }

      }
    })
  //-----------------------
  }
  updateUser() {
    this.userService.updateUser(this.userDetails.userId, this.userDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['users']);
        console.log(response)
      }
    });
    
  }
  deleteUser(userId : string){
    //const confirmed = window.confirm('Are you sure you want to delete this message?');
    //if(confirmed){
      this.userService.deleteUser(userId)
      .subscribe({
        next : (response)=>{
          this.router.navigate(['users']);
        }
      })
      this.formModal.show();
  //}
  }

  saveChanges(){
    this.formModal.show();
  }
 
  
}
