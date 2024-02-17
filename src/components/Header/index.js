import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined'
import React from 'react'
import { useHistory } from 'react-router-dom'

import Logo from '../../assets/logoo.png'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  ContainerText,
  Line,
  PageLinkExit,
} from './styles'

export function Header() {
  const { logout, userData } = useUser()
  const {
    push,
    location: { pathname },
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }

  return (
    <Container>
      <img className="logo" src={Logo} style={{ width: '73px' }} />
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('/produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => push('/carrinho')}>
          <ShoppingBasketOutlinedIcon style={{ fontSize: '30px' }} />
        </PageLink>
        <Line></Line>
        <PageLink>
          <AccountCircleOutlinedIcon style={{ fontSize: '30px' }} />
        </PageLink>

        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
