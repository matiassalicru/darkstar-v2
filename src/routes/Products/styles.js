import styled from 'styled-components'

export const SCLinks = styled.ul`
   display: flex;
   flex-direction: column;
   margin: 0;
   padding: 0;
  a {
    text-decoration: none;
  }
  li {
    margin: 10px 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      color: red;
    }
  }
`
