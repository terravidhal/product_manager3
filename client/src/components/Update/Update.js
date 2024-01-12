import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Update.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';




const Update = (props) => {
  const { id } = useParams(); 

  const [title, setTitle] = useState(""); 
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate(); // Redirection
  
  useEffect(() => {
      axios.get('http://localhost:8000/api/products/' + id) 
          .then(res => {
              //console.log("res.data.product****",res.data.product);
              setTitle(res.data.product.title); 
              setPrice(res.data.product.price);
              setDescription(res.data.product.description);
          })
          .catch(err => console.log(err))
  }, [])

  const updatePerson = (e) => {
      e.preventDefault();
      axios.patch('http://localhost:8000/api/products/' + id, { 
           title,    
           price, 
           description,     
      })
          .then(res => {
              console.log(res.data);
              navigate("/home"); // Redirection
          })
          .catch(err => console.log(err))
  }

  return (
      <div className="Update">
          <h1>Update a Person</h1>
          <form onSubmit={updatePerson}>
             <div className='field'>
                  <label>title :</label><br/>
                  <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
              </div>
              <div className='field'>
                  <label>price :</label><br/>
                  <input type="number" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
              </div>
              <div className='field'>
                  <label>description :</label><br/>
                  <textarea name="" id="" cols="2" rows="2" value={description} onChange = {(e)=>setDescription(e.target.value)}></textarea>
              </div>
             <input value="update" type="submit"/>
          </form>
          <Link to="/"> 
              Return Home Page! 
          </Link>
      </div>
  )
};

Update.propTypes = {};

Update.defaultProps = {};

export default Update;
