import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aftersubmit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aftersubmit.component.html',
  styleUrl: './aftersubmit.component.css'
})
export class AftersubmitComponent implements OnInit {
  @Input() formData :any={ data: [] };
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchContacts();
  }

  fetchContacts(): void {
    this.http.get<any>('http://3.111.47.3:24051/api/v1/getAllContact').subscribe(
      (response) => { 
        console.log('API Response:', response);
        this.formData = response;
      }
    );
  }

}
