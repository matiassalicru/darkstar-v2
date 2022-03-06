import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import { getProducts } from '../../data'
import { QueryNavLink } from '../utils/utils'

// styles
import { SCLinks } from './styles'

export const Products = () => {
  const products = getProducts()
  const [searchParams, setSearchParams] = useSearchParams()

  const onChangeParams = (event) => {
    const filter = event.target.value
    if (filter) {
      setSearchParams({ filter: filter })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem'
        }}
      >
        <input
          value={searchParams.get('filter') || ''}
          onChange={onChangeParams}
          placeholder='Filtros'
        />
        <SCLinks>
          {products
            .filter((invoice) => {
              const filter = searchParams.get('filter')
              if (!filter) return true
              const name = invoice.name.toLowerCase()
              return name.includes(filter.toLowerCase())
            })
            .map((product) => (
              <QueryNavLink
                className={({ isActive }) => (isActive ? 'current' : 'none')}
                to={`/products/${product.number}`}
                key={product.number}
              >
                <li>
                  {product.name}
                </li>
              </QueryNavLink>
            ))}
        </SCLinks>
      </nav>
      <Outlet />
    </div>
  )
}
