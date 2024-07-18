interface Contact {
    id: number;
    name: string;
    birthDate: Date; //add ? to make it optional, if you didnt want to include all the fields
}

interface Address{
    line1: string;
    line2: string
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "TJ"
}