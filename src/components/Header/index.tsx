import logoImage from '@assets/logo.png';
import { BackIcon, Container, Logo } from './styles';


export function Header() {
  return(
    <Container>
      <BackIcon />
      <Logo source={logoImage}/>
    </Container>
  )
}