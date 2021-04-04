import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AUTH_PATH } from 'src/app/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showLogout = false;
  constructor(
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }

  navbarToggle(){
    this.showLogout = !this.showLogout;
   let item1 = document.getElementById('drop');
   let item2 = document.getElementById('nav-drop');
   if(this.showLogout){
     item1.classList.add('show');
     item2.classList.add('show');
   }else{
     item1.classList.remove('show');
     item2.classList.remove('show');
   }

  }

  logout(){
    localStorage.clear();
    this.toastr.success('Logout successfully.');
    this.router.navigate([AUTH_PATH.SIGN_IN]);
  }

}
