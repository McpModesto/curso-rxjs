import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

const formData = new FormData();
formData.append('campo1', 'valor1');
formData.append('campo2', 'valor2');

// ajax.put(url, formData, {
//     'mi-token': 'ABC123'
// }).subscribe(console.log);

ajax({
    url,
    method: 'DELETE',
    headers: {
        'mi-token': 'ABC123'
    },
    body: formData
}).subscribe(console.log);

