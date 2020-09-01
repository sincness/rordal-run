import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-tilmelding',
  templateUrl: './tilmelding.component.html',
  styleUrls: ['./tilmelding.component.scss']
})
export class TilmeldingComponent implements OnInit {

  constructor(public http: HttpService) { }

  ngOnInit(): void {
  }

}
