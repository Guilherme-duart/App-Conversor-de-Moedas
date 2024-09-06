import { Component } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fromCurrency: string = 'USD';  
  toCurrency: string = 'BRL';    
  amount: number = 1;            // Quantidade a ser convertida
  result: number | null = null;  // Armazenar o resultado da conversão

  currencies: string[] = ['USD', 'BRL', 'EUR', 'JPY']; 

  constructor(private currencyService: CurrencyService) {}

  async convert() {
    const rates = await this.currencyService.getRates();  // Obtém todas as taxas em relação ao EUR
    const fromRate = rates[this.fromCurrency];  // Taxa da moeda de origem (ex: USD)
    const toRate = rates[this.toCurrency];      // Taxa da moeda de destino (ex: BRL)

    // Converte diretamente entre a moeda de origem e destino
    this.result = this.amount * (toRate / fromRate);  
  }
}
