import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/Users/users-list/users-list.component';
import { AddUserComponent } from './components/Users/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './components/Users/edit-user/edit-user.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CustompipePipe } from './custompipe.pipe';
import { FilterpipePipe } from './filterpipe.pipe'; // for pagination
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    AddUserComponent,
    EditUserComponent,
    CustompipePipe,
    FilterpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //--------------inserted httpclient module---------------
    HttpClientModule,
    //----------inserted Forms Module for the Add User--------
    FormsModule,
    // for the pagination
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
