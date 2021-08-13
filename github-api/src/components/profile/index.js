import React from 'react';
import * as S from './styled';

const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage src="https://avatars.githubusercontent.com/u/45425587?v=4" alt="Avatar of user" />
      <S.WrapperInfosUser>
        <div>
          <h1>David Santos</h1>
          <S.WrapperUserName>
            <h3>Username:</h3>
            <span>dmssantos</span>
          </S.WrapperUserName>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>5</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfosUser>
    </S.Wrapper>
  );
};

export default Profile;