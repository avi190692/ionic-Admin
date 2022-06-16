import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  activePageTitle = 'Dashboard';

  Pages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'albums'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'person'
    },
    {
      title: 'Register',
      url: '/user',
      icon: 'person'
    }
  ];

  constructor(private menuCtrl: MenuController) { }
  
  openMenu() {
    this.menuCtrl.open();
  }
  
  ngOnInit() {
  }
  activeIndex ;

}
