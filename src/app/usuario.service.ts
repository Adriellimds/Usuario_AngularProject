import { Injectable } from '@angular/core';
import { UsuarioInterface } from './UsuarioInterface';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private UserUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  ObserUser(): Observable<UsuarioInterface[]> {
    return this.http.get<UsuarioInterface[]>(this.UserUrl);
  }
}
