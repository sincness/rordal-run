import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-forside',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ForsideComponent implements OnInit {

  constructor(public http: HttpService) { }

  ngOnInit(): void {
  }

}
