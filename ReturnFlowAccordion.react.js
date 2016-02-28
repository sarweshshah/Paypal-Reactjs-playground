'use strict';

var React = require('react');
var PaidCourierForm = require('./PaidCourierForm.react.js');
var DeductedReturnForm = require('./DeductedReturnForm.react.js');

var ReturnFlowAccordion = React.createClass({
    getInitialState: function () {
        return {
            paidCourierForm_isCollapsed: "collapse", deductedReturnForm_isCollapsed: "collapse"
        };
    },

    render: function () {
        return (
            <div className="panel-group" id="accordion" onChange={this.handleRadioPanelToggle}>

                <div className="panel panel-default">
                    <div className="panel-heading accordion-toggle"
                         data-toggle="collapse" data-parent="#accordion" data-target="#collapseDeductedReturnForm">
                        <input type="radio"
                               className="radio-inline"
                               id="paidCourierForm"
                               name="returnChannel"/>
                        <label htmlFor="paidCourierForm" className="radio-inline">I paid the post office or a courier
                            service.</label>
                    </div>
                    <div id="collapseDeductedReturnForm"
                         className={this.state.paidCourierForm_isCollapsed}>
                        <PaidCourierForm/>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading accordion-toggle"
                         data-toggle="collapse" data-parent="#accordion" data-target="#collapseDeductedReturnForm">
                        <input type="radio"
                               className="radio-inline"
                               id="deductedReturnForm"
                               name="returnChannel"/>
                        <label htmlFor="deductedReturnForm" className="radio-inline">The shipping cost was deducted from
                            my return.</label>
                    </div>
                    <div id="collapseDeductedReturnForm" className={this.state.deductedReturnForm_isCollapsed}>
                        <DeductedReturnForm/>
                    </div>
                </div>

            </div>
        );
    },

    handleRadioPanelToggle: function (event) {
        if (event.target.id == "paidCourierForm") {
            this.setState({
                paidCourierForm_isCollapsed: "", deductedReturnForm_isCollapsed: "collapse"
            });
        } else if (event.target.id == "deductedReturnForm") {
            this.setState({
                paidCourierForm_isCollapsed: "collapse", deductedReturnForm_isCollapsed: ""
            });
        }
    }
});

module.exports = ReturnFlowAccordion;
