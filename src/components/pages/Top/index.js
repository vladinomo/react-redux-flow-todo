import React from 'react';

import AppHeader from '../../organisms/AppHeader/index';
import Layout from '../../templates/DefaultLayout';

const Top = () => (
  <Layout>
    <AppHeader />
    <TopMain />
  </Layout>
);

const TopMain = () => (
  <div
    style={{
      fontSize: 'large',
      height: '100% - 150px',
      width: '100%',
    }}
  >
    <p>
      To get started, edit <code> src / App.js </code> and save to reload.{' '}
    </p>{' '}
    <p> てすとてすと </p>{' '}
  </div>
);

export default Top;
