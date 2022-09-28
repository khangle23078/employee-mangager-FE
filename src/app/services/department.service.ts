import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { department } from '../models/department';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = environment.apiKey;
  private token = this.authService.getToken();
  private options = {
    headers: {
      Authorization: `Bearer ${this.token}`
    }
  }
  constructor(private http: HttpClient, private authService: AuthService) { }

  getDepartments(): Observable<department[]> {
    return this.http.get<department[]>(`${this.apiUrl}/department/getAll`, this.options);
  }

  getDepartmentById(id: number): Observable<department> {
    return this.http.get<department>(`${this.apiUrl}/department/getById?id=${id}`, this.options);
  }

  createDepartment(data: department): Observable<department> {
    return this.http.post<department>(`${this.apiUrl}/department/insert`, data, this.options);
  }

  updateDepartmentById(data: department, idDepartment: number): Observable<department> {
    return this.http.post<department>(`${this.apiUrl}/department/update?id=${idDepartment}`, data, this.options)
  }

  deleteDepartmentById(id: number): Observable<department> {
    return this.http.post<department>(`${this.apiUrl}/department/delete/${id}`, this.options);
  }

}
