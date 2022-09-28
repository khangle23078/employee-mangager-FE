import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employee } from '../models/employee';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = environment.apiKey
  private token = this.authService.getToken();
  private options = {
    headers: {
      Authorization: `Bearer ${this.token}`
    }
  }

  constructor(private http: HttpClient, private authService: AuthService) { }

  getEmployees(): Observable<employee[]> {
    return this.http.get<employee[]>(`${this.apiUrl}/employee/getAll`, this.options);
  }

  getEmployeeById(id: number): Observable<employee> {
    return this.http.get<employee>(`${this.apiUrl}/employee/getById?id=${id}`, this.options);
  }

  createEmployee(data: employee): Observable<employee> {
    return this.http.post<employee>(`${this.apiUrl}/employee/insert`, data, this.options)
  }

  updateEmployeeById(data: employee): Observable<employee> {
    return this.http.put<employee>(`${this.apiUrl}/employee/${data.id}`, data, this.options)
  }

  deleteEmployeeById(id: number): Observable<employee> {
    return this.http.delete<employee>(`${this.apiUrl}/employee/${id}`, this.options);
  }


}
