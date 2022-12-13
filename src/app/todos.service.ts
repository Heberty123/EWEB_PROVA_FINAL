import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private dadosUrl = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http:HttpClient) { }

  getDados(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.dadosUrl);
  }
}
