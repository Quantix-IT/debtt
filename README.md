## Debtt client by Quantix

A library to use the debtt API.

### Installation and Usage

Installation:

```console
npm i @quantix-ict/debtt
```

Usage:

```javascript
const { Debtt } = require('@quantix-ict/debtt')

const debtt = new Debtt('API_KEY')

const result = await debtt.createCase({
  vorm: 'zakelijk',
  debiteurnr: '123456',
  kvknummer: '12345678',
  naam: 'Voorbeeld B.V.',
  adres: 'Voorbeeldstraat 1',
  plaats: 'Amsterdam',
  postcode: '1234AB',
  land: 'NL',
  telefoon: '0612345678',
  mobiel: '0612345678',
  email: 'voorbeeld@voorbeeld.com',
  factuur: [
    {
      nummer: '123456',
      datum: new Date('01-01-2023'),
      vervaldatum: new Date('01-02-2023'),
      bedrag: 1234.56,
    },
  ],
})
```

of using import:

```javascript
import { Debtt } from '@quantix-ict/debtt'

const debtt = new Debtt('API_KEY')

const result = await debtt.createCase({
  vorm: 'zakelijk',
  debiteurnr: '123456',
  kvknummer: '12345678',
  naam: 'Voorbeeld B.V.',
  adres: 'Voorbeeldstraat 1',
  plaats: 'Amsterdam',
  postcode: '1234AB',
  land: 'NL',
  telefoon: '0612345678',
  mobiel: '0612345678',
  email: 'voorbeeld@voorbeeld.com',
  factuur: [
    {
      nummer: '123456',
      datum: new Date('01-01-2023'),
      vervaldatum: new Date('01-02-2023'),
      bedrag: 1234.56,
    },
  ],
})
```
