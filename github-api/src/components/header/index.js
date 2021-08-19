import * as S from './styled';

const Header = () => {
  return(
    <header>
      <S.Wrapper>
        <input type="text" placeholder="Digite o userName para perquisar..." />
        <button type="submit">
          <span>BUSCAR</span>
        </button>
      </S.Wrapper>
    </header>
  )
}
export default Header;