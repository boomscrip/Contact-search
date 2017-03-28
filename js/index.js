'use strict';

var CONTACTS = [{
    id: 1,
    name: 'Dan',
    phoneNumber: '+88005555213',
    photo: 'img/dan.jpeg'
}, {
    id: 2,
    name: 'Dimka',
    phoneNumber: '+8-800-555-35-35',
    photo: 'img/nik.jpg'
}, {
    id: 3,
    name: 'Sasha',
    phoneNumber: '+654433',
    photo: 'img/sasha.jpg'
}, {
    id: 4,
    name: 'Golym',
    phoneNumber: '+1488',
    photo: 'img/golym.jpg'

}];

var Contact = React.createClass({
    displayName: 'Contact',

    render: function render() {
        return React.createElement(
            'li',
            { className: 'contact' },
            React.createElement('img', { className: 'contact-image', src: this.props.photo, width: '60px', height: '60px' }),
            React.createElement(
                'div',
                { className: 'contact-info' },
                React.createElement(
                    'div',
                    { className: 'contact-name' },
                    ' ',
                    this.props.name,
                    ' '
                ),
                React.createElement(
                    'div',
                    { className: 'contact-number' },
                    ' ',
                    this.props.phoneNumber,
                    ' '
                )
            )
        );
    }
});

var ContactsList = React.createClass({
    displayName: 'ContactsList',

    getInitialState: function getInitialState() {
        return {
            displayedContacts: CONTACTS
        };
    },

    handleSearch: function handleSearch(event) {
        var searchQuery = event.target.value.toLowerCase();
        var displayedContacts = CONTACTS.filter(function (el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedContacts: displayedContacts
        });
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: 'contacts' },
            React.createElement('input', { type: 'text', placeholder: 'Поиск...', className: 'search-field', onChange: this.handleSearch }),
            React.createElement(
                'ul',
                { className: 'contacts-list' },
                this.state.displayedContacts.map(function (el) {
                    return React.createElement(Contact, {
                        key: el.id,
                        name: el.name,
                        phoneNumber: el.phoneNumber,
                        photo: el.photo
                    });
                })
            )
        );
    }
});

ReactDOM.render(React.createElement(ContactsList, null), document.getElementById("content"));
