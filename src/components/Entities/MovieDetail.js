import React from 'react';
import { useParams } from 'react-router';
import './MovieDetail.css';

const MovieDetail = ({ categories }) => {
  const { ID } = useParams();
 console.log(ID)
  const entity = categories.find(entity => entity.id == ID);
  console.log()

  if (!entity) {
    return <p>Entity not found</p>;
  }
  const { title, year, img } = entity;
  return (
    <div className="entity">
  {title}
    <div className="card category-card" style={{ backgroundImage: `url(${img})` }}>
    {year}

    </div>

    </div>
  );


  
  
}

export default MovieDetail;
