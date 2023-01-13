import fetch from 'node-fetch'
import amountFormatter from './utils/amountFormatter'
import dateFormatter from './utils/dateFormatter'

const BASE_URL = 'https://dossier.debtt.com/api/v2/'

export class Debtt {
  apiKey: string

  constructor(apiKey: string) {
    if (!apiKey) throw new Error('DEBTT: Please provide a apiKey.')
    this.apiKey = apiKey
  }

  async createCase({
    factuur,
    ...debiteur
  }: {
    vorm: 'zakelijk' | 'particulier'
    debiteurnr: string
    kvknummer: string
    naam: string
    telefoon: string
    mobiel: string
    email: string
    adres: string
    postcode: string
    plaats: string
    land: string
    factuur: {
      nummer: string
      datum: Date
      vervaldatum: Date
      bedrag: number
    }[]
  }): Promise<any> {
    const payload = {
      function: 'createcase',
      auth: this.apiKey,
      debiteur: [
        {
          ...debiteur,
          factuur: factuur.map((item) => ({
            nummer: item.nummer,
            datum: dateFormatter(item.datum),
            vervaldatum: dateFormatter(item.vervaldatum),
            bedrag: amountFormatter(item.bedrag),
          })),
        },
      ],
    }

    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/json',
        Connection: 'keep-alive',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    })
    const data = await res.json()

    if (data.error) throw new Error('DEBTT: ' + data.error)

    return data
  }
}

export default Debtt
