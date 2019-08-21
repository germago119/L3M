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
    return this.httpClient.post("/api/Roles",
    {
    "nombreRol":  "Cusgfgfh",
    "descripcionRol":  "cusgvgvgh"
    })
    .subscribe(
    data  => {
    console.log("POST Request is successful ", data);
    },
    error  => {
    
    console.log("Error", error);
    
    }
    
    );
  }
}
