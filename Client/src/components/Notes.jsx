import notesStore from "../stores/notesStore";
import Note from "./Note";

export default function Notes() {
    const store = notesStore();
    return (
        <div>
          <h2>Notes:</h2>
          {store.notes && store.notes.map(note => {
            // eslint-disable-next-line react/jsx-key
            return  <Note note={note} key={note._id} />
          })}
        </div>
    )
}
