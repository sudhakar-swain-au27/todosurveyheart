import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import './CreateArea.css';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: ""
  });

  function handleChange(event) {
    const { value } = event.target;

    setNote({
      title: value
    });
  }

  function submitNote(event) {
    if (note.title.trim() !== "") {
      props.onAdd(note);
      setNote({
        title: ""
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
          name="title"
          onClick={expand}
          onChange={handleChange}
          value={note.title}
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