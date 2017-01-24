import {Item} from "./item";
import {User} from "./user";

export class InvoiceItem {
    id: string;
    invoiceItem : Item;
    qty: number;
    rate: string;
    tax: string;
    salesPerson : User;


}
