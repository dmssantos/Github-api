import * as S from './styled';
import RepositoryItem from '../repository-item/index';

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem 
          name="30-Days-Of-React" 
          linkToRepo="https://github.com/dmssantos/30-Days-Of-React" 
          fullName="dmssantos/30-Days-Of-React"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem 
          name="alexandresanlim" 
          linkToRepo="https://github.com/dmssantos/alexandresanlim"
          fullName="dmssantos/alexandresanlim"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>panel Starred</S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories;