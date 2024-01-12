import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Detail.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';




const Detail = (props) => {

  const [Oneproduct, setPerson] = useState({})
  const {id} = useParams(); 
 

  useEffect(() => {
      axios.get("http://localhost:8000/api/products/" + id)
          .then( res => {
              setPerson(res.data.product);
          })
          .catch( err => console.log(err) );
  }, [id]); // pas tellement necessaire car le composant s'affich sur une nvelle page, donc elle est actualisée par la même occasion

  return (
      <div className="Detail">
        <h1>Page details :</h1>
        <div className="fields">
            <p><span className='infos'>Title:</span> {Oneproduct.title}</p>
            <p><span className='infos'>Price:</span> {Oneproduct.price}</p>
            <p><span className='infos'>Description:</span> {Oneproduct.description}</p>
        </div>
        <Link to="/"> 
              Return Home Page! 
        </Link>
      </div>
  );
}



Detail.propTypes = {};

Detail.defaultProps = {};

export default Detail;
