import React from 'react';
import Layout from './components/layout/layout'
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
