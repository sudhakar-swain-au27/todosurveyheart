import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import './CreateArea.css';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    content: ""
  });

  function handleChange(event) {
    const { value } = event.target;

    setNote({
      content: value
    });

    setExpanded(false);
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.content.trim() !== "") {
      props.onAdd(note);
      setNote({
        content: ""
      });
    }
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          autoFocus
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;