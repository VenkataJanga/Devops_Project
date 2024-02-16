import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { Employee } from '../model/employee.model';
//import { environment } from 'src/environments/environment';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }
//  private baseUrl: string = environment.baseUrl+'/api/employees/';
  private baseUrl: string = 'http://localhost:8090/api/employees/';

  // getEmployees() : Observable<ApiResponse> {
  //   return this.http.get<ApiResponse>(this.baseUrl);
  // }
  getEmployees(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createEmployee(employee: Employee): Observable<any> {
    return this.http.post<any>(this.baseUrl, employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<any> {
    return this.http.put<any>(this.baseUrl + employee.id, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }
}