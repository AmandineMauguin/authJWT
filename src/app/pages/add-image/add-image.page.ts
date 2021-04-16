import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.page.html',
  styleUrls: ['./add-image.page.scss'],
})
export class AddImagePage implements OnInit {

  
  constructor(private http: HttpClient) {}

  file: File;
  title = '';
  author= '';
  description ='';
  API_URL = 'http://localhost:3001';

  onFileChange(event) {
    this.file = event.target.files[0];
  }

  uploadFile() {
    //On créer une variable qui est une classe
    let formData = new FormData();
    if (this.file.name) {
      //On ajoute à notre objet formData notre objet
      formData.append('picture', this.file, this.file.name);
      formData.append('title', this.title);
      formData.append('author', this.author);
      formData.append('description', this.description);
      //On a plus qu'à poster tout ça avec le protocle http
      this.http.post(this.API_URL, formData).subscribe(() => {
        console.log('response');
      });
    }

    console.log(this.file);
  }

  ngOnInit() {
  }

}
