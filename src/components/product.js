import React, { useEffect } from 'react';
import Setclickedproduct from '../store/actions/Setclikedproduct';
import Setproduct from '../store/actions/Setproduct';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner,Container,Button,Row,Col} from 'react-bootstrap';


function Product(props) {
    const loading=useSelector(state=>state.Setproducts);
    const product=useSelector(state=>state.Setclickedproducts.product);
    const {title,price,description,category,image}=product;
const dispatch=useDispatch();
const {match}=props;
console.log(match.params.id);

const fetchdata=async()=>{
    dispatch(Setproduct(true));
    const response=await axios.get(`https://fakestoreapi.com/products/${match.params.id}`).catch((err)=>{
        console.log(err);
    })

dispatch(Setclickedproduct(response.data))

console.log(response.data);
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
            <Container md>
                <Row>
                    <Col><img src={image} style={{marginTop:'20px', border:'2px solid grey',boxShadow:'1px 0px 10px black', width:'400px',height:'550px'}}></img></Col>
                    <Col>
                    <Row style={{margin:'170px 5px 5px 10px'}}><h2>Details:</h2></Row>
                    <Row style={{margin:'20px 5px 5px 10px'}}><h5>{title}</h5></Row>
                    <Row style={{margin:'20px 5px 5px 10px'}}> <h1>${price}</h1></Row>
                    <Row style={{margin:'20px 5px 5px 10px'}}><h4>{category}</h4></Row>
                    <Row><Button style={{width:'170px' ,margin:'20px 5px 5px 10px',height:'50px',boxShadow:'1px 0px 15px black'}}>Buy Now</Button></Row>
                    </Col>
                </Row>
                <Row><h2>  Description:</h2></Row>
                <Row style={{margin:'20px 0px 5px 0px'}}><h6>{description}</h6></Row>
            </Container>
       
    )


}

export default Product;
