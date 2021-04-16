import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from 'src/app/services/auth.service';


import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(
    private authService: AuthService,
    private storage: Storage,
    private http:HttpClient,
  ) { }

  ngOnInit() {
  }

  specialData='';
  test = '';

  //API images
  API_URLImages= 'http://localhost:3001/images';
  images:any;

  getImages(){
    this.http.get(this.API_URLImages).subscribe((data) => {
      this.images = data;
      this.images.reverse();
    })
  }

  ionViewWillEnter() {
    this.getImages();
  }

  getSpecialInfo(){
    this.authService.getSpecialData().subscribe(res => {
      this.specialData = res['msg'];
      this.test = 'test';
    });
  }

  logout(){
    this.authService.logout();
  };

  clearToken(){
    //pour tester
    this.storage.remove('access_token');
  }

  delete(id) {
    this.http.delete(this.API_URLImages + '/' + id).subscribe((response) => {
      console.log(response);
      this.getImages();
    });
  }

}
