import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { map } from 'rxjs/operators';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-distancer',
  templateUrl: './distancer.component.html',
  styleUrls: ['./distancer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DistancerComponent implements OnInit {

  subject;
  ratings;
  average;
  uid = JSON.parse(this.cookie.get('user')) ? JSON.parse(this.cookie.get('user')).user_id : null
  constructor(public http: HttpService, private cookie: CookieService) { }

  ngOnInit(): void {
    console.log(this.uid);
    
  }

  async changeSubject(id) {
    this.http.getRun(id).pipe(res => res).subscribe(res => this.subject = res.item );
    this.ratings = await this.http.getRatings(id).pipe(map(res => res.items)).toPromise();    
    // if (this.average === undefined) {
      if (this.ratings) {
        let data = [];
        this.ratings.filter(rating => data.push(+rating.num_stars));
        this.average = data.reduce((a,b) => a+b) / data.length;      
      }
    // }
  }

  async deleteRating(id, elm) {
    console.log(id);
    
    elm.target.parentNode.parentNode.remove();
    const res = await this.http.deleteRating(id).toPromise();
    console.log(res);
    
  }

}
