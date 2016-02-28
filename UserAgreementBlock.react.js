'use strict';

var React = require('react');

var UserAgreementBlock = React.createClass({
    render: function () {
        return (
            <div className="checkboxContainer">
                <input type="checkbox" className="checkbox" id="user-agreement"/>
                <label htmlFor="user-agreement" className="user-agreement-message"> I have read and agreed to the <a
                    href="" target="_blank">Terms and Conditions</a>.
                </label>
            </div>
        )
    }
});

module.exports = UserAgreementBlock;
