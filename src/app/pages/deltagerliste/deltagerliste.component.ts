import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-deltagerliste',
  templateUrl: './deltagerliste.component.html',
  styleUrls: ['./deltagerliste.component.scss']
})
export class DeltagerlisteComponent implements OnInit {

  participants: FormGroup;
  list;

  idState = false;
  nameState = true;
  cityState = true;

  constructor(public http: HttpService, private fb: FormBuilder) { }

  async ngOnInit() {
    this.participants = this.fb.group({
      keyword: ['']
    })
    this.list = await this.http.registrations.toPromise();
  }

  async search() {
    this.list = await this.http.search(this.participants.get('keyword').value).toPromise();
  }

  sortId() {
    this.idState ? this.list.sort((a, b) => a.id - b.id) : this.reverse();
    this.idState = this.idState ? false : true;
    // if (!this.cityState) this.cityState = true;
    // if(!this.nameState) this.nameState = true;
  }
  sortNames() {
    this.nameState ? this.list.sort((a, b) => (a.firstname > b.firstname) ? 1 : ((b.firstname > a.firstname) ? -1 : 0)) : this.reverse();
    this.nameState = this.nameState ? false : true;
    // if (!this.cityState) this.cityState = true;
    // if(!this.idState) this.idState = true;
  }
  sortCities() {
    this.cityState ? this.list.sort((a, b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0)) : this.reverse();
    this.cityState = this.cityState ? false : true;
    // if (!this.idState) this.idState = true;
    // if(!this.nameState) this.nameState = true;


  }
  reverse() {
    this.list.reverse();
  }

}
