// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// actions
import * as CounterAction from '../../../reducers/counter';

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
    <ButtonContainer>
      <ButtonWrapper>
        <Button onClick={() => props.add(3)}> Add 3 </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button onClick={() => props.increase()}> increase! </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button onClick={() => props.decrease()}> decrease! </Button>
      </ButtonWrapper>
    </ButtonContainer>
    <p> {props.value} </p>
  </Wrapper>
);

const Wrapper = styled.div`
  font-size: large;
  height: 100% - 150px;
  width: 100%;
`;

const ButtonContainer = styled.div``;

const ButtonWrapper = styled.div`
  padding: 20px;
  display: inline-block;
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
  width: 100px;
  :active {
    -ms-transform: translateY(4px);
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    border-bottom: none;
  }
`;

// enhancer
const enhancer = connect(mapStateToProps, {
  add: CounterAction.add,
  increase: CounterAction.increase,
  decrease: CounterAction.decrease,
});

export default enhancer(CounterPage);
