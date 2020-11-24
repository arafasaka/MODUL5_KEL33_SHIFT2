import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Pulsa from '../Pulsa/Pulsa';
//const defaultImg = "https://puu.sh/GO701.png";
//const chamdanImg = "https://puu.sh/GO6Yy.png"

const Container = styled.div`
background-color: #F5F5F5;
border-radius: 20px;
box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
color: #B3B8CD;
position: relative;
width: 50%;
margin: auto;
margin-top: auto;
@media screen and (max-width: 500px) {
       margin: auto;
}
`
const Image = styled.img`

  border: 1px solid #03bfcb;
  border-radius: 50%;
  padding: 7px;
  width: 20%;
  height: auto;
  margin: 20px;
  
`
const Title = styled.h5`
  margin: auto;
  color:black;
  font-size:1vw
`


const Rowcard = styled.div
`
    display: table;
    width: 90%;
    table-layout: fixed;
    border-spacing: 0px;
    text-align: center;
`

const ColumnCard = styled.div
`
    display: table-cell;
    text-align: center;

`
const ButtonLogin = styled.button
`
  background: #282c34;
  border-radius: 5px;
  border: none;
  color: white;
  margin:15px;
  font-size:15px;
  &:hover {
    border:solid 2px #03bfcb;
    cursor: pointer;
    
  }
`

function CardInfo(props){
    return(
        <div>
            <Image src={props.src}/>
            <Image src={props.src2}/><br/>
            <a>{props.kelompok}</a><br/>
            <a>{props.nim}</a>
        </div>

    )
}


export default function index() {
  return (
<Router>
      <Rowcard>
          <ColumnCard>
          <Container>
            <Title>
                <CardInfo kelompok="Kelompok 33" nim="PULSA PRO DATABASE" src="https://puu.sh/GO701.png" src2="https://puu.sh/GO6Yy.png"/>
            </Title>
            <Link to="/Pulsa">
            <ButtonLogin>
               LIHAT PULSA PRO
           </ButtonLogin>           
            </Link>
            </Container>
          </ColumnCard>
      </Rowcard>
      <Switch>
        <Route path="/Pulsa" exact component={Pulsa}/>
        </Switch>
</Router>   
  );
}
