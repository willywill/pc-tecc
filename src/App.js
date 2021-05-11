import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import NewsFeed from './components/NewsFeed';

const App = () => (
  <Layout>
    <Header />
    <NewsFeed />
    <Sidebar />
    <Footer />
  </Layout>
);

export default App;
