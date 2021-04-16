import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modif-image',
  templateUrl: './modif-image.page.html',
  styleUrls: ['./modif-image.page.scss'],
})
export class ModifImagePage implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) { }

  title='';
  id = this.ActivatedRoute.snapshot.paramMap.get('id');
  API_URL = 'http://localhost:3001';
  author ='';
  description='';


  

  onSubmit(formData) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    const body = new URLSearchParams(formData).toString();
    if (this.id) {
      this.http
        .put(this.API_URL + '/images/' + this.id, body, { headers })
        .subscribe((response) => {
          if (response['errors']) {
            alert(response['message']);
            console.log(response);
          } else {
            this.router.navigateByUrl('/admin');
          }
        });
    } else {
      this.http
        .post(this.API_URL +'/images/', body, { headers })
        .subscribe((response) => {
          if (response['errors']) {
            alert(response['message']);
            console.log(response);
          } else {
            this.router.navigateByUrl('/admin');
          }
        });
    }
  }

  ngOnInit() {
console.log(this.id);

    if (this.id) {
      console.log(this.id);
      
      this.http.get(this.API_URL +'/images/' + this.id).subscribe((data) => {
        console.log('Data from API', data);
        this.title = data[0]['title'];
        this.description = data[0]['description'];
        this.author = data[0]['author'];
      });
    }
  }
}
