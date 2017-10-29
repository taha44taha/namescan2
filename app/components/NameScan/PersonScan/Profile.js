import React, { Component } from 'react';
import pubsub from 'pubsub-js';
import { Grid, Row, Col, Dropdown, MenuItem, Table, Button } from 'react-bootstrap';
import DatatableRun from '../../Tables/Datatable.run';
import '../../Tables/Datatable.scss';
import PersonDetail from './Profile_PersonDetail';


class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {      
      selectedkey: -1, 
      isDetail: false,     
      entitiesData:[{
        firstmiddlename: 'sampletext1',
        lastname: 'samplelastname1',
        matchtype: '',
        dob: '09/12/2011',
        comments:'samplecomments1',
        categories: 'Special Interest Person (SIP)- Terror, Special Interest Person (SIP)- Sanctions Lists, Special Interest Person (SIP)- Law Enforcement, Special Interest Person (SIP)- Regulatory enforcement',
        subcategories: 'John',
        gender: 'Male'        
      },{
        firstmiddlename: 'sampletext2',
        lastname: 'samplelastname2',
        matchtype: '',
        dob: '09/12/2011',
        comments:'samplecomments2',
        categories: 'Special Interest Person (SIP)- Terror, Special Interest Person (SIP)- Sanctions Lists, Special Interest Person (SIP)- Law Enforcement, Special Interest Person (SIP)- Regulatory enforcement',
        subcategories: 'John2',
        gender: 'Male'
      },{
        firstmiddlename: 'sampletext3',
        lastname: 'samplelastname3',
        matchtype: '',
        dob: '09/12/2011',
        comments:'samplecomments3',
        categories: 'Special Interest Person (SIP)- Terror, Special Interest Person (SIP)- Sanctions Lists, Special Interest Person (SIP)- Law Enforcement, Special Interest Person (SIP)- Regulatory enforcement',
        subcategories: 'John3',
        gender: 'Male'
      },{
        firstmiddlename: 'sampletext4',
        lastname: 'samplelastname4',
        matchtype: '',
        dob: '09/12/2011',
        comments:'samplecomments4',
        categories: 'Special Interest Person (SIP)- Terror, Special Interest Person (SIP)- Sanctions Lists, Special Interest Person (SIP)- Law Enforcement, Special Interest Person (SIP)- Regulatory enforcement',
        subcategories: 'John4',
        gender: 'Male'
      },{
        firstmiddlename: 'sampletext5',
        lastname: 'samplelastname5',
        matchtype: '',
        dob: '09/12/2011',
        comments:'samplecomments5',
        categories: 'Special Interest Person (SIP)- Terror, Special Interest Person (SIP)- Sanctions Lists, Special Interest Person (SIP)- Law Enforcement, Special Interest Person (SIP)- Regulatory enforcement',
        subcategories: 'John5',
        gender: 'Male'
      }]
    }    
  }
  componentWillMount() {
    pubsub.publish('setPageTitle', this.constructor.name);    
  }
  
  componentDidMount() {
    DatatableRun()
  }

  handleToggle(key){ 
    this.setState({      
      selectedkey: key
    });    
    if(this.state.selectedkey === key){
      this.setState({
        isDetail: !this.state.isDetail        
      });   
    } else{
      this.setState({
        isDetail: true  
      })
    }           
  }
  render() {               
    const mapToentitiesData = (entity) => {      
      return entity.map((data, i) => {
        return (
          <tr key={i}>
            <td onClick={this.handleToggle.bind(this, i)} style={{cursor:'pointer'}}>{data.firstmiddlename}</td>
            <td>{data.lastname}</td>
            <td>{data.matchtype}</td>
            <td>{data.dob}</td>
            <td><Button bsStyle="default" className="btn-raised mr ripple">Decision</Button></td>
            <td>{data.comments}</td>
          </tr>  
        );
      });
    }; 
    const select = {display: 'block'};
    const notselected = {display: 'none'};
    let style = this.state.isDetail ? select : notselected;    
    return (      
      <section>
        <Grid fluid>
          <Row>
            <Col lg={4} md={6}>
              <div className="card">
                <div className="card-heading">
                  <div className="card-title">
                    <div className="pull-right"><a href=""><em className="ion-plus-round text-soft"></em></a></div>Personal Information
                  </div>
                </div>                  
                <div className="card-body">
                  <p>
                    <strong>Entity ID: </strong><span>1</span>                     
                  </p>
                  <p>
                    <strong>First Name: </strong><span>John</span>                     
                  </p>
                  <p>
                    <strong>Middle name: </strong><span>L</span>                     
                  </p>
                  <p>
                    <strong>Last Name: </strong><span>lenon</span>                     
                  </p>
                  <p>
                    <strong>Gender: </strong><span>male</span>                     
                  </p>
                  <p>
                    <strong>Date of birth: </strong><span>02/02/1990</span>                     
                  </p>
                  <p>
                    <strong>Nationality: </strong><span>British</span>                     
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="card">
                <div className="card-heading">
                  <div className="card-title">
                    <div className="pull-right"><a href=""><em className="ion-plus-round text-soft"></em></a></div>Contact Information:
                  </div>
                </div>                  
                <div className="card-body">
                  <p>
                    <strong>Company: </strong><span>NameScan</span>                     
                  </p>
                  <p>
                    <strong>Role: </strong><span>manager</span>                     
                  </p>
                  <p>
                    <strong>Address: </strong><span>Unit 2, 53 Redman Road</span>                     
                  </p>
                  <p>
                    <strong>Suburb/Town: </strong><span>Dee Why</span>                     
                  </p>
                  <p>
                    <strong>State: </strong><span>New South Wales</span>                     
                  </p>
                  <p>
                    <strong>Post Code: </strong><span>2099</span>                     
                  </p>
                  <p>
                    <strong>Country: </strong><span>Australia</span>                     
                  </p>
                  <p>
                    <strong>Phone: </strong><span>+6125488488</span>                     
                  </p>
                  <p>
                    <strong>Email: </strong><span>test@test.com</span>                     
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <Row>
                <Col md={6} mdOffset={3}>
                  <div className="photo">
                      <div className="photo-wrapper"><img src="img/user/01.jpg" alt="user image" className="img-responsive fw"/>
                          <div className="photo-loader">
                              <div className="sk-spinner sk-spinner-rotating-plane"></div>
                          </div>
                      </div>                    
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12}>
              <div className="card">
                <div className="card-heading">
                  <div className="card-title">
                    <div className="pull-right"><a href=""><em className="ion-plus-round text-soft"></em></a></div>Documents:
                  </div>
                </div>                  
                <div className="card-body">
                  <p>
                    <strong>Proof of ID: </strong><span>ID Card</span>                     
                  </p>
                  <p>
                    <strong>Proof of address: </strong><span>Passport</span>                     
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12}>
              <div className="card">
                <div className="card-heading">
                  <div className="card-title">
                    <div className="pull-right"><a href=""><em className="ion-plus-round text-soft"></em></a></div>Due diligence Information:
                  </div>
                </div>                  
                <div className="card-body">
                  <fieldset>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Type of Checks</label>
                      <div className="col-sm-10">
                        <label className="checkbox-inline c-checkbox">
                          <input id="pepCheckbox" type="checkbox" defaultChecked value=""/><span className="ion-checkmark-round"></span> PEP
                        </label>
                        <label className="checkbox-inline c-checkbox">
                          <input id="sanctionCheckbox20" type="checkbox" defaultChecked value=""/><span className="ion-checkmark-round"></span> Sanction
                        </label>                        
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Match Type</label>
                      <div className="col-sm-10">
                        <label className="checkbox-inline c-checkbox">
                          <input id="exactCheckbox10" type="checkbox" value=""/><span className="ion-checkmark-round"></span> Exact
                        </label>
                        <label className="checkbox-inline c-checkbox">
                          <input id="closeCheckbox20" type="checkbox" defaultChecked value=""/><span className="ion-checkmark-round"></span> Close
                        </label>                        
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="last-child">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Risk Score:</label>
                      <div className="col-sm-10">                            
                        <div className="row">
                          <div className="col-lg-4">
                            <select multiple="" className="form-control">
                              <option>Low</option>
                              <option>Medium</option>
                              <option>High</option>                                      
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="last-child">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Ongoing Monitoring:</label>
                      <div className="col-sm-10">                            
                        <div className="row">
                          <div className="col-lg-4">
                            <select multiple="" className="form-control">
                              <option>Every Month</option>
                              <option>Every 6 Months</option>
                              <option>Every 6 Years</option>                                      
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12}>
              <div className="card">
                <div className="card-heading">
                  <div className="card-title">
                    <div className="pull-right"><a href=""><em className="ion-plus-round text-soft"></em></a></div>Found Entities
                  </div>
                </div>                  
                <div className="card-body">
                  <table id="datatable1" className="table-datatable table table-striped table-hover mv-lg">
                    <thead>
                      <tr>                        
                        <th>First + Middle Name</th>
                        <th>Last Name</th>
                        <th>Match Type</th>
                        <th>DOB</th>
                        <th>Decision</th>
                        <th>Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mapToentitiesData(this.state.entitiesData)}
                    </tbody>
                  </table>
                </div>
              </div>
            </Col>
          </Row>
          <PersonDetail 
            entity = {this.state.entitiesData[this.state.selectedkey]}            
            style = {style}
          />
        </Grid>
      </section>
    );
  }
}

export default Profile;