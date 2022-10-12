 <a href="https://badge.fury.io/js/stripe-countries-bank-accounts">
    <img src="https://badge.fury.io/js/stripe-countries-bank-accounts
.svg"
         alt="Gitter">
  </a>

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
