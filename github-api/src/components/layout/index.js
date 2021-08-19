import * as S from './styled';
import Header from '../header/index';

export default function Layout({children}) {
  return(
    <S.WrapperLayout>
      <Header></Header>
      {children}
    </S.WrapperLayout>
  )
}