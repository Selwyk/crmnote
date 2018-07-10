import React from 'react';
import CaseList from './NoteList.jsx';

export default React.createClass({

    getInitialState: function () {
        return { notes: [] };
    },

    loadNotes: function () {
        var url =
            '/api/data/v8.0/annotation?' +
            '$filter=statecode eq 0' +
            '&$orderby=createdon desc' +
            '&$top=10' +
            '&$select=annotationid,title,createdon,ticketnumber';

        url = window.parent.Xrm.Page.context.prependOrgName(url);
        fetch(url, {
            credentials: 'same-origin'
        })
            .then(res => res.json())
            .then(json => this.setState({ annotation: json.value }));
    },

    componentDidMount: function () {
        this.loadNotes();
        this.timerId = window.setInterval(this.loadNotes, 10000);
    },

    componentWillUnmount: function () {
        window.clearInterval(this.timerId);
    },

    render: function () {
        return (
            <NoteList notes={this.state.notes} />
        );
    }

});
