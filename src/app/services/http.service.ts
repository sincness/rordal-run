import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay, catchError, share } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

interface Response {
  status: boolean;
  error: string;
  count: number;
  items: Array<Page>;
}

interface Page {
  id: string;
  title: string;
  teaser: string;
  content: string;
}

const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private forsideCache$;
  private tilmeldingCache$;
  private distancerCache$;
  private deltagerlisteCache$;
  private omCache$;
  private løbCache$;

  constructor(private http: HttpClient) {
    // this.getPages();
  }

  getRuns() {
    return this.http.get<any>('https://api.mediehuset.net/rordal/run').pipe(
      map(response => response.items.filter(run => run))
    );
  }
  getRun(id) {
    return this.http.get(`https://api.mediehuset.net/rordal/run/${id}`);
  }
  // getPage(id) {
  //   return this.http.get(`https://api.mediehuset.net/rordal/pages/${id}`);
  // }
  // getPages() {
  //   return this.http.get('https://api.mediehuset.net/rordal/pages');
  // }

  get tilmelding() {
    if (!this.tilmeldingCache$) {
      this.tilmeldingCache$ = this.getPage(3).pipe(shareReplay(CACHE_SIZE));
    }
    return this.tilmeldingCache$;
  }

  get deltagerliste() {
    if (!this.deltagerlisteCache$) {
      this.deltagerlisteCache$ = this.getPage(5).pipe(shareReplay(CACHE_SIZE));
    }
    return this.deltagerlisteCache$;
  }

  get om() {
    if (!this.omCache$) {
      this.omCache$ = this.getPage(4).pipe(shareReplay(CACHE_SIZE));
    }
    return this.omCache$;
  }

  get distancer() {
    if (!this.distancerCache$) {
      this.distancerCache$ = this.getPage(2).pipe(shareReplay(CACHE_SIZE));
    }
    return this.distancerCache$;
  }

  get runs() {
    if (!this.løbCache$) {
      this.løbCache$ = this.getRuns().pipe(shareReplay(CACHE_SIZE));
    }
    
    return this.løbCache$;
  }

  get forside() {
    if (!this.forsideCache$) {
      this.forsideCache$ = this.getPage(1).pipe(shareReplay(CACHE_SIZE));
    }
    return this.forsideCache$;
   }

   private getPage(id) {
    return this.http.get<any>(`https://api.mediehuset.net/rordal/pages/${id}`).pipe(
       map(response => response.item)
     );
   }


  // getPages(): void {
  //   this.pages = this.http.get<Response[]>('https://api.mediehuset.net/rordal/pages').pipe(
  //     // map(projects => projects.filter(project => this.projects.includes(project.name))
  //     map(items => items.filter(page => page)
  //     ),
  //     shareReplay({ bufferSize: 1, refCount: true }),
  //     catchError(error => of(error))
  //   ) as Observable<Response[]>
  //   console.log(this.pages);
    
  // }


  // get forside() {
  //   if (!this.cache$) {
  //     this.cache$ = this.requestRoom(2).pipe(shareReplay(CACHE_SIZE));
  //   }
    
  //   return this.cache$;
  //  }

  //  private requestRoom(id) {
  //    return this.http.get<Response>(`https://api.mediehuset.net/overlook/rooms/${id}`).pipe(
  //      map(response => response.item ? response.item : response.items)
  //    );
  //  }



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
  getAverageRating(id) {
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
