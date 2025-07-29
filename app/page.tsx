'use client';

import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem;
  gap: 3rem;
  background: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DateTimeText = styled.time`
  color: #45505e;
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0;
`;

const DataSourceText = styled.p`
  color: #8c9cad;
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0;
`;

export default function Home() {
  return (
    <Container>
      <LogoSection>
        <Image
          src='/stone-logo.svg'
          alt='Logo da Stone'
          height={81}
          width={163}
          priority
        />
      </LogoSection>

      <InfoSection>
        <DateTimeText dateTime='2021-01-14T21:00:00Z'>
          14 de janeiro de 2021 | 21:00 UTC
        </DateTimeText>
        <DataSourceText>
          Dados de câmbio disponibilizados pela Morningstar.
        </DataSourceText>
      </InfoSection>
    </Container>
  );
}
