import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiKey = '4a1c1b8d0ed1ab70211f048cf8318d82';  
  private apiUrl = `http://data.fixer.io/api/latest?access_key=${this.apiKey}`;

  constructor() { }

  async getRates() {
    try {
      const response = await axios.get(this.apiUrl);
      console.log(response.data);  // Verifica a resposta da API
      return response.data.rates;  // Retorna as taxas de câmbio
    } catch (error) {
      console.error('Erro ao buscar dados da API', error);
      throw error;
    }
  }
}
