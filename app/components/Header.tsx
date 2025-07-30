'use client';

import Image from 'next/image';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 33.625rem;
  height: 5.0625rem;
  gap: 3rem; 

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }
`;

const Logo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DateTime = styled.time`
  color: #45505e;
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0;
`;

const DataSource = styled.p`
  color: #8c9cad;
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0;
`;

export default function HeaderComponent() {
  const now = new Date();

  return (
    <Header>
      <Logo>
        <Image
          src='/stone-logo.svg'
          alt='Logo da Stone'
          height={81}
          width={163}
          priority
        />
      </Logo>

      <Info>
        <DateTime dateTime={now.toISOString()}>
          {now.toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'UTC'
          })} | {now.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'UTC'
          })} UTC
        </DateTime>
        <DataSource>
          Dados de câmbio disponibilizados pela Morningstar.
        </DataSource>
      </Info>
    </Header>
  );
}
