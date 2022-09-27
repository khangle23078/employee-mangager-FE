import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = environment.apiKey
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<employee[]> {
    return this.http.get<employee[]>(`${this.apiUrl}/department/getAll`);
  }

  getEmployeeById(id: number): Observable<employee> {
    return this.http.get<employee>(`${this.apiUrl}/department/${id}`);
  }

  createEmployee(data: employee): Observable<employee> {
    return this.http.post<employee>(`${this.apiUrl}/department`, data)
  }

  updateEmployeeById(data: employee): Observable<employee> {
    return this.http.put<employee>(`${this.apiUrl}/department/${data.id}`, data)
  }

  deleteEmployeeById(id: number): Observable<employee> {
    return this.http.delete<employee>(`${this.apiUrl}/department/${id}`);
  }
}
