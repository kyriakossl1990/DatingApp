import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseurl = 'https://localhost:5001/api/'
  private currentuserSource = new ReplaySubject<User | null>(1);
  currentuser$ = this.currentuserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post<User>(this.baseurl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user',JSON.stringify(user))
          this.currentuserSource.next(user);
        }
      })
    )
  }

  register(model:any ){
    return this.http.post<User>(this.baseurl + 'account/register',model).pipe(
      map((user: User) => {
        if (user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentuserSource.next(user);
        }
        // return user;
      })
    )
  }
  
  setCurrentUser(user: User){
    this.currentuserSource.next(user);

  }


  logout(){
    localStorage.removeItem('user');
    this.currentuserSource.next(null);
  }
}
