 <a href="https://badge.fury.io/js/stripe-countries-bank-accounts">
    <img src="https://badge.fury.io/js/stripe-countries-bank-accounts
.svg"
         alt="Gitter">
  </a>

<hr/>
<h2>Description</h2>

<p>
This package is providing a short bank detail form for 43 countries which are supported by Stripe. It's including dynamic fields for Account Number, Routing Number, Clearing Number, IBAN, BIC and etc.
</p>

<h2>How To Use</h2>

```js
import { CountryBankAccount } from 'stripe-countries-bank-accounts';

const App = () => {
 const handleComplete = (res) => {
    console.log(res)
 };

 return <CountryBankAccount countryCode="AU" businessType="individual" onComplete={handleComplete} />
};

export default App;
```
