'use strict';

var React = require('react');

var PaidCourierForm = React.createClass({
    render: function () {
        return (
            <div className="panel-body">
                <h5 className="bold-font">2 documents needed</h5>
                <p className="h6">Accepted files types: PDF, JPG, PNG</p><br/>

                <div className="fileUploadBtn btn vx_btn-secondary">
                    <span>Upload Shipment Address Photo</span>
                    <input type="file" className="uploadedFile"
                           id="uploadShipmentAddress"
                           ref="uploadShipmentAddress"
                           accept=".png,.jpg,.pdf"/>
                </div>
                <p className="h6">Please upload a copy of the courier receipt with the receiver’s address visible, or a
                    photo of the
                    package with the receiver’s address visible.</p><br/>

                <div className="fileUploadBtn btn vx_btn-secondary">
                    <span>Upload Return Shipping Receipt</span>
                    <input type="file" className="uploadedFile"
                           id="uploadReturnShippingReceipt"
                           ref="uploadReturnShippingReceipt"
                           accept=".png,.jpg,.pdf"/>
                </div>
                <p className="h6">Please upload the shipping receipt that shows the amount you paid. You can skip this
                    step if your
                    shipment address photo (see above) shows the amount.</p>
            </div>
        )
    }
});

module.exports = PaidCourierForm;
