import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import CharacterCount from '@tiptap/extension-character-count'
import { useEffect, useRef, useState } from 'react'
import { apiClient } from '../services/api-client'
import { toast } from 'react-hot-toast'
import { UI_MESSAGES } from '../errors/message'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon, BlockquoteIcon, BoldIcon, BulletListIcon, CodeBlockIcon, H2Icon, H3Icon, HrIcon, ImageIcon, ItalicIcon, LinkIcon, OrderedListIcon, StrikeIcon, UnderlineIcon, UnlinkIcon } from '../components/ui/Icons'

interface TiptapEditorProps {
  content: string
  onChange: (html: string) => void
  disabled?: boolean
  placeholder?: string
  editorKey?: string
}

// ── Divider ──────────────────────────────────────────────────────────────────
const ToolbarDivider = () => (
  <div style={{ width: 1, height: 20, background: '#e5e7eb', margin: '0 4px', flexShrink: 0 }} />
)

// ── Toolbar Button ────────────────────────────────────────────────────────────
const ToolbarButton = ({
  active = false,
  onClick,
  children,
  title,
}: {
  active?: boolean
  onClick: () => void
  children: React.ReactNode
  title?: string
}) => (
  <button
    type="button"
    title={title}
    onClick={onClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 30,
      height: 30,
      borderRadius: 6,
      border: 'none',
      background: active ? '#e0f2fe' : 'transparent',
      color: active ? '#0891b2' : '#374151',
      cursor: 'pointer',
      transition: 'background 0.12s, color 0.12s',
      flexShrink: 0,
    }}
    onMouseEnter={e => {
      if (!active) (e.currentTarget as HTMLButtonElement).style.background = '#f3f4f6'
    }}
    onMouseLeave={e => {
      if (!active) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
    }}
  >
    {children}
  </button>
)

// ── Main Editor ───────────────────────────────────────────────────────────────
export const TiptapEditor = ({
  content,
  onChange,
  disabled = false,
  placeholder = 'Write your article here...',
}: TiptapEditorProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [linkUrl, setLinkUrl] = useState('')
  const [showLinkInput, setShowLinkInput] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        link: false,
        underline: false
      }),
      Image.configure({ inline: false, allowBase64: false }),
      Placeholder.configure({ placeholder }),
      Underline,
      Link.configure({ openOnClick: false, HTMLAttributes: { class: 'tiptap-link' } }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      CharacterCount,
    ],
    content,
    editable: !disabled,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  useEffect(() => {
    if (editor && content && editor.getHTML() !== content) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  const handleSetLink = () => {
    if (!editor) return
    if (linkUrl.trim() === '') {
      editor.chain().focus().unsetLink().run()
    } else {
      const href = linkUrl.startsWith('http') ? linkUrl : `https://${linkUrl}`
      editor.chain().focus().setLink({ href }).run()
    }
    setLinkUrl('')
    setShowLinkInput(false)
  }

  const handleImageUpload = async (file: File) => {
    if (!editor) return
    const formData = new FormData()
    formData.append('image', file)
    const toastId = toast.loading('Uploading image')
    try {
      const { data } = await apiClient.post('/api/upload/image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      editor.chain().focus().setImage({ src: data.url, alt: file.name }).run()
      toast.success(UI_MESSAGES.success('Image', 'uploaded!'), { id: toastId })
    } catch (err) {
      toast.error(UI_MESSAGES.error('Image', 'upload'), { id: toastId })
      console.error('Image upload failed:', err)
    }
  }

  if (!editor) return null

  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 14,
        overflow: 'hidden',
        background: 'white',
        transition: 'border-color 0.15s',
      }}
      onFocusCapture={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = '#06b6d4'
        el.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.1)'
      }}
      onBlurCapture={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = '#e5e7eb'
        el.style.boxShadow = 'none'
      }}
    >
      {/* ── Toolbar ──────────────────────────────────────────────────── */}
      {!disabled && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            padding: '8px 12px',
            borderBottom: '1px solid #f3f4f6',
            background: '#fafafa',
            flexWrap: 'wrap',
          }}
        >
          {/* Text style */}
          <ToolbarButton
            active={editor.isActive('bold')}
            onClick={() => editor.chain().focus().toggleBold().run()}
            title="Bold"
          >
            <BoldIcon />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('italic')}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            title="Italic"
          >
            <ItalicIcon />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('underline')}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            title="Underline"
          >
            <UnderlineIcon />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('strike')}
            onClick={() => editor.chain().focus().toggleStrike().run()}
            title="Strikethrough"
          >
            <StrikeIcon />
          </ToolbarButton>

          <ToolbarDivider />

          {/* Headings */}
          <ToolbarButton
            active={editor.isActive('heading', { level: 2 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            title="Heading 2"
          >
            <H2Icon />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('heading', { level: 3 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            title="Heading 3"
          >
            <H3Icon />
          </ToolbarButton>

          <ToolbarDivider />

          {/* Text align */}
          <ToolbarButton
            active={editor.isActive({ textAlign: 'left' })}
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            title="Align left"
          >
            <AlignLeftIcon />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive({ textAlign: 'center' })}
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            title="Align center"
          >
            <AlignCenterIcon />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive({ textAlign: 'right' })}
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            title="Align right"
          >
            <AlignRightIcon />
          </ToolbarButton>

          <ToolbarDivider />

          {/* Lists */}
          <ToolbarButton
            active={editor.isActive('bulletList')}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            title="Bullet list"
          >
            <BulletListIcon />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('orderedList')}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            title="Ordered list"
          >
            <OrderedListIcon />
          </ToolbarButton>

          <ToolbarDivider />

          {/* Block elements */}
          <ToolbarButton
            active={editor.isActive('blockquote')}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            title="Blockquote"
          >
            <BlockquoteIcon />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('codeBlock')}
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            title="Code block"
          >
            <CodeBlockIcon />
          </ToolbarButton>
          <ToolbarButton
            active={false}
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            title="Divider"
          >
            <HrIcon />
          </ToolbarButton>

          <ToolbarDivider />

          {/* Link */}
          <ToolbarButton
            active={editor.isActive('link')}
            onClick={() => {
              const existing = editor.getAttributes('link').href ?? ''
              setLinkUrl(existing)
              setShowLinkInput(v => !v)
            }}
            title="Insert link"
          >
            <LinkIcon />
          </ToolbarButton>
          {editor.isActive('link') && (
            <ToolbarButton
              active={false}
              onClick={() => editor.chain().focus().unsetLink().run()}
              title="Remove link"
            >
              <UnlinkIcon />
            </ToolbarButton>
          )}

          <ToolbarDivider />

          {/* Image */}
          <ToolbarButton
            active={false}
            onClick={() => fileInputRef.current?.click()}
            title="Insert image"
          >
            <ImageIcon />
          </ToolbarButton>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={e => {
              const file = e.target.files?.[0]
              if (file) handleImageUpload(file)
              e.target.value = ''
            }}
          />
        </div>
      )}

      {/* ── Link input bar ─────────────────────────────────────────── */}
      {!disabled && showLinkInput && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 12px',
            borderBottom: '1px solid #f3f4f6',
            background: '#f0f9ff',
          }}
        >
          <input
            type="url"
            value={linkUrl}
            onChange={e => setLinkUrl(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSetLink()}
            placeholder="https://example.com"
            autoFocus
            style={{
              flex: 1,
              height: 32,
              padding: '0 10px',
              borderRadius: 6,
              border: '1px solid #bae6fd',
              outline: 'none',
              fontSize: 13,
              background: 'white',
            }}
          />
          <button
            type="button"
            onClick={handleSetLink}
            style={{
              height: 32,
              padding: '0 14px',
              borderRadius: 6,
              border: 'none',
              background: '#06b6d4',
              color: 'white',
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Apply
          </button>
          <button
            type="button"
            onClick={() => setShowLinkInput(false)}
            style={{
              height: 32,
              padding: '0 10px',
              borderRadius: 6,
              border: '1px solid #e5e7eb',
              background: 'white',
              fontSize: 13,
              cursor: 'pointer',
              color: '#6b7280',
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* ── Editor Content ──────────────────────────────────────────── */}
      <div style={{ padding: '20px 24px' }}>
        <style>{`
          .ProseMirror {
            min-height: 320px;
            outline: none;
            line-height: 1.75;
            font-size: 15px;
            color: #111827;
            font-family: inherit;
          }
          .ProseMirror > * + * { margin-top: 0.75em; }
          .ProseMirror p { margin: 0; }
          .ProseMirror h2 {
            font-size: 1.375rem;
            font-weight: 700;
            color: #111827;
            margin-top: 1.5em;
            margin-bottom: 0.25em;
            line-height: 1.3;
          }
          .ProseMirror h3 {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1f2937;
            margin-top: 1.25em;
            margin-bottom: 0.2em;
            line-height: 1.4;
          }
          .ProseMirror ul {
            padding-left: 1.5rem;
            list-style: disc;
          }
          .ProseMirror ol {
            padding-left: 1.5rem;
            list-style: decimal;
          }
          .ProseMirror li { margin: 0.2em 0; }
          .ProseMirror blockquote {
            border-left: 3px solid #06b6d4;
            padding-left: 1rem;
            color: #6b7280;
            font-style: italic;
            margin: 0;
          }
          .ProseMirror code {
            background: #f1f5f9;
            color: #0f172a;
            padding: 1px 5px;
            border-radius: 4px;
            font-family: ui-monospace, monospace;
            font-size: 0.875em;
          }
          .ProseMirror pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 1rem 1.25rem;
            border-radius: 10px;
            overflow-x: auto;
            font-family: ui-monospace, monospace;
            font-size: 0.875em;
            line-height: 1.7;
          }
          .ProseMirror pre code {
            background: none;
            color: inherit;
            padding: 0;
            font-size: inherit;
          }
          .ProseMirror img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 4px 0;
            display: block;
          }
          .ProseMirror hr {
            border: none;
            border-top: 1px solid #e5e7eb;
            margin: 1.5em 0;
          }
          .ProseMirror u { text-decoration: underline; }
          .ProseMirror a.tiptap-link {
            color: #0891b2;
            text-decoration: underline;
            cursor: pointer;
          }
          .ProseMirror a.tiptap-link:hover { color: #0e7490; }
          .ProseMirror p.is-editor-empty:first-child::before {
            content: attr(data-placeholder);
            color: #9ca3af;
            pointer-events: none;
            float: left;
            height: 0;
          }
        `}</style>
        <EditorContent editor={editor} />
      </div>

      {/* ── Character count footer ──────────────────────────────────── */}
      {!disabled && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '6px 16px',
            borderTop: '1px solid #f3f4f6',
            background: '#fafafa',
          }}
        >
          <span style={{ fontSize: 12, color: '#9ca3af' }}>
            {editor.storage.characterCount.words()} words · {editor.storage.characterCount.characters()} characters
          </span>
        </div>
      )}
    </div>
  )
}