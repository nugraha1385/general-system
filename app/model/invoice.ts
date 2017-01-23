import {User} from "./user";

export class Invoice {
    id: string;
    invNumber: string;
    orderNumber: string;
    invoiceDate: string;
    term: string;
    itemRateRule : string;
    salesPerson: User;
}
