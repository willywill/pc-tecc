import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';

const Main = () => <div className="w-200 bg-gray-50 text-center text-2xl" style={{ gridArea: 'main' }}>Main</div>;
const Sidebar = () => <div className="w-200 bg-white text-center text-2xl" style={{ gridArea: 'sidebar' }}>Sidebar</div>;

const App = () => (
  <Layout>
    <Header />
    <Main />
    <Sidebar />
    <Footer />
  </Layout>
);

export default App;
