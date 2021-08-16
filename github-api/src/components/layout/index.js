import * as S from './styled';

export default function Layout({children}) {
  return(
    <S.WrapperLayout>
      <header>Header</header>
      {children}
    </S.WrapperLayout>
  )
}