import React from 'react';

import Header from './components/Header';
import Marketing from './pages/Marketing';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Marketing />
    </div>
  );
}

export default App;
