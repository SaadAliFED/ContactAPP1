import { Component, signal } from '@angular/core';
import { ContactDetails } from '../../components/contact-details/contact-details';
import { ContactList } from '../../components/contact-list/contact-list';
import { Componantlistmock } from '../../components/componantlistmock/componantlistmock';
import { Componantdetailsmock } from '../../components/componantdetailsmock/componantdetailsmock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts-page',
  imports: [CommonModule, ContactDetails, ContactList, Componantlistmock, Componantdetailsmock],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.scss',
})
export class ContactsPage {
  selectedContact = signal<any>(null);
  selectedType = signal<string>('mock');
  onContactSelected(contact: any) {
    this.selectedContact.set(contact);
  }

  ngOnInit() {


  }
}

