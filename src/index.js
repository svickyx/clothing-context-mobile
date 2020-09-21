import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

//接著root-reducer, 導入persistgate, 還有下面的store, persistor都要導入

import {store, persistor} from './redux/store';

import App from './App';
import CartProvider from '../src/provider/cart/cart-provider';

import './index.css';

ReactDOM.render(
  <CartProvider>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter basename="/Queen-Clothing">
          <PersistGate persistor = {persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </CartProvider>,
  document.getElementById('root')
);

//cartprovider確保了所有components and its children have access to cartcontext

