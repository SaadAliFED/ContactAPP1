export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    designation: string;
    avatar: string;

    bio: string;

    emails: string[];

    phones: string[];

    meeting: string;

    socials: {
        facebook?: string;
        twitter?: string;
        linkedin?: string;
        github?: string;
    };
}