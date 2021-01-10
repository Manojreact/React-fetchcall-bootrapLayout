import React, { Component } from 'react';
import HtmlToReact from "react-html-parser";
import moment from 'moment';

import '../../assets/css/style.css';

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "",
     

    };
  }


    componentDidMount() {
  


      fetch('http://wpdemo.devsdrop.studio/wp-json/wp/v2/posts', {
        method: "GET",
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          if ((data)) {
          
            this.setState({post:data})

          // this.setState({allAccountsTypes:fruits})

          const test = () => new Promise((result, reject) => {
            const time = new Date().getTime() + (3 * 1000);
        
            console.info('Test start...');
        
            while (new Date().getTime() < time) {
              // Waiting...
            }
        
            console.info('Test finish...');
          });
        
          test()
            .then(() => console.info('Then'))
            .finally(() => console.info('Finally'));
        
          console.info('Finish!');

          }


        });


    }



    render() {
var post=this.state.post;
        return (
            <div>
                <div>
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />                        
        </button>
        <a className="navbar-brand" href="#myPage">Logo</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#myPage">HOME</a></li>
          <li><a href="#band">BAND</a></li>
          <li><a href="#tour">TOUR</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">MORE
              <span className="caret" /></a>
            <ul className="dropdown-menu">
              <li><a href="#">Merchandise</a></li>
              <li><a href="#">Extras</a></li>
              <li><a href="#">Media</a></li> 
            </ul>
          </li>
          <li><a href="#"><span className="glyphicon glyphicon-search" /></a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    {/* Indicators */}
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to={0} className="active" />
      <li data-target="#myCarousel" data-slide-to={1} />
      <li data-target="#myCarousel" data-slide-to={2} />
    </ol>
    {/* Wrapper for slides */}
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <img src="https://www.w3schools.com/bootstrap/chicago.jpg" alt="New York" width={1200} height={700} />
        <div className="carousel-caption">
          <h3>New York</h3>
          <p>The atmosphere in New York is lorem ipsum.</p>
        </div>      
      </div>
      <div className="item">
        <img src="https://www.w3schools.com/bootstrap/ny.jpg" alt="Chicago" width={1200} height={700} />
        <div className="carousel-caption">
          <h3>Chicago</h3>
          <p>Thank you, Chicago - A night we won't forget.</p>
        </div>      
      </div>
      <div className="item">
        <img src="https://www.w3schools.com/bootstrap/la.jpg" alt="Los Angeles" width={1200} height={700} />
        <div className="carousel-caption">
          <h3>LA</h3>
          <p>Even though the traffic was a mess, we had the best time playing at Venice Beach!</p>
        </div>      
      </div>
    </div>
    {/* Left and right controls */}
    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
 {/* Container (TOUR Section) */}
  <div id="tour" className="bg-1">
    <div className="container">
   
      <div className="row text-center">

        {post&&post.map((item)=>{
          // console.log("gsdg",item.content.rendered=='undefined'?'':item.content.rendered)
          console.log("gsdg",item.content.rendered=='undefined'?'':item.content.rendered)
console.log("uytyt",item.title.rendered=='undefined'?'':item.title.rendered)

          return(
            <div className="col-sm-4">
            <div className="thumbnail">
            <p className="sub-text" >{HtmlToReact(item.content.rendered)}</p>
  
              {/* <img src={this.state.post} alt="Paris" width={400} height={300} /> */}
              <p><strong>{item.title.rendered} 
</strong></p>
              <p>{moment(item.date).format('MMMM Do YYYY, h:mm:ss a')} </p>
              <button className="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
            </div>
          </div>
          )
        })}
       
     
  </div>
    </div>
    {/* Modal */}
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">×</button>
            <h4><span className="glyphicon glyphicon-lock" /> Tickets</h4>
          </div>
          <div className="modal-body">
            <form role="form">
              <div className="form-group">
                <label htmlFor="psw"><span className="glyphicon glyphicon-shopping-cart" /> Tickets, $23 per person</label>
                <input type="number" className="form-control" id="psw" placeholder="How many?" />
              </div>
              <div className="form-group">
                <label htmlFor="usrname"><span className="glyphicon glyphicon-user" /> Send To</label>
                <input type="text" className="form-control" id="usrname" placeholder="Enter email" />
              </div>
              <button type="submit" className="btn btn-block">Pay 
                <span className="glyphicon glyphicon-ok" />
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-danger btn-default pull-left" data-dismiss="modal">
              <span className="glyphicon glyphicon-remove" /> Cancel
            </button>
            <p>Need <a href="#">help?</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Container (Contact Section) */}
  <div id="contact" className="container">
    <h3 className="text-center">Contact</h3>
    <p className="text-center"><em>We love our fans!</em></p>
    <div className="row">
      <div className="col-md-4">
        <p>Fan? Drop a note.</p>
        <p><span className="glyphicon glyphicon-map-marker" />Chicago, US</p>
        <p><span className="glyphicon glyphicon-phone" />Phone: +00 1515151515</p>
        <p><span className="glyphicon glyphicon-envelope" />Email: mail@mail.com</p>
      </div>
      <div className="col-md-8">
        <div className="row">
          <div className="col-sm-6 form-group">
            <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
          </div>
          <div className="col-sm-6 form-group">
            <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
          </div>
        </div>
        <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows={5} defaultValue={""} />
        <br />
        <div className="row">
          <div className="col-md-12 form-group">
            <button className="btn pull-right" type="submit">Send</button>
          </div>
        </div>
      </div>
    </div>
    <br />
    <h3 className="text-center">From The Blog</h3>  
    <ul className="nav nav-tabs">
      <li className="active"><a data-toggle="tab" href="#home">Mike</a></li>
      <li><a data-toggle="tab" href="#menu1">Chandler</a></li>
      <li><a data-toggle="tab" href="#menu2">Peter</a></li>
    </ul>
    <div className="tab-content">
      <div id="home" className="tab-pane fade in active">
        <h2>Mike Ross, Manager</h2>
        <p>Man, we've been on the road for some time now. Looking forward to lorem ipsum.</p>
      </div>
      <div id="menu1" className="tab-pane fade">
        <h2>Chandler Bing, Guitarist</h2>
        <p>Always a pleasure people! Hope you enjoyed it as much as I did. Could I BE.. any more pleased?</p>
      </div>
      <div id="menu2" className="tab-pane fade">
        <h2>Peter Griffin, Bass player</h2>
        <p>I mean, sometimes I enjoy the show, but other times I enjoy other things.</p>
      </div>
    </div>
  </div>
  {/* Image of location/map */}
  <img src="https://www.w3schools.com/bootstrap/map.jpg" className="img-responsive" style={{width: '100%'}} />
  {/* Footer */}
  <footer className="text-center">
    <a className="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
      <span className="glyphicon glyphicon-chevron-up" />
    </a><br /><br />
    <p>Bootstrap Theme Made By <a href="https://www.w3schools.com" data-toggle="tooltip" title="Visit w3schools">www.w3schools.com</a></p> 
  </footer>
</div>

         </div>
        );
    }
}



export default header;