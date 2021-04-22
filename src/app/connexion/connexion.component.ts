import { UserService } from './../service/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private store: Store, private httpClient: HttpClient, private userService: UserService) { }

  regEx1 = /[A-Za-z]{2,30}/;
  regEx2 = /[A-Za-z0-9]{2,30}/;
  regEx3 = /[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  @Input() erreur: boolean = true;

  password: string = "";
  email: string = "";
  pseudo: string = "";

  error: boolean = true;

  ngOnInit(): void {

  }

  // login(login: string, password: string): Observable<any> {
  //   let httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };

  //   return this.httpClient.post<any>("/api/login", { "login": login, "password": password }, httpOptions);
  //   //return this.store.subscribe(jwt);
  // }

  login() {
    console.log (this.pseudo + " " + this.password);
    this.userService.login(this.pseudo,this.password).subscribe (flux => console.log(flux));
  }
}

