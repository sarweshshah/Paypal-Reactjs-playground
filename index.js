'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Datepicker = require('react-datepicker');
var moment = require('moment');

var TransactionItem = require("./TransactionItem.react");
var UserAgreementBlock = require("./UserAgreementBlock.react");
var ReturnFlowAccordion = require("./ReturnFlowAccordion.react");

var ClaimForm = React.createClass({
    getInitialState: function () {
        return {
            returnShippingDate: moment()._d.toString(), shippingCurrency: "USD", submitButton_isDisabled: "disabled"
        };
    },

    componentDidMount: function () {
    },

    render: function () {
        var validDates = -14;
        return (
            <form className="container-fluid">
                <div className="col-md-3"></div>
                <div className="col-md-5">
                    <h3>Return Shipping Refund Request</h3>
                    <TransactionItem/>

                    <h4>What do you want to return?</h4><br/>
                    <div><textarea rows="4" id="returned_items" style={{resize: 'none'}}
                                   className="form-control billing-address-display"
                                   value={this.state.returned_items}
                                   onChange={this.handleReturnedItemsChange}
                                   placeholder="Returned Items"/>
                    </div>
                    <br/>

                    <h4>How did you pay for your return shipping?</h4><br/>
                    <ReturnFlowAccordion/>

                    <div className="form-inline">
                        <input type="number"
                               className="form-control"
                               placeholder="Return shipping cost"
                               onChange={this.handleShippingCostChange}/>

                        <select id="shippingCurrency" ref="shippingCurrency"
                                onChange={this.handleShippingCurrencyChange}>
                            <option value="USD">USD</option>
                            <option value="AUD">AUD</option>
                        </select>
                        <Datepicker ref="returnShippingDate" placeholderText="Date of return" className="form-control"
                                    maxDate={moment()} minDate={moment().add(validDates, 'days')}
                                    selected={moment(this.state.returnShippingDate)}
                                    onChange={this.handleShippingDateChange}/>
                    </div>

                    <UserAgreementBlock/>
                    <input type="Submit" ref="submitClaimRequestBtn" className="btn btn-block primary"
                           value="Submit"/><br/>
                    <p>Questions about Free Return Shipping? Visit our <a>FAQs</a> or <a>Contact us</a></p>
                    <h6>Free Return Shipping is offered by PayPal Pte. Ltd, in partnership with TELUS International
                        Europe, the service provider, now through 31 December 2016.</h6>
                </div>
            </form>
        )
    },

    ///////////////////////////////////////////////////////////// FORM HANDLERS
    handleShippingDateChange: function (date) {
        this.setState({
            returnShippingDate: date._d.toString()
        });
    },

    handleReturnedItemsChange: function (event) {
        this.setState({
            returned_items: event.target.value
        });
    },

    handleShippingCurrencyChange: function (event) {
        this.setState({
            shippingCurrency: event.target.value
        });
    },

    handleShippingCostChange: function (event) {
        this.setState({
            shippingCost: event.target.value
        });
    }
});

ReactDOM.render(<ClaimForm/>, document.getElementById('container'));
