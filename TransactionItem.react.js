'use strict';

var React = require('react');

var TransactionItem = React.createClass({
    render: function () {
        return (
            <div>
                <ul className="contents">
                    <div className="transactionItem">
                        <div className="row">
                            <div className="col-xs-1 date">
                                <span className="month">Feb</span>
                                <span className="day">29</span>
                            </div>
                            <div className="col-xs-11 transaction-note">
                                <span className="description">JetBrains sro</span>
                                <span className="type">Webstorm license purchase</span>
                            <span className="amount"><span className="negative">-</span> $90.87
                            </span>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
});

module.exports = TransactionItem;