import React from 'react';
import './CategoryList.css';
import { CgAdd } from "react-icons/cg";
import { GrSubtractCircle } from "react-icons/gr";


const Movie = ({ setCategories, categoryData, setUsers, users, id }) => {
  const { title, year, img, isRented } = categoryData;

  const handleAddCategory = () => {
    // Assuming setCategories is a function that updates state
    setCategories((prevCategories) => {
      // Create a new array with the updated categoryData
      return prevCategories.map((category) => {
        if (category.title === title) {
          if(!(category.isRented)){
          // Update the isRented property for the clicked category

          // Assuming users is an array of objects with id and title properties
          setUsers((prevUsers) => {
            return prevUsers.map((user) => {
              if (user.id == id) {
                // Update the user's title property in an immutable way
                return { ...user, title: [...user.title, title] };
              }
              return user;
            });
          });

          return { ...category, isRented: true };
        }
        else {
          setUsers((prevUsers) => {
            return prevUsers.map((user) => {
              if (user.id == id) {
                // Update the user's title property in an immutable way
                return { ...user, title: [...user.title, ''] };
              }
              return user;
            });
          });

          return { ...category, isRented: false };

        }
      }
        return category;
      });
    });
  };

  return (
    <>
      <div className="card category-card" style={{ backgroundImage: `url(${img})` }}>
      </div>
      <h3 onClick={handleAddCategory}>
      {year} {isRented ? 'rented' : null} {isRented ?  <GrSubtractCircle /> :<CgAdd />
}
        
      </h3>
    </>
  );
}

export default Movie;
