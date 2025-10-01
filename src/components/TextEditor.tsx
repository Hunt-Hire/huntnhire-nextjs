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
      height: 400,
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
        "undo redo | formatselect | " +
        "bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter " +
        "alignright alignjustify | bullist numlist outdent indent | " +
        "link image table | removeformat | code | fullscreen | help",
      content_style:
        "body { font-family:Inter,sans-serif; font-size:16px; }" +
        "p { margin: 10px 0; }",

      skin: "oxide-dark",
    }),
    []
  );

  return (
    <Editor
      className="bg-[#1E1E1E] rounded-lg"
      apiKey="k7hjglyssyn9zfo3hb4iur3k4id3ai0amfs373gfs27fi76g"
      value={value}
      onEditorChange={onChange}
      init={config}
    />
  );
};

export default React.memo(TextEditor);
