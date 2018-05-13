import React from 'react';
import styled from 'styled-components';

export default function DefaultLayout({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  background-color: #eee;
  width: 100%;
  height: 100%;
  text-align: center;
`;
