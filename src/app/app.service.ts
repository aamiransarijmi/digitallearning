import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  isShowSnake: boolean = false;
  snakeMessage: string = '';
  readonly urlUser = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  users(): Observable<any> {
    return this.http.get<any>(`${this.urlUser}`);
  }

  closeSnake() {
    this.isShowSnake = false;
  }

  showSnake(snakeMessage: string) {
    this.snakeMessage = snakeMessage;
    this.isShowSnake = true;
  }
}
