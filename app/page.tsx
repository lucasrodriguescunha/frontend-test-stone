'use client';

import styled from 'styled-components';

// Componente estilizado simples
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
`;

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #0051a0;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 112, 243, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export default function Home() {
  return (
    <Container>
      <Title>Hello Styled Components!</Title>
      <Subtitle>
        Agora você tem o Styled Components configurado e funcionando! 
        Este é um exemplo de como criar componentes estilizados com CSS-in-JS.
      </Subtitle>
      <Button onClick={() => alert('Styled Components funcionando!')}>
        Clique aqui para testar
      </Button>
    </Container>
  );
}