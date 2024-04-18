import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Res{
  coderes:string
}
export interface CodeENT{
  code:string
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl:string="https://localhost:7106/api/Compiler";
  constructor(private httpClient:HttpClient) { }
  post(data:CodeENT):Observable<Res>{
    return this.httpClient.post<Res>(this.baseUrl, data);

  }
}
