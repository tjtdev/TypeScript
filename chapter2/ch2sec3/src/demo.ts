interface Contact {
    id: number;
    name: ContactName;
    birthDate: Date; //add ? to make it optional, if you didnt want to include all the fields
    status: ContactStatus;
}

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

//special type that has hard-coded list of values

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "TJ",
    status: ContactStatus.Active
}

type ContactName = string