import React from 'react';

export default function MoviesRented({ categories, setUsers, users, id, setCategories }) {
  const rentedUser = users.find(user => user.id == id);

  if (!rentedUser) {
    return <div>User not found</div>;
  }
console.log(rentedUser)
  const rentedCategory = categories.find(category => category.title == rentedUser.title);

  const handleSetCategories = () => {
    setCategories([rentedCategory]);
  };

  console.log(categories);

  return (
    <div className='textCol'>
     {categories.map((category, i) => (
  <div key={i}>
     {category.isRented ? (
      <div className="card category-card" style={{ backgroundImage: `url(${category.img})` }}>
        {category.id} 
      </div>
    ) : null}
  </div>
))}

    </div>
  );
}
