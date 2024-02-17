import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #f3afbc;
    color: #efefef;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
  }
  .rec.rec-arrow:hover {
    border: 2px solid #763643;
    background-color: #efefef;
    color: #f3afbc;
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }

  .hTiYWl {
    box-shadow: 0 0 1px 3px #763643;
    background-color: #f3afbc;
  }
`

export const CategoryImg = styled.img`
  width: 370px;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`

export const Button = styled(Link)`
  margin-top: 16px;
  border-radius: 8px;
  background: #763643;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  border: none;

  color: var(--Theme-White, #fff);
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 24px */
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
