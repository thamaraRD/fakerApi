const express = require('express');
const app = express();
const port = 8080;
const faker = require('faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get('/api/users', (req, res) => {
res.json( users );
});

const users = {
    Nombre: faker.name.firstName(),
    Apellido: faker.name.lastName(),
    Fono: faker.phone.phoneNumber(),
    Email: faker.internet.email(),
    Contraseña: faker.internet.password(),
}

app.get('/api/company', (req, res) =>{
res.json( company );
});

const company = {
    Nombre: faker.company.companyName(),
    Dirección:{
    Calle: faker.address.streetName(),
    Ciudad: faker.address.cityName(),
    Estado: faker.address.state(),
    CódPostal: faker.address.zipCode(),
    Estado: faker.address.country()
    }
    };

app.get('/api/users/company', (req, res) => {
res.json( all );
    });
    const all = {
        Nombre: faker.name.firstName(),
        Apellido: faker.name.lastName(),
        Fono: faker.phone.phoneNumber(),
        Email: faker.internet.email(),
        Contraseña: faker.internet.password(),
        Nombre_Company: faker.company.companyName(),
        Dirección:{
        Calle: faker.address.streetName(),
        Ciudad: faker.address.cityName(),
        Estado: faker.address.state(),
        CódPostal: faker.address.zipCode(),
        Estado: faker.address.country()
        }
    }     

app.listen(port, () => console.log(`Estamos en el puerto: ${port}`));