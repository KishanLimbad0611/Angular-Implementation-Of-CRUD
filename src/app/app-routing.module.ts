import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/Users/add-user/add-user.component';
import { EditUserComponent } from './components/Users/edit-user/edit-user.component';
import { UsersListComponent } from './components/Users/users-list/users-list.component';

const routes: Routes = [
  //here we had routes the users
  {
    path: '',
    component: UsersListComponent     //this will shows us that user-list work in main page 
  },
  {
    path: 'users',
    component: UsersListComponent     //this will shows us that user-list work in main page 
  },
  {
    path: 'users/add',
    component: AddUserComponent     
  },
  {
    path: 'users/edit/:id',          // these will be for the edit the user, giving the path 
    component: EditUserComponent     
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
