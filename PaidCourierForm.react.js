'use strict';

var React = require('react');

var PaidCourierForm = React.createClass({
    render: function () {
        return (
            <div className="panel-body">
                <h5 className="bold-font">2 documents needed</h5>
                <h6>Accepted files types: PDF, JPG, PNG</h6><br/>
                <input type="button"
                       className="btn btn-block vx_btn-secondary action-button"
                       value="Upload Shipment Address Photo"/><br/>
                <h6>Please upload a copy of the courier receipt with the receiver’s address visible, or a photo of the
                    package with the receiver’s address visible.</h6><br/>
                <input type="button"
                       className="btn btn-block vx_btn-secondary action-button"
                       value="Upload Return Shipping Receipt"/><br/>
                <h6>Please upload the shipping receipt that shows the amount you paid. You can skip this step if your
                    shipment address photo (see above) shows the amount.</h6>
            </div>
        )
    }
});

module.exports = PaidCourierForm;