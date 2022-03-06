import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './App'
import { NotFound } from './routes/404/NotFound'
import { Home } from './routes/Home/Home'
import { Products } from './routes/Products/Products'
import { Product } from './routes/Products/Product/Product'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select a product</p>
              </main>
              }
          />
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
