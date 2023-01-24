import React, { useState } from "react";
import { createEditor, BaseEditor, Descendant } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";

type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = { text: string };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: any = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

function App() {
  const [editor] = useState(() => withReact(createEditor()));
  return (
    <div className="flex justify-center items-center w-screen h-screen mx-auto">
      <Slate editor={editor} value={initialValue}>
        <Editable className="border w-[500px] min-h-[400px]" />
      </Slate>
    </div>
  );
}

export default App;
