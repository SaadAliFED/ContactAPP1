import { Component, computed, EventEmitter, inject, Output, signal } from '@angular/core';
import { Contact } from '../../../../Models/Contact';
import { ContactService } from '../../../../Services/contactsService';

@Component({
  selector: 'app-componantlistmock',
  imports: [],
  templateUrl: './componantlistmock.html',
  styleUrl: './componantlistmock.scss',
})
export class Componantlistmock {

  @Output()
  contactSelected = new EventEmitter();

  contacts = signal<Contact[]>([]);
  selectedContact = signal<Contact | null>(null);
  filteredContacts = computed<Contact[]>(() => {
    const search = this.searchText().toLowerCase();
    return this.contacts().filter(contact =>
      contact.firstName.toLowerCase().includes(search) ||
      contact.lastName.toLowerCase().includes(search) ||
      contact.designation.toLowerCase().includes(search)
    );
  });
  searchText = signal('');

  private service = inject(ContactService);

  ngOnInit() {


    this.loadContacts();
  }

  loadContacts() {
    this.service.getContacts()
      .subscribe(res => {
        this.contacts.set(res);
      });
  }


  selectContact(contact: Contact) {
    this.selectedContact.set(contact);
    this.contactSelected.emit(contact);
  }

  onSearch(event: Event): void {
    const value =
      (event.target as HTMLInputElement).value;

    this.searchText.set(value);
  }
}
