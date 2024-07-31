import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

function Note({ id, title, content, onDelete = () => {}, onEdit = () => {} }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleDeleteClick = () => onDelete(id);

  const handleEditClick = () => setIsEditing(true);

  const handleSaveClick = () => {
    onEdit(id, editedTitle, editedContent);
    setIsEditing(false);
  };

  //const handleTitleChange = (event) => setEditedTitle(event.target.value);

  const handleContentChange = (event) => setEditedContent(event.target.value);

  return (
    <div className="note">
      {isEditing ? (
        <div className="note-edit">
        
          <textarea
            value={editedContent}
            onChange={handleContentChange}
            placeholder="Edit content"
            aria-label="Edit content"
          />
          <button onClick={handleSaveClick} aria-label="Save">
            <SaveIcon />
          </button>
        </div>
      ) : (
        <div className="note-view">
          <h1>{title}</h1>
          <p>{content}</p>
          <div className="note-footer">
            <button onClick={handleEditClick} aria-label="Edit">
              <EditIcon />
            </button>
            <button onClick={handleDeleteClick} aria-label="Delete">
              <DeleteIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Note;
