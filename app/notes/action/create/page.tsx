import css from './CreateNote.module.css';
import NoteForm from '@/components/NoteForm/NoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Create Note",
    description: "Create note in NoteHub",
    openGraph: {
        title: "Create Note",
        description: "Create note in NoteHub",
        url: "https://example.com/notes/action/create",
        siteName: "NoteHub",
        images: [
            {
                url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                    width: 1200,
                    height: 600,
                    alt: "Create Note",
            }
        ]
    }
}

const CreateNote = () => {
    return ( 
        <main className={css.main}>
  <div className={css.container}>
    <h1 className={css.title}>Create note</h1>
	   <NoteForm />
  </div>
</main>)
}

export default CreateNote;