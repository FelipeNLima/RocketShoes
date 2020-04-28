import React from 'react';
import { Ring } from 'react-awesome-spinners';

import { Container } from './styles';

export default function Loading({ loading }) {
  return (
    <Container>{loading && <Ring size={150} color="#A9A9A9" />}</Container>
  );
}
