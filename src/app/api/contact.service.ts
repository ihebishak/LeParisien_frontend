import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../Bean/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  public contactUs(formData) {
    return this.http.post<any>('http://localhost:8050/contactUs', formData);
  }

  public createContact(contact: Contact) {
    return this.http.post<any>('http://localhost:8050/saveContact', contact);
  }
}
