

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner,  Card,Container,Button} from 'react-bootstrap';
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import Setproduct from '../store/actions/Setproduct';
import Addproducts from '../store/actions/Addproduct';
import {Link} from 'react-router-dom';

function App() {
 
const dispatch=useDispatch();
const loading=useSelector(state=>state.Setproducts);
const data=useSelector(state=>state.Addproducts.products);

const fetchdata=async()=>{
    dispatch(Setproduct(true));
    const response=await axios.get('https://fakestoreapi.com/products').catch((err)=>{
        console.log(err);
    })

dispatch(Addproducts(response.data))

console.log(response);
dispatch(Setproduct(false));

}

useEffect(()=>{
    
    fetchdata();
    
},[])


    return(
        loading?<div style={{margin:'250px 700px 0px 550px'}}> 
            <Spinner style={{width:'100px',height:'100px'}} animation="border" variant="primary">
                </Spinner>
                <h3>Loading...</h3></div>: 
        <Container style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
        {data.map((val)=>{
            return (
                <Link to={`/view/${val.id}`}>
                <Card  style={{justifyContent:'space-between',alignItems:'center', width: '300px',height:'430px' ,border:'1px solid black',boxShadow:'2px 2px 10px black',margin:'10px 5px 10px 5px'}}>
                <Card.Img style={{width:'200px',height:'200px'}} variant="top" src={val.image} />
                <Card.Body>
                  <Card.Title><h6>{val.title}</h6></Card.Title>
                  <Card.Text>
                  <h3> ${val.price}</h3>
                  </Card.Text>
                  <Button style={{boxShadow:'1px 2px 10px black'}} variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
              </Link>
            )
        })}
   </Container>
       
    )


}

export default App;
