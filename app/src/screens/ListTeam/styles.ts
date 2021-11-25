import styled from 'styled-components';

interface ThumbnailData {
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const Container = styled.main``;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const urlImg = (props: ThumbnailData) =>
  `${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Card = styled.div`
  background: #f1f1f1;
  height: 450px;
  width: 300px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);

  h2,
  p {
    padding: 5px;
    text-align: justify;
  }

  div#img {
    height: 400px;
    width: 100%;
    background: url(${urlImg}) no-repeat center;
    background-size: cover;
    transition: all 1s;
  }

  &:hover {
    div#img {
      height: 100px;
    }
  }
`;
