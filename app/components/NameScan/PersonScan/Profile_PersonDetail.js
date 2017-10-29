import React, { Component } from 'react';
import { Row, Col, Table } from 'react-bootstrap';

import '../../Forms/XEditable.scss';
import XEditableRun from '../../Forms/XEditable.run';

class PersonDetail extends Component {

  componentDidMount() {
    XEditableRun();
  }

  render() {           
    return (
      <div style = {this.props.style}>
        <Row>
          <Col lg={12} md={12}>
            <div className="card">
              <div className="card-heading">
                <div className="card-title">
                  <div className="pull-right"><a href=""><em className="ion-plus-round text-soft"></em></a></div>Person Details:
                </div>
              </div>                  
              <div className="card-body">
                <div className="panel-heading"><strong>General Information</strong></div>
                <table style={{clear: 'both'}} className="table table-bordered table-striped">
                  <tbody>
                  <tr>
                      <td width="20%">Categories</td>
                      <td width="80%"><a id="comments" href="#" data-type="textarea" data-pk="1" data-placeholder="Your categories here..." data-title="Enter categories">{this.props.entity.categories}</a></td>
                    </tr>  
                    <tr>
                      <td width="20%">SubCategories</td>
                      <td width="80%"><a id="username" href="#" data-type="text" data-pk="1" data-title="Enter Subcategories">{this.props.entity.subcategories}</a></td>
                    </tr>  
                    <tr>
                      <td width="20%">Gender</td>
                      <td width="80%"><a id="sex" href="#" data-type="select" data-pk="1" data-value="" data-title="Select Gender">{this.props.entity.gender}</a></td>
                    </tr>  
                    <tr>
                      <td width="20%">First+Middle Name</td>
                      <td width="80%"><a id="firstname" href="#" data-type="text" data-pk="1" data-placement="right" data-placeholder="Enter Firstname">{this.props.entity.firstmiddlename}</a></td>
                    </tr>                                   
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

PersonDetail.defaultProps = {
  entity:{
    categories: '',
    subcategories: '',
    gender: '',
    firstmiddlename: ''
  }
}

export default PersonDetail;