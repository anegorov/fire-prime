import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  url:string = `https://us-central1-guidein-c7f6f.cloudfunctions.net/sendEmail`
  httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      }

  postData(body:any): Observable<any>{
         
    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
    
    return this.http.post(this.url, body, httpOptions); 
  }
}