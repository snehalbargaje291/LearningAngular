import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-auth',
  standalone: true,
  imports:[CommonModule, FormsModule],
  styleUrls: ['./user-auth.component.css'],
  templateUrl: './user-auth.component.html'
})
export class UserAuthComponent {
    formData: any = { data: [] };

    constructor(private http: HttpClient, private router: Router) { }

    //http://localhost:3000/contactpost
    //http://3.111.47.3:24051/api/v1/CreateContactDetails

    submitForm(formData: any): void {
      this.http.post<any>('http://3.111.47.3:24051/api/v1/CreateContactDetails', formData).subscribe(
        (response) => {
          console.log('Response:', response);
          this.router.navigate(['aftersubmit']);
        }
      );
    }
}
