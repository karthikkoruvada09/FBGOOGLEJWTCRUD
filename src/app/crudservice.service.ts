import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  constructor(private http:HttpClient) { }

  post(data):Observable<any>{
    console.log(data)
    return this.http.post('http://localhost:3000/api/post',data)                 
  };


  get():Observable<any>{   
    return this.http.get('http://localhost:3000/api/get')                
  };



  delete(id):Observable<any>{
    let url= "http://localhost:3000/api/delete/"+id; 
    return this.http.delete(url);

                      
  };



  put(obj):Observable<any>{
    console.log(obj)
    return this.http.put('http://localhost:3000/api/put',obj)               
  };


  
}
