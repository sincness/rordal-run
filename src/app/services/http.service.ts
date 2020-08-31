import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getRuns() {
    return this.http.get('https://api.mediehuset.net/rordal/run');
  }
  getRun(id) {
    return this.http.get(`https://api.mediehuset.net/rordal/run/${id}`);
  }
  getPage(id) {
    return this.http.get(`https://api.mediehuset.net/rordal/pages/${id}`);
  }
  getPages() {
    return this.http.get('https://api.mediehuset.net/rordal/pages');
  }
  getRegistrations() {
    return this.http.get('https://api.mediehuset.net/rordal/registrations');
  }
  getRegistration(id) {
    return this.http.get(`https://api.mediehuset.net/rordal/registrations/${id}`);
  }
  postRegistations(data) {
    return this.http.post(`https://api.mediehuset.net/rordal/registrations`, data);
  }
  deleteRegistation(id) {
    return this.http.delete(`https://api.mediehuset.net/rordal/registrations/${id}`)
  }
  getRatings(id) {
    return this.http.get(`https://api.mediehuset.net/rordal/ratings/list/${id}`)
  }
  getRating(id) {
    return this.http.get(`https://api.mediehuset.net/rordal/ratings/${id}`)
  }
  getAverageRating() {
    return this.http.get(`https://api.mediehuset.net/rordal/ratings/average/${id}`)
  }
  postRating(data) {
    return this.http.post(`https://api.mediehuset.net/rordal/ratings`, data)
  }
  deleteRating(id) {
    return this.http.delete(`https://api.mediehuset.net/rordal/ratings/${id}`)
  }
  search(keyword) {
    this.http.get(`https://api.mediehuset.net/rordal/search/${keyword}`)
  }
}
