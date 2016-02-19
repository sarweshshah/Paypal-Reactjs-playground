'use strict';

var React = require('react');

var DeductedReturnForm = React.createClass({
    render: function () {
        return (
            <div className="panel-body">
                <h5 className="bold-font">Document needed</h5>
                <h6>Accepted files types: PDF, JPG, PNG</h6><br/>
                <input type="button"
                       className="btn btn-block vx_btn-secondary action-button"
                       value="Upload Refund Receipt"/><br/>
                <h6>Please upload a copy of the refund email from the merchant or PayPal, showing the amount refunded toyou.</h6>
            </div>
        )
    }
});

module.exports = DeductedReturnForm;