import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseURL = "http://localhost:8080/api/employees"

  constructor(private http: HttpClient) { }
  getAllEmployee(): Observable <Employee[]>
  {
    return this.http.get<Employee[]>(this.baseURL)
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.http.post(this.baseURL, employee)
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(this.baseURL+"/"+id)
  }

  updateEmployees(id: number, employee: Employee): Observable<Object>{
    //return this.http.put(`$(this.baseURL)/${id}`, employee)
    return this.http.put(this.baseURL+"/"+id, employee)
  }

  // deleteEmployee(id: number): Observable <Object>{
  //   return this.http.delete(this.http+"/"+id)
  // }

  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
