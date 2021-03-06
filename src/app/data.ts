import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
export  interface IProduct {
    '_id': string;
    'title': string;
    'serial': number;
    'author': string;
    'price': number;
    'src': string;
}
export const products = [
    {
        '_id': '58e1f80939d7162e9a0a9eb0',
        'title': 'Обои',
        'serial': 1045,
        'author': 'Fromental',
        'price': 1500.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f80996409af652ff5997',
        'title': 'Обои',
        'serial': 1045,
        'author': 'Puma',
        'price': 1500.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f809438ccc28b805ea3b',
        'title': 'Обои',
        'serial': 1045,
        'author': 'Fromental',
        'price': 1500.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f809fd6385dd5adc1baa',
        'title': 'Обои',
        'serial': 1045,
        'author': 'Puma',
        'price': 1500.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f809473528b3533131d0',
        'title': 'Обои',
        'serial': 1045,
        'author': 'Addidas',
        'price': 1500.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f80962fd2c3cb475978d',
        'title': 'Обои',
        'serial': 1045,
        'author': 'Fromental',
        'price': 1500.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f809711416f3d8c0a7ad',
        'title': 'Обои',
        'serial': 1045,
        'author': 'Addidas',
        'price': 1500.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f809a8fd877d977d9e22',
        'title': 'Обои',
        'serial': 1045,
        'author': 'Fromental',
        'price': 1500.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f8095d5bc87ca60def1c',
        'title': 'Обои',
        'serial': 1045,
        'author': 'Puma',
        'price': 1500.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f809c0b34dc771346a57',
        'title': 'Обои',
        'serial': 1045,
        'author': 'Fromental',
        'price': 1500.85,
        'src': 'assets/img/img1.jpg'
    }
];

export const products$ = of(products).pipe(
    delay(4000)
);
