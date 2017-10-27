import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutuss',
  templateUrl: './aboutuss.component.html',
  styleUrls: ['./aboutuss.component.css']
})
export class AboutmeComponent implements OnInit {
   private numid :string;
   private my_name:string;
  private email:string;
  private fac:string;
  private major:string;
  private uni:string;

  constructor() { }
private anime : string;
private song : string;

  ngOnInit() {
    this.numid = "58102010816"
    this.my_name = "Pudtida Nilsombool"
    this.email = "pudtida.fang@g.swu.ac.th"
    this.anime="tokyo ghoul"

    this.fac="FACULTY OF SCIENCE"
    this.major="COMSCI'27"
    this.uni="@SRINAKHARINWIROT UNIVERSITY"
    }
   
  }

