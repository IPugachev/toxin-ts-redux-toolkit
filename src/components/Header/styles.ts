import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as IconLogo } from '../../assets/icons/logo.svg'
import { ReactComponent as ToxinText } from '../../assets/icons/toxin.svg'
import { ReactComponent as ArrowIcon } from '../../assets/icons/expand-arrow.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
`
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 140px;
  /* min-width: 1200px;
  max-width: 1440px; */
  width: 100%;
`

export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
`

export const Logo = styled(IconLogo)`
  margin-right: 12.5px;
`
export const Toxin = styled(ToxinText)``

export const InfoBox = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.darkShade50};
`
export const NavBar = styled.nav`
  display: flex;
  align-items: center;
`
export const HeaderLink = styled.a`
  margin-right: 20px;

  &:first-child {
    font-weight: bold;
  }
`
export const ExpandArrow = styled(ArrowIcon)`
  width: 24px;
`

export const ButtonBox = styled.div``
export const User = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 17px;
  padding-left: 20px;
  height: 30px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkShade50};
  border-left: 1px solid rgba(31, 32, 65, 0.1);
`
