import {
  ButtonLink,
  ExpandArrow,
  HeaderContainer,
  HeaderLink,
  HeaderWrapper,
  InfoBox,
  Logo,
  NavBar,
  Toxin,
} from './styles'

export const Header = () => {
  // const isUserLogged = useSelector((state) => state.profile.isAuth)
  // const userName = `${useSelector((state) => state.profile.firstName)} ${useSelector(
  //   (state) => state.profile.lastName
  // )}`
  // const dispatch = useDispatch()
  // const hasAccountHandleTrue = () => {
  //   dispatch(setUserStatus('hasAccount', true))
  // }
  // const hasAccountHandleFalse = () => {
  //   dispatch(setUserStatus('hasAccount', false))
  // }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <ButtonLink to='/'>
          <Logo />
          <Toxin />
        </ButtonLink>

        <InfoBox>
          <NavBar>
            <HeaderLink href='#'>О нас</HeaderLink>
            <HeaderLink href='#'>
              Услуги
              <ExpandArrow />
            </HeaderLink>
            <HeaderLink href='#'>Ваканcии</HeaderLink>
            <HeaderLink href='#'>Новости</HeaderLink>
            <HeaderLink href='#'>
              Соглашения
              <ExpandArrow />
            </HeaderLink>
          </NavBar>
        </InfoBox>
        {/* 
          
          {isUserLogged ? (
            <User href='#'>{userName}</User>
          ) : (
            <ButtonBox>
              <ButtonLink to='/study-project-toxin/registration'>
                <Button buttonStyle='white' text='войти' margin='0 20px 0 0' onClick={hasAccountHandleTrue} />
                <Button text='зарегестрироваться' width='196px' onClick={hasAccountHandleFalse} />
              </ButtonLink>
            </ButtonBox>
          )}
        */}
      </HeaderWrapper>
    </HeaderContainer>
  )
}
