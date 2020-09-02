import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forside',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ForsideComponent implements OnInit {

  constructor(public http: HttpService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  tilmeld(id) {
    this.router.navigateByUrl(`tilmelding/${id}`);
  }


}
