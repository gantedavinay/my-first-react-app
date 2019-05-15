import React from 'react';
import {Card, CardImg, CardTitle, CardSubtitle, CardText , CardBody} from 'reactstrap'; 

function RenderCard({item}){
  return(
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name == 'Alberto Somayya' ? 'Ganteda Vinay':item.name}</CardTitle>
        {item.designation ? <CardSubtitle>{item.designation == 'Executive Chef' ? 'The Great Lover':item.designation}</CardSubtitle>:null }
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
    return(
      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <RenderCard item={props.dish} />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.promotion} />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.leader} />
          </div>
        </div>
      </div>

    );
}

export default Home; 

// export const Home =() => {
//     <div className="container">
//         <div className="row">
//             <div className="col-sm-6">
//                 <h3>Home</h3>
//             </div>
//         </div>
//     </div>
// }