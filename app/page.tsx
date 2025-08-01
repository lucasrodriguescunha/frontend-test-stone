'use client';

import styled from 'styled-components';
import Header from './components/Header';
import ContentComponent from './components/Content';

const Container = styled.div`
  height: 100vh;
  background: #ffffff;
  background-image: url('/background.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
  padding: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    background-image: none;
  }
`;

export default function Home() {
  return (
    <Container>
      <Header />
      <ContentComponent />
    </Container>
  );
}
