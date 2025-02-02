// src/components/RichTextEditor.jsx
'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-gray-200 p-2  flex flex-wrap gap-2">
      <button
        type="button" // Add type="button" to prevent form submission
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive('bold') ? 'bg-gray-200' : 'bg-white'
        } border border-gray-300`}
      >
        Bold
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive('italic') ? 'bg-gray-200' : 'bg-white'
        } border border-gray-300`}
      >
        Italic
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-2 py-1 rounded ${
          editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : 'bg-white'
        } border border-gray-300`}
      >
        H2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`px-2 py-1 rounded ${
          editor.isActive('heading', { level: 3 }) ? 'bg-gray-200' : 'bg-white'
        } border border-gray-300`}
      >
        H3
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive('bulletList') ? 'bg-gray-200' : 'bg-white'
        } border border-gray-300`}
      >
        Bullet List
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive('orderedList') ? 'bg-gray-200' : 'bg-white'
        } border border-gray-300`}
      >
        Ordered List
      </button>
    </div>
  );
};

export default function RichTextEditor({ content, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      // Prevent form submission on Enter key
      handleKeyDown: (view, event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
          // Allow Enter key for normal line breaks
          return false;
        }
        // Let other keys be handled normally
        return false;
      },
      // Prevent drag events from bubbling up to the form
      handleDrop: (view, event, slice, moved) => {
        event.preventDefault();
        return true;
      },
      handlePaste: (view, event, slice) => {
        // Let TipTap handle paste events normally
        return false;
      },
    },
  });

  return (
    <div className="border rounded-md" onKeyDown={(e) => {
      // Prevent form submission when pressing Enter inside the editor
      if (e.key === 'Enter' && !e.shiftKey) {
        e.stopPropagation();
        e.preventDefault();
      }
    }}>
      <MenuBar editor={editor} />
      <div className="m-4 p-1 border-2 rounded-lg">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}