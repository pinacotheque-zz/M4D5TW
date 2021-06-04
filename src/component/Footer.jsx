import {Component} from 'react'

import {Container, Row, Col, Button  } from 'react-bootstrap'

class MyFooter extends Component {
    render(){
        return(
            
<Container  fluid  id='Footer'>
   
  <Row>
<Col><ul className ='list'>
          
          <li><a  href="#" >Audio and Subtitles </a></li>
        <li><a  href="#" >Media Center</a></li>
        <li><a  href="#" >Privacy</a></li>
        <li><a  href="#" >Contact Us</a></li>
      </ul></Col>
<Col><ul className ='list'>
            <li><a  href="#" > Audio Description</a></li>
            <li><a  href="#" >Investor Relations</a></li>
            <li><a  href="#" >Legal Notices</a></li>
          </ul></Col>
<Col><ul className ='list'>
          <li><a  href="#" >Help Center</a></li>
          <li><a  href="#" >Jobs</a></li>
          <li><a  href="#" >Cookie Preferences</a></li>
          </ul></Col>
<Col><ul className ='list'>
            <li><a  href="#" >Gift Cards</a></li>
            <li><a  href="#" >Terms of Use</a></li>
            <li><a  href="#" >Corporate Information</a></li>
          </ul></Col>

  </Row>

  <Button type="button" className="btn btn-outline-secondary ml-4">Service Code</Button>
      <div className="ml-5 mt-3 copyright"><span>1997-2019 Netflix, inc All rights reserved</span></div> 
   
</Container>

        )
    }
}

export default MyFooter