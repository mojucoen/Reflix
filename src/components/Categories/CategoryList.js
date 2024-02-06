import React from 'react';
import Movie from './Movie';
import { Link } from 'react-router-dom';
import { SearchFeature } from '../Entities/SearchFeature';
import { useParams } from 'react-router';
import MoviesRented from './MoviesRented';

const CategoryList = ({ categories, setCategories, categoriesData, users, setUsers }) => {
  const { ID } = useParams();
  const entity = users.find(entity => entity.id === parseInt(ID, 10));

  if (!entity) {
    return <p>User not found</p>;
  } else {
    const { name, balance } = entity;

    return (
      <div className='sorting'>
        <SearchFeature setCategories={setCategories} categories={categories} />
        <div className="category-rent">Welcome {name}, your balance is {balance}
        
        <MoviesRented categories={categories} setUsers={setUsers} users={users} id={ID} setCategories={setCategories} />
        </div>
        <div className="category-list">
          {categories.map((category, i) => (
            <Link key={i} to={`/movies/${category.id}`}>
              <Movie setCategories={setCategories} categoryData={category} setUsers={setUsers} users={users} id={ID} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default CategoryList;
