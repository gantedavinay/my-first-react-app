import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}){
    return(
        <div className=" col-12 col-md-6 mt-1">
                            <Card>
                                <CardImg top src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
    );
}

function RenderComments({comments}){
        return(
            <div className="col-12 col-md-5 mt-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">   
                    {/* {comments.length} */}
                    {comments.map((comment) => {
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}  </p>
                                </li>
                            );
                    })}
                </ul>                
            </div>
        );
}

const DishDetail = (props) => {
    if (props.dish != null)
        return(
            <div className="container">
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu"> Menu </Link></BreadcrumbItem>
                        <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    else
            return(
              <div></div>  
            );
};


export default DishDetail;



// class DishDetail extends Component{

//     constructor(props){
//         super(props);
//         if(this.props.dish != null){
//             console.log(this.props.dish.name);
//         }
        
//     }


//     render (){
       
//             if(this.props.dish != null){
//                 const comments = this.props.dish.comments.map( (comment) =>{
//                     return(
//                             <div>
//                                 <p>{comment.comment}</p>
//                                 <p>-- {comment.author} ,
//                                 {/* {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>  */}
//                                     {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))} </p>           
//                             </div>
//                         )
//                        }
//                 );
//                 return(
//                 <div className="container">
//                     <div className="row">
                    
//                         <div className=" col-12 col-md-6 mt-1">
//                             <Card>
//                                 <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
//                                 <CardBody>
//                                     <CardTitle>{this.props.dish.name}</CardTitle>
//                                     <CardText>{this.props.dish.description}</CardText>
//                                 </CardBody>
//                                 {/* <CardImg top src='public/assets/images/buffet.png' alt='vinay' /> */}
//                             </Card>
//                         </div>
//                         <div className="col-12 col-md-6 mt-1">
//                             {/* <Card>
//                                 <CardBody>
//                                 <CardTitle><h4>Comments</h4></CardTitle>
//                                 <CardText>{comments}</CardText> 
//                                 </CardBody>
//                             </Card> */}
//                                 <h4>Comments</h4>
//                                 {comments}

//                         </div>
//                     </div>
//                 </div>
//                     )
//             }
//             else{
//                 return(<div></div>);
//             }
           
//         };
// }
