import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import './Note.css';

function Note({ id, content, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleDeleteClick = () => onDelete(id);

  const handleEditClick = () => setIsEditing(true);

  const handleSaveClick = () => {
    if (editedContent.trim()) {
      onEdit(id, editedContent);
      setIsEditing(false);
    }
  };

  const handleContentChange = (event) => setEditedContent(event.target.value);

  return (
    <div className={`note ${isEditing ? 'editing' : ''}`}>
      {isEditing ? (
        <div className="note-edit">
          <textarea
            value={editedContent}
            onChange={handleContentChange}
            placeholder="Edit content"
            autoFocus
          />
          <button onClick={handleSaveClick} aria-label="Save">
            <SaveIcon />
          </button>
        </div>
      ) : (
        <div className="note-view">
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
