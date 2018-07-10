import React from 'react';
import Case from './Note.jsx';

export default React.createClass({
    render: function () {
        return (
            <ul>
                { this.props.notes.map(n => <Note key={n.annotationid} note={n} />) }
            </ul>
        );
    }
});
