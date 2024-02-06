import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CATEGORIES, USERS } from './Constants';
import HogwartNavbar from './components/Header/HogwartNavbar';
import MovieDetail from './components/Entities/MovieDetail';
import CategoryList from './components/Categories/CategoryList';
import Landing from './components/Categories/Landing';

const App = () => {
  const [categories, setCategories] = useState(CATEGORIES);
  const categoriesData=CATEGORIES
  const [users, setUsers] = useState(USERS);

  return (
    <Router>
      <div className="App">
        <HogwartNavbar  />
        <Routes>
          <Route path="/" element={<Landing users={users} />} />
          <Route path="/catalog/:ID" element={<CategoryList categories={categories} setCategories={setCategories} categoriesData={categoriesData} setUsers={setUsers} users={users} />} />
          <Route path="/movies/:ID" element={<MovieDetail categories={categories} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
