import React, { useMemo } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const TextEditor = (props: TextEditorProps) => {
  const { value, onChange } = props;

  const config = useMemo(
    () => ({
      height: 500,
      menubar: false,
      plugins: [
        "advlist",
        "autolink",
        "lists",
        "link",
        "image",
        "charmap",
        "preview",
        "anchor",
        "searchreplace",
        "visualblocks",
        "code",
        "fullscreen",
        "insertdatetime",
        "media",
        "table",
        "wordcount",
        "forecolor",
        "backcolor",
      ],
      toolbar:
        "undo redo | blocks formatselect | " +
        "bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter " +
        "alignright alignjustify | bullist numlist outdent indent | " +
        "link image table | removeformat | code | fullscreen | help",
      content_style:
        "body { font-family:Inter,sans-serif; font-size:16px; }" +
        "p { margin: 10px 0; }",

      content_css_add: `
        /* Using the most specific selector to override TinyMCE's default content styling */
        body.mce-content-body { 
            /* Set content background to transparent */
            background-color: transparent !important; 
            /* Set default text color to white */
            color: #ffffff !important; 
            padding: 1rem;
        }
        
        /* Ensure all toolbar/UI elements match the dashboard's dark theme */
        .tox:not([dir=rtl]) .tox-toolbar-overlord {
          border-top: none !important;
        }
        .tox {
            background-color: #1E1E1E !important; /* Forces background of the main editor wrapper */
        }
        .tox .tox-menubar, .tox .tox-toolbar-overlord, .tox .tox-statusbar {
            background-color: #1E1E1E !important; /* Matches dashboard background */
            border-top: 1px solid #333 !important;
            border-bottom: 1px solid #333 !important;
            color: #d0d0d0 !important;
        }
        .tox .tox-toolbar, .tox .tox-toolbar__group {
            background-color: #1E1E1E !important; /* Matches dashboard background */
        }
        .tox .tox-tbtn {
            color: #d0d0d0 !important;
        }
        .tox .tox-tbtn:hover {
          background-color: #333333 !important;
        }
        .tox .tox-split-button:hover {
          background-color: #333333 !important;
        }
      `,
      skin: "oxide-dark",
    }),
    []
  );

  return (
    <div className="rounded-lg shadow-sm bg-[#1E1E1E]">
      <Editor
        apiKey="k7hjglyssyn9zfo3hb4iur3k4id3ai0amfs373gfs27fi76g"
        value={value}
        onEditorChange={onChange}
        init={config}
      />
    </div>
  );
};

export default React.memo(TextEditor);
