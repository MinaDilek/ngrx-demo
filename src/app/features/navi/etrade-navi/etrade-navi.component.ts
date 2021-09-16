import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etrade-navi',
  templateUrl: './etrade-navi.component.html',
  styleUrls: ['./etrade-navi.component.css'],
})
export class EtradeNaviComponent implements OnInit {
  cartTitle: string = 'Sepetiniz!!!!';
  theme: string = 'navbar navbar-expand-lg navbar-light bg-light';
  constructor() {}

  ngOnInit(): void {}

  checkUser(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

  changeTheme(data: string) {
    data === 'light'
      ? (this.theme = 'navbar navbar-expand-lg navbar-dark bg-dark')
      : (this.theme = 'navbar navbar-expand-lg navbar-light bg-light');
  }
}
