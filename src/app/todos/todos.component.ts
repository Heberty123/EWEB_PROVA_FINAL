import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-dados',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private service:TodosService) { }

  todo: Todo[] = [];

  ngOnInit(): void {
    this.service.getDados()
      .subscribe(todo => this.todo = todo);
  }

}
