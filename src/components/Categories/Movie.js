import React from 'react';
import './CategoryList.css';
import { CgAdd } from "react-icons/cg";
import { GrSubtractCircle } from "react-icons/gr";

const Movie = ({ setCategories, categoryData, setUsers, users, id }) => {
  const { title, year, img, isRented,price } = categoryData;
const {balance}=users
  const handleAddCategory = () => {
    // Assuming setCategories is a function that updates state
    setCategories((prevCategories) => {
      // Create a new array with the updated categoryData
      return prevCategories.map((category) => {
        if (category.title === title) {
          if(!(category.isRented)){
            console.log("first")

          setUsers((prevUsers) => {
            return prevUsers.map((user) => {
              if (user.id == id) {
             
                return { ...user, balance:user.balance-price };
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
                return { ...user,  balance:user.balance+price };
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
    <div >
      <div className="card category-card" style={{ backgroundImage: `url(${img})` }}>
      </div>
      <h3 id='font1'  onClick={handleAddCategory}>
      {year} {balance} {isRented ? 'rented' : null} {isRented ?  <GrSubtractCircle /> :<CgAdd />}
        
      </h3>
    </div>
  );
}

export default Movie;
