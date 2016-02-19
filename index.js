'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TransactionItem = require("./TransactionItem.react");
var UserAgreementBlock = require("./UserAgreementBlock.react");
var ReturnFlowAccordion = require("./ReturnFlowAccordion.react");

var ClaimForm = React.createClass({
    render: function () {
        //Calculate to set max date
        // var today = new Date().toJSON().split('T')[0];
        return (
            <div className="container-fluid">
                <div className="col-md-3"></div>
                <div className="col-md-5">
                    <h3>Return Shipping Refund Request</h3>
                    <TransactionItem/>
                    <h4>What do you want to return?</h4><br/>
                    <div><input type="text" id="returned_items" className="form-control" placeholder="Returned Items"/>
                    </div><br/>
                    <h4>How did you pay for your return shipping?</h4><br/>
                    <ReturnFlowAccordion/>
                    <div>
                        <input type="number" className="inline form-control" placeholder="Return shipping cost"/>
                        <input type="date" className="inline form-control" placeholder="Date of return" align="right"/>
                    </div>
                    <UserAgreementBlock/>
                    <input type="button" className="btn btn-block primary action-button" value="Submit" tabindex="5"/>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <ClaimForm/>,
    document.getElementById('container')
);
