'use strict';

var React = require('react');

var DeductedReturnForm = React.createClass({
    render: function () {
        return (
            <div className="panel-body">
                <h5 className="bold-font">Document needed</h5>
                <p className="h6">Accepted files types: PDF, JPG, PNG</p><br/>
                <div className="fileUploadBtn btn vx_btn-secondary">
                    <span>Upload Refund Receipt</span>
                    <input type="file" className="uploadedFile" id="uploadReturnEmail" ref="uploadReturnEmail"
                           accept=".png,.jpg,.pdf"/>
                </div>
                <p className="h6">Please upload a copy of the refund email from the merchant or PayPal, showing the
                    amount refunded to you.</p>
            </div>
        )
    }
});

module.exports = DeductedReturnForm;
