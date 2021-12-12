import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {

  constructor(
    private http: HttpClient
  ) { }

  getBooks () {
    return this.http.get('/api/libros');
  }
  findBooks (query: string) {
    console.log('recibimos', query);
    
    return this.http.get(`/api/buscar?titulo=${
      query
    }`);
  }
}
