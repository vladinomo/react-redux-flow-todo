// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// reducer
// import { counter } from '../../../reducers';

// components
import AppHeader from '../../organisms/AppHeader/index';
import Layout from '../../templates/DefaultLayout';

const mapStateToProps = ({ counter }) => ({
  value: counter.value,
});

const CounterPage = (props: any) => (
  <Layout>
    <AppHeader />
    <CounterMain {...props} />
  </Layout>
);

const CounterMain = (props: any) => (
  <Wrapper>
    <ButtonWrapper>
      <Button>increase!</Button>
    </ButtonWrapper>
    <p> {props.value} </p>
  </Wrapper>
);

const Wrapper = styled.div`
  font-size: large;
  height: 100% - 150px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
  :active {
    -ms-transform: translateY(4px);
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    border-bottom: none;
  }
`;

// enhancer
const enhancer = connect(mapStateToProps);

export default enhancer(CounterPage);
