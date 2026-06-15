export interface EmailAddress {
    id: string;
    contactId: string;
    email: string;
    primary: boolean;
}

// Sample data for email addresses
export const emailAddresses: EmailAddress[] = [
    {
        id: 'e1a1f6b0-1c2d-4a3b-8f5e-000000000001',
        contactId: 'c1001',
        email: 'alice@example.com',
        primary: true,
    },
    {
        id: 'e1a1f6b0-1c2d-4a3b-8f5e-000000000002',
        contactId: 'c1001',
        email: 'alice.work@example.com',
        primary: false,
    },
    {
        id: 'e1a1f6b0-1c2d-4a3b-8f5e-000000000003',
        contactId: 'c1002',
        email: 'bob@example.com',
        primary: true,
    },
];