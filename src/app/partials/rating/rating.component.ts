import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'src/app/services/cookie.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  rateform: FormGroup;
  error;

  @Input('rid') rid;
  @Input('average') average;
  @ViewChild('input') input;
  fullStars;
  halfStar: boolean;
  online = this.cookie.get('token');
  constructor(private cookie: CookieService, private fb: FormBuilder, private http: HttpService) { }

  ngOnInit(): void {
    this.rateform = this.fb.group({
      rating: ['', Validators.required],
      comment: ['', Validators.required]
    })
    
    // this.halfStar = this.average % 1 !== 0;  
    // this.fullStars = Array(Math.floor(this.average));


  }

  get data() {
    return this.rateform.controls;
  }

  submit() {
    console.log(this.rateform.value);
    if (this.rateform.valid) {
      const formdata = {
        run_id: this.rid,
        num_stars: this.rateform.controls.rating.value,
        comment: this.rateform.controls.comment.value
      }
      this.http.postRating(formdata)
      .pipe(first())
      .subscribe(
          data => {
              console.log(data);
              this.rateform.reset();
          },
          error => {
              console.log(error);
              this.error = error.statusText;
              setTimeout(() => {
                  this.error = '';
              }, 2000);
          });
    }

    
    // console.log(true);
  }
  ngOnChanges() {
    if (this.average !== undefined) {
      this.halfStar = this.average % 1 !== 0;
      this.fullStars = Array(Math.floor(+this.average));
    }

  }


}
