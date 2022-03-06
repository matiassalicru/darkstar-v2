import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { getProduct, deleteProduct } from '../../../data'

export const Product = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const product = getProduct(parseInt(params.productId, 10))

  const onDeleteProduct = () => {
    deleteProduct(product.number)
    navigate('/products' + location.search)
  }

  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {product.amount}</h2>
      <p>
        {product.name}: {product.number}
      </p>
      <p>Due Date: {product.due}</p>
      <p>
        <button
          onClick={onDeleteProduct}
        >
          Delete Product
        </button>
      </p>
    </main>
  )
}
