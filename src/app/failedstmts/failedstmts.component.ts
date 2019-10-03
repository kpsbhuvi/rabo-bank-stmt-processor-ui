import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-failedstmts',
  templateUrl: './failedstmts.component.html',
  styleUrls: ['./failedstmts.component.css']
})
export class FailedstmtsComponent implements OnInit {
  transactionRef: number
        accountNum: string
        desc: string
        startBal: number
        endBal: number
        mutation: number
  constructor() { }

  ngOnInit() {
  }

}
