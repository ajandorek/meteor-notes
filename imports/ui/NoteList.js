import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import { Notes } from '../api/notes';
import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';

export const NoteList = (props) => {
  return (
    <div>
      <NoteListHeader />
      {props.notes.map((note) => {
        return <NoteListItem note={note} key={note._id} />
      })}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};
export default createContainer(() => {
  Meteor.subscribe('notes');

  return {
    notes: Notes.find().fetch()
  };
}, NoteList);
