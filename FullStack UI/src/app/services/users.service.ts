import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseApiUrl : string =environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  GetAllUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.baseApiUrl + '/api/Users');
  }

  addUser(addUserRequest:User) : Observable<User>{
    addUserRequest.userId='00000000-0000-0000-0000-000000000000';  //this will override  with empty guid(if we dont take this then it comes the error 404 not found)
    return this.http.post<User>(this.baseApiUrl + '/api/Users',addUserRequest);
  }

  GetUser(userId:string) : Observable<User>{
   return this.http.get<User>(this.baseApiUrl + '/api/Users/' + userId);
  }

  updateUser(userId : string, updateUserRequest : User): Observable<User>{
    return this.http.put<User>(this.baseApiUrl + '/api/Users/' + userId ,updateUserRequest )
  }

  deleteUser(userId :string): Observable<User>{
    return this.http.delete<User>(this.baseApiUrl + '/api/Users/' + userId)
  }
}
