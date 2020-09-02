import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('toolbar') toolbar;
  @ViewChild('sideToolbar') sideToolbar;
  @ViewChild('icon') icon;

  menuOpen: boolean;
  online: boolean = this.cookie.get('token') ? true : false
  login: FormGroup;
  x: any;
  returnUrl: string;
  error = '';
  constructor(private auth: AuthService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private cookie: CookieService) { }

  ngOnInit(): void {

    if (this.auth.currentUserValue) this.online = true;
    

    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  menu() {
    (this.menuOpen) ? this.open() : this.close();
  }

  open() {
    // this.toolbar.nativeElement.style.marginLeft = '250px';
    this.sideToolbar.nativeElement.style.width = '15%';
    // this.icon.nativeElement.textContent = 'menu_open';
  }

  close() {
    // this.toolbar.nativeElement.style.marginLeft = '0';
    this.sideToolbar.nativeElement.style.width = '0';
    // this.icon.nativeElement.textContent = 'menu';
  }

  get form() {
    return this.login.controls;
  }

  submit() {
    this.auth.login({username: this.form.username.value, password: this.form.password.value})
    .pipe(first())
      .subscribe(
          data => {
              this.x = data;
              this.online = true;
              console.log(this.x);
              this.router.navigate([this.returnUrl]);
          },
          error => {
              console.log(error);
              this.error = error.statusText;
              setTimeout(() => {
                  this.error = '';
              }, 2000);
          });


  }

  logout() {
    this.auth.logout();
  }
}
