import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EmailAddress } from '../../../../Models/EmailAddress';
import { ContactService } from '../../../../Services/contactsService';

@Component({
  selector: 'app-contact-details',
  imports: [],
  templateUrl: './contact-details.html',
  styleUrl: './contact-details.scss',
})
export class ContactDetails implements OnChanges {

  @Input() contact: any;

  emails: EmailAddress[] = [];

  private service = inject(ContactService);

  ngOnChanges(changes: SimpleChanges) {
    const contactChange = changes['contact'];

    if (!contactChange || !contactChange.currentValue) {
      return;
    }

    const contactId = contactChange.currentValue.id;
    if (!contactId) {
      this.emails = [];
      return;
    }
    if (this.emails.length > 0) {
      return;
    }
    this.service
      .getEmailsjson(contactId)
      .subscribe((res: any) => {
        this.emails = res || [];
      });
  }
}
