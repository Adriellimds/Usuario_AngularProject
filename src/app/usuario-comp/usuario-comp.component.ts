import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { UsuarioInterface } from '../UsuarioInterface';

@Component({
  selector: 'app-usuario-comp',
  templateUrl: './usuario-comp.component.html',
  styleUrls: ['./usuario-comp.component.css'],
})
export class UsuarioCompComponent implements OnInit {
  Usuario: UsuarioInterface[] = [];

  constructor(private UsuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.UsuarioService.ObserUser().subscribe(
      (inter) => (this.Usuario = inter)
    );
  }
}
