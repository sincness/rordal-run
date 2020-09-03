import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-tilmelding',
  templateUrl: './tilmelding.component.html',
  styleUrls: ['./tilmelding.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TilmeldingComponent implements OnInit {
  signup: FormGroup;

  id = this.route.snapshot.params.id ? this.route.snapshot.params.id : null;

  constructor(public http: HttpService, private fb: FormBuilder, private route: ActivatedRoute, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    switch(this.id) {
      case '1':
      case '2':
      case '3':
      case null:

      break;
      
      default:
          this.router.navigateByUrl('/fejl');
        break;
    } 
    this.signup = this.fb.group({
      run_id: [this.id, Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      birthday: ['', Validators.required],
      birthmonth: ['', Validators.required],
      birthyear: ['', Validators.required],
      gender: ['', Validators.required],
      comment: ['', Validators.required],
    })
  }

  get f() { return this.signup.controls; }

  submit() {
    if (this.signup.valid) {
    const formdata = {
      run_id: this.f.run_id.value,
      firstname: this.f.firstname.value,
      lastname: this.f.lastname.value,
      address: this.f.address.value,
      zipcode: this.f.zipcode.value,
      city: this.f.city.value,
      email: this.f.email.value,
      phone: this.f.phone.value,
      birthdate: (`${this.f.birthday.value}${this.f.birthmonth.value}${this.f.birthyear.value}`),
      gender: this.f.gender.value,
      comment: this.f.comment.value,
    }
      
      this.http.postRegistations(formdata).subscribe((res: any) => {
        if (res.status) {
          this.cookie.set('purchase', 1);
          this.router.navigateByUrl('tilmelding/tak');
        }
      })
    }
    
  }

  arrayOf(n: number) {
    return Array(n)
  }
}
