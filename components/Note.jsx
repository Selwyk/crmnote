import React from 'react';

export default React.createClass({
    render: function() {
        var url = window.parent.Xrm.Page.context.prependOrgName(
            '/main.aspx?pagetype=entityrecord&etn=annotation&id=' +
            this.props.notes.annotationid);

        return (
            <li>
                <p><a href={url} target='_blank'>{ this.props.notes.title }</a></p>
                <p>Ticket #:{ this.props.notes.ticketnumber }</p>
                <p>Opened On { this.props.notes.createdon }</p>
            </li>
        );
    }
});
