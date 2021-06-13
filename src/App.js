import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import NewsFeed from './components/NewsFeed';
import BlogPost from './components/BlogPost';

const App = () => (
  <Router>
    <Layout>
      <Header />
      <Switch>
        <Route exact path="/">
          <NewsFeed />
          <Sidebar />
        </Route>
        <Route path="/blog/post">
          <Sidebar />
          <BlogPost />
        </Route>
      </Switch>
      <Footer />
    </Layout>
  </Router>
);

export default App;
