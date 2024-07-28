import React from 'react'
import PropTypes from 'prop-types'
import { FindContact } from "../FindContact/FindContact"

export const Phonebook = () => {

    const addContact = (name, number) => {
        return (
            <li>{name.target.value}: {number.target.value}</li>
        )
    }

    return (
        <>
            <h2>Phonebook</h2>
            <div>
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <p>Number</p>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <button type="button" onClick={addContact}>Add contact</button>
            </div>
            <h2>Contacts</h2>
            <ul>
                {addContact}
            </ul>
            <FindContact/>
        </>
    )
}

Phonebook.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string
}