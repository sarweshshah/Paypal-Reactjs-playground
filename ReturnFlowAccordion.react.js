'use strict';

var React = require('react');
var PaidCourierForm = require('./PaidCourierForm.react.js');
var DeductedReturnForm = require('./DeductedReturnForm.react.js');

var ReturnFlowAccordion = React.createClass({
    render: function () {
        return (
            <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                    <div className="panel-heading accordion-toggle collapsed"
                         data-toggle="collapse"
                         data-parent="#accordion"
                         data-target="#collapseDeductedReturnForm">
                        <input type="radio" className="radio-inline" id="paidCourierForm" tabindex="2" name="returnChannel"/>
                        <label for="user-agreement" className="radio-inline label">I paid the post office or a courier service.</label>
                    </div>
                    <div id="collapseDeductedReturnForm" className="panel-collapse">
                        <PaidCourierForm/>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading accordion-toggle collapsed"
                         data-toggle="collapse"
                         data-parent="#accordion"
                         data-target="#collapseDeductedReturnForm">
                        <input type="radio" className="radio-inline" id="deductedReturnForm" tabindex="3" name="returnChannel"/>
                        <label for="user-agreement" className="radio-inline label">The shipping cost was deducted from my return.</label>
                    </div>
                    <div id="collapseDeductedReturnForm" className="panel-collapse">
                        <DeductedReturnForm/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ReturnFlowAccordion;