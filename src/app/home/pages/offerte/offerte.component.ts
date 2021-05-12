import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-offerte',
  templateUrl: './offerte.component.html',
  styleUrls: ['./offerte.component.scss']
})
export class OfferteComponent implements OnInit {

  breakpoint: number;
  isLinear: boolean = false;
  offerteForm: FormGroup

  constructor(private _formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.casesRowResize(window.innerWidth);
    this.offerteForm = this._formBuilder.group({
      offerteType: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      offerteDescription: new FormControl(null, Validators.required)
    });
  }

  onResize(event) {
    this.casesRowResize(event.target.innerWidth);
  }

  casesRowResize(innerWidth: any) {
    this.breakpoint = (innerWidth >= 700) ? 3 : 2
  }

  offerteType(offerte: string) {
    console.log(offerte);
    this.offerteForm.controls['offerteType'].setValue(offerte);
  }

  // Gebruikt formspree, anders een eigen email service of verder met een backend api;
  sendForm() {
    if(!this.offerteForm.valid)
    {
      console.log('form is not valid');
      return;
    }

    this.httpClient.post('https://formspree.io/f/xwkakoyp', {
      name: "Offerte verzoek",
      subject: "Offerte - " + this.offerteForm.controls['offerteType'].value,
      email: this.offerteForm.controls['email'].value,
      message: this.offerteForm.controls['offerteDescription'].value
    }, ).subscribe(success => console.log("success!"), error => console.log("failed " + error));
  }
}
