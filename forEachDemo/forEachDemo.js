import { LightningElement } from 'lwc';

export default class ForEachDemo extends LightningElement {
    //  products = ['jjfd', 'fdjdf', 'iieioew', 'reiokds'];

    products = [
        { pno: 101, pname: 'Colgate', pprice: 97 },
        { pno: 101, pname: 'Tshirt', pprice: 100 },
        { pno: 101, pname: 'Shirt', pprice: 1212 },
        { pno: 101, pname: 'Dant-Kanti', pprice: 122 },
        { pno: 101, pname: 'Closup', pprice: 102 },
        { pno: 101, pname: 'Peposdent', pprice: 1233 }

    ]
}