import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = environment.apiKey;
  constructor(private http: HttpClient) { }

  getDepartments(): Observable<department[]> {
    return this.http.get<department[]>(`${this.apiUrl}/department`);
  }

  getDepartmentById(id: number): Observable<department> {
    return this.http.get<department>(`${this.apiUrl}/department/${id}`);
  }

  createDepartment(data: department): Observable<department> {
    return this.http.post<department>(`${this.apiUrl}/department`, data);
  }

  updateDepartmentById(data: department): Observable<department> {
    return this.http.put<department>(`${this.apiUrl}/${data.id}`, data)
  }

  deleteDepartmentById(id: number): Observable<department> {
    return this.http.delete<department>(`${this.apiUrl}/department/${id}`);
  }

}
