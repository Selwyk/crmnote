import React from 'react';
import Case from './Note.jsx';

export default React.createClass({
    render: function () {
        return (
            <ul>
                { this.props.notes.map(n => <Case key={n.annotationid} notes={n} />) }
            </ul>
        );
    }
});
