import { useEffect } from "react"
import notesStore from "../stores/notesStore";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";


export default function NotesPage() {
    const store = notesStore();

    // Use effect
    useEffect(() =>{
        store.fetchNotes();
    }, []);
  return (
    <div>
      <Notes />
      <UpdateForm />
      <CreateForm />
      
    </div>
  )
}
