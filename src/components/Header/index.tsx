import React from 'react';

import { Container, Description, Text, Title } from './styles';

interface IHeader {
  title: string;
  description?: string;
  isDescriptionError?: boolean;
}

const Header: React.FC<IHeader> = ({
  title,
  description,
  isDescriptionError,
}) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
      </Container>

      {description && (
        <Description hasError={isDescriptionError}>
          <Text>{description}</Text>
        </Description>
      )}
    </>
  );
};

export { Header };
