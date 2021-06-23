import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EntryService } from './entry.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  formComplete: boolean;
  formclass: string;
  loaderclass: string;
  successMessage: string;

  IncomingCar = new FormGroup({
    carModel: new FormControl(''),
    year: new FormControl(''),
    licensePlate: new FormControl(''),
    state: new FormControl(''),
    color: new FormControl(''),
    spotNumber: new FormControl(''),
  })

  constructor(private service: EntryService) { }

  ngOnInit(): void {
  }

  submitForm(){
  console.log();
 }
}
