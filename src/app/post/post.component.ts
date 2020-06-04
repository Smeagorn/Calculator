import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  title = 'Ипотечный калькулятор';

  logo = '/assets/img/18.png';
  sum = 20000000;
  fee = 2000;
  percent = 20;
  term = 60;
  ngOnInit(): void {}

  calculator(): void {
    let sum: any, fee: any, percent: any, term: any, result: any;
    sum = document.getElementById('sum').nodeValue;
    sum = parseInt(sum);
    fee = document.getElementById('fee').nodeValue;
    fee = parseInt(fee);
    percent = document.getElementById('percent').nodeValue;
    percent = parseInt(percent);
    term = document.getElementById('term').nodeValue;
    term = parseInt(term);
    let creditAmount: any = this.sum - this.fee;
    let creditRate: any = this.percent / 100 / 12;
    let annuityPayment: number =
      (creditRate * Math.pow(1 + creditRate, this.term)) /
      (Math.pow(1 + creditRate, this.term) - 1);
    let monthlyLnstallment: number = annuityPayment * creditAmount;
    let overpayment: number = this.sum - monthlyLnstallment * this.percent;
    result =
      'Ежемесячный платеж' +
      ' ' +
      '=' +
      ' ' +
      monthlyLnstallment.toFixed(4) +
      ',' +
      ' ' +
      'a переплата' +
      ' ' +
      '=' +
      ' ' +
      Math.abs(+overpayment.toFixed(4));
    document.getElementById('monthlyLnstallment').innerHTML = result;
  }
}
