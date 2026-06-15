import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Contact } from '../Models/Contact';
import { EmailAddress } from '../Models/EmailAddress';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private http = inject(HttpClient);



  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(
      `contacts`
    );
  }



  getEmails(contactId: number): Observable<EmailAddress[]> {
    return this.http.get<EmailAddress[]>(
      `/contacts/${contactId}/email_addresses`
    );
  }

  getContactsjson() {
    return this.http.get('/json/contact.json');

  }

  getEmailsjson(contactId: number) {
    return this.http.get(`/json/emails.json`);
  }
}