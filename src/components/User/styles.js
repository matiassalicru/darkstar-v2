import styled from 'styled-components'

export const SCList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const SCItem = styled.li`
  margin: 5px 10px;
  font-size: 25px;
  cursor: pointer;
  transition: fill 0.3s;
  
  &:hover {
    fill: grey;
  }
`
