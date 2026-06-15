import { Component, computed, EventEmitter, inject, Input, Output, signal, Signal } from '@angular/core';
import { Contact } from '../../../../Models/Contact';
import { ContactService } from '../../../../Services/contactsService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.scss',
})
export class ContactList {
  @Output() contactSelected = new EventEmitter<Contact>();

  allContacts = signal<Contact[]>([]);
  visibleContacts = signal<Contact[]>([]);

  page = signal(1);
  pageSize = 10;

  selectedContact = signal<Contact | null>(null);
  searchText = signal('');

  private service = inject(ContactService);

  filteredContacts = computed(() => {
    const search = this.searchText().toLowerCase();

    return this.allContacts().filter(contact =>
      `${contact.firstName} ${contact.lastName}`
        .toLowerCase()
        .includes(search)
    );
  });

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.service.getContactsjson().subscribe((res: any) => {
      this.allContacts.set(res);
      this.resetPagination();
    });
  }

  selectContact(contact: Contact) {
    this.selectedContact.set(contact);
    this.contactSelected.emit(contact);
  }

  resetPagination() {
    this.page.set(1);
    this.loadMore();
  }

  loadMore() {

    const end = this.page() * this.pageSize;

    this.visibleContacts.set(
      this.filteredContacts().slice(0, end)
    );
  }

  onSearch(event: Event) {

    const value = (event.target as HTMLInputElement).value;

    this.searchText.set(value);

    // reset paging after search
    this.resetPagination();
  }

  onScrollContainer(event: Event) {

    const element = event.target as HTMLElement;

    const isBottom =
      element.scrollTop + element.clientHeight >=
      element.scrollHeight - 20;

    const totalFilteredRecords =
      this.filteredContacts().length;

    const loadedRecords =
      this.visibleContacts().length;

    // stop if all records already loaded
    if (isBottom && loadedRecords < totalFilteredRecords) {

      this.page.update(page => page + 1);

      this.loadMore();
    }
  }
}