import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { savingNewNote, startNewNote } from "../../store"
import { useDispatch, useSelector } from "react-redux"


export const JournalPage = () => {

  const { isSaving, active } = useSelector(store => store.journal);
  
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>

      {
        (!!active)
        ? (<NoteView />)
        : (<NothingSelectedView />)
      }
    
      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.8, transition: 'all 300ms' },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30}}/>
      </IconButton>
      
    </JournalLayout>
  )
}
