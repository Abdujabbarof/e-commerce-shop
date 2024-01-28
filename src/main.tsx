import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Layout from './components/Layout.tsx'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './context/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <Layout>
          <App />
        </Layout>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
