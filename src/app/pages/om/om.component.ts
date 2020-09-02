import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-om',
  templateUrl: './om.component.html',
  styleUrls: ['./om.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OmComponent implements OnInit {

  constructor(public http: HttpService) { }

  ngOnInit(): void {
  }

}
