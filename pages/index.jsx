// pages/index.js

import React from 'react';
import NavigationBar from './components/NavigationBar';  // assuming your NavigationBar component is located in /components

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <header>
        <h1>Welcome to AI Finance Tracker</h1>
      </header>
      <main>
        <p>This is an AI powered personal finance tracker web application.</p>
        <p>Here, you can keep track of your income, expenses, savings and investments.</p>
      </main>
    </div>
  )
}

export default Home;
