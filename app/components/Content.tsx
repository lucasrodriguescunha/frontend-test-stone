'use client';

import styled from 'styled-components';

const Content = styled.main`
  background: #ffffff;
  padding: 6.5625rem 6.5625rem 0 0;
`;

const CurrencyForm = styled.section`
  display: flex;
  width: 22.5rem;
  height: 5.4375rem;
  gap: 1.5rem;
`;

const FieldGroup = styled.article`
  display: flex;
  flex-direction: column;
`;

const FieldLabel = styled.label`
  color: #2E3742;
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0;
  padding-bottom: 0.625rem;
`;

const FieldInput = styled.input`
  width: 10.5rem;
  height: 3.5rem;
  border-radius: 0.250rem;
  border: 1px solid #D7E0EB;
  padding: 1rem;
  box-shadow: 0px 8px 4px 0px #0D111B14;

  &::placeholder {
    color: #677481;
    font-size: 1rem;
    font-weight: 400;
    /* letter-spacing: 0.075rem; */
  }

  :hover {
    border: transparent;
  }
`;

export default function ContentComponent() {
  return (
    <Content>
      <CurrencyForm>
        <FieldGroup>
          <FieldLabel>
            Dólár
          </FieldLabel>
          <FieldInput placeholder='$1,00' />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>
            Taxa do Estado
          </FieldLabel>
          <FieldInput placeholder='0%' />
        </FieldGroup>
      </CurrencyForm>
    </Content>
  );
}