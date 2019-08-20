import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rol} from './Models/rol';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    alert('Data service is working!');
  }

  getData() {
    return this.httpClient.get<Rol[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
