interface Contact {
    id: number;
    name: ContactName;
    birthDate: Date; //add ? to make it optional, if you didnt want to include all the fields
}


let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "TJ"
}

type ContactName = string