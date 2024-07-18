import notesStore from "../stores/notesStore"

export default function CreateForm() {
    const store = notesStore();
    if(store.updateForm._id) return <></>
  return (
    <div>
        <h2>Create Note</h2>
        <form action="" onSubmit={store.createNote}>
          <input onChange={store.updateCreateFormField} name="title" placeholder="Enter you note Title" value={store.createForm.title} ></input>
          <textarea onChange={store.updateCreateFormField} name="body" placeholder="Enter your note content" value={store.createForm.body}></textarea>
          <button type="submit">Create Note</button>
        </form>
    </div>
    )
}
