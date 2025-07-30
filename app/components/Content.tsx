'use client';

import styled from 'styled-components';

const Content = styled.main`
  width: 360px;
  height: 268px;
  background: #ffffff;
  padding: 6.5625rem 6.5625rem 0 0;
`;

const CurrencyForm = styled.section`
  display: flex;
  width: 22.5rem;
  height: 5.4375rem;
  gap: 1.5rem;
`;

const PurchaseTypeForm = styled.section`
  display: flex;
  width: 22.5rem;
  height: 5.4375rem;
  padding-top: 2rem;
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

const NumberFieldInput = styled.input`
  color: #2E3742;
  font-size: 1rem;
  font-weight: 400;
  width: 10.5rem;
  height: 3.5rem;
  border-radius: 0.250rem;
  padding: 1rem;
  border: 1px solid #D7E0EB;
  box-shadow: 0px 8px 4px 0px #0D111B14;

  &::placeholder {
    color: #8C9CAD;
    font-size: 1rem;
    font-weight: 400;
  }

  :hover {
    border: transparent;
  }
`;

const RadioFieldInput = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  border: 0.125rem solid #8C9CAD;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  position: relative;

  &:checked {
    border-color: #008B57;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.800rem;
    height: 0.800rem;
    background: #008B57;
    border-radius: 50%;
  }
  `;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  color: #2E3742;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2rem;
`;

const ConvertButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 149px;
  height: 56px;
  border-radius: 0.500rem;
  background: #8C9CAD;
  color: white;
  border: 1px solid #008B57;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #006B44;
  }
`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export default function ContentComponent() {
  return (
    <Content>
      <CurrencyForm>
        <FieldGroup>
          <FieldLabel>
            Dólár
          </FieldLabel>
          <NumberFieldInput type='number' placeholder='$1,00' />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>
            Taxa do estado
          </FieldLabel>
          <NumberFieldInput type='number' placeholder='0%' />
        </FieldGroup>
      </CurrencyForm>

      <PurchaseTypeForm>
        <FieldGroup>
          <FieldLabel>
            Tipo de compra
          </FieldLabel>

          <RadioGroup>
            <RadioLabel>
              <RadioFieldInput type='radio' name='purchaseType' value='dinheiro' />
              Dinheiro
            </RadioLabel>
            <RadioLabel>
              <RadioFieldInput type='radio' name='purchaseType' value='cartao' />
              Cartão
            </RadioLabel>
          </RadioGroup>
        </FieldGroup>
      </PurchaseTypeForm>

      <ButtonContainer>
        <ConvertButton type='submit'>
          <Icon src='/transfer.svg' />
          Converter
        </ConvertButton>
      </ButtonContainer>
    </Content>
  );
}