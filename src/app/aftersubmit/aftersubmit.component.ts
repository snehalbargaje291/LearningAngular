import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aftersubmit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aftersubmit.component.html',
  styleUrl: './aftersubmit.component.css'
})
export class AftersubmitComponent implements OnInit {
  @Input() formData: any = { data: [] };

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

  // http://3.111.47.3:24051/api/v1/updateContactDetails
  updateContact(contact: any): Observable<any> {
    return this.http.post<any>(`http://3.111.47.3:24051/api/v1/updateContactDetails`, contact);
  }

  onUpdateContact(contact: any): void {
    this.updateContact(contact).subscribe(
      (response) => {
        console.log('API Response:', response);
        this.fetchContacts(); 
      }
    );
  }

  deleteContacts(ContactId: number): void {
    this.http.delete<any>(`http://3.111.47.3:24051/api/v1/deleteContactDetails/${ContactId}`).subscribe(
      (response) => { 
        console.log('API Response:', response);
        this.formData = response;
        this.fetchContacts();
      }
    );
  }
}
