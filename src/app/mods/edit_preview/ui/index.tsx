import { useMD_editor } from './md_editor' // TODO: `@common` in tsconfig

export
const Edit_and_preview = () => {
  // markdown editor
  const md_editor = useMD_editor()

  return <div
    style={{
      display: 'flex',
      height: '100vh',
    }}
  >
    {md_editor.textarea}
    <article
      dangerouslySetInnerHTML={{__html: md_editor.parsed}}
      style={{
        flex: 1,
        padding: '0 3em',
        borderLeft: '1px solid rgba(var(--fc), .188)',
      }}
    />
  </div>
}
