import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  constructor(private service:DadosService) { }

  ngOnInit(): void {
  }

}
