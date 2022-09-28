import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { role } from '../models/role';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = environment.apiKey
  private token = this.authService.getToken();
  private options = {
    headers: {
      Authorization: `Bearer ${this.token}`
    }
  }

  constructor(private authService: AuthService, private http: HttpClient) { }

  getRoles(): Observable<role[]> {
    return this.http.get<role[]>(`${this.apiUrl}/role/get`, this.options)
  }

  createRole(data: role): Observable<role> {
    return this.http.post<role>(`${this.apiUrl}/role/create`, data, this.options);
  }

  deleteRole(id: any): Observable<role> {
    return this.http.post<role>(`${this.apiUrl}/role/delete?id=${id}`, id, this.options);
  }

}