import React from 'react';
import Card, { CardVariant } from './components/Card'


function App() {
  return (
    <div>
      <Card variant={CardVariant.outlined} width='200px'height='200px'>
        <button>Кнопка</button>
        <div>фцвцвцф</div>
      </Card>
    </div>
  );
}

export default App;
