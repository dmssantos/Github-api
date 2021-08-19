import * as S from './styled';
import { useGithub } from '../../hooks/github-hooks';
import { useState } from 'react';

const Header = () => {
  const { getUser } = useGithub();
  const {usernameForSearch, setUsernameForSearch} = useState(undefined)

  const submitGetUser = () => {
    if(!usernameForSearch) return;
    return getUser(usernameForSearch);
  }

  return(
    <header>
      <S.Wrapper>
        <input type="text" placeholder="Digite o userName para perquisar..." onChange={submitGetUser} />
        <button type="submit">
          <span>BUSCAR</span>
        </button>
      </S.Wrapper>
    </header>
  )
}
export default Header;