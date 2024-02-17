import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  padding: 10px;
  width: max-content;
  @media (max-width: 430px) {
    padding: 0px;
    width: 100%;
  }
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  padding: 10px;
  border-bottom: 1px solid #b5b5b5;
  @media (max-width: 430px) {
    grid-gap: 29px;
  }
  p {
    font-size: 16px;
    color: #b5b5b5;

    @media (max-width: 430px) {
      font-size: 13px;
    }
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: max-content;
  padding: 10px;
  grid-gap: 10px 15px;
  @media (max-width: 430px) {
    width: auto;
  }

  img {
    border-radius: 10px;
    width: 120px;
    @media (max-width: 430px) {
      width: 67px;
    }
  }
  p {
    font-size: 16px;
    color: black;
    @media (max-width: 430px) {
      font-size: 13px;
    }
  }
  .quantity-Container {
    display: flex;
    gap: 20px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
    p {
      margin-top: 5px;
    }
  }
`

export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`
