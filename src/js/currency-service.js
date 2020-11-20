export default class CurrencyService {
  static async getConversion() {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currencyFrom}`
      );
    }
  }
}
