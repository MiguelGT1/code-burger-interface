import styled from 'styled-components'

import Background from '../../assets/aaaa.jpg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}') no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 430px) {
    background-position: left;
  }
`
export const Logoo = styled.img`
  width: 27%;
  @media (max-width: 430px) {
    width: 40%;
  }
  @media (max-width: 395px) {
    width: 33%;
  }
`

export const RegisterImage = styled.img`
  height: 85%;
  @media (max-width: 430px) {
    display: none;
  }
`
export const Img = styled.img``

export const ContainerItens = styled.div`
  border-radius: 0 10px 10px 0;
  background: rgb(139 96 105 / 80%);
  height: 85%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 430px) {
    padding: 25px 10px;
    border-radius: 20px;
    align-items: center;
    background: rgb(139 96 105 / 80%);
    width: 90%;
  }
  @media (max-width: 375px) {
    height: 95%;
  }

  form {
    display: flex;
    flex-direction: column;

    @media (max-width: 430px) {
      align-items: center;
    }
  }

  h1 {
    color: #fff;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 10px;
  }
`

export const Label = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: ${props => (props.error ? '12px' : '28px')};
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.416px;
  height: 38.319px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #fff;
  border: ${props => (props.error ? '2px solid #CC1717;' : 'none')};
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  padding-left: 10px;

  @media (max-width: 430px) {
    width: 330px;
  }
  @media (max-width: 375px) {
    width: 300px;
  }

  @media (max-width: 360px) {
    width: 290px;
  }
`

export const SignInLink = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media (max-width: 430px) {
    text-align: center;
  }

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
