import logoImage from '@assets/logo.png';
import { BackButton, BackIcon, Container, Logo } from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  return (
    <Container>
      {
        showBackButton &&
        <BackButton
          onPress={() => navigation.navigate('groups')}
        >
          <BackIcon />
        </BackButton>
      }

      <Logo source={logoImage} />
    </Container>
  )
}