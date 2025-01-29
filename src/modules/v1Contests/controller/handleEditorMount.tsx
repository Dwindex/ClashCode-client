import { OnMount } from "@monaco-editor/react";

export const handleEditorMount: OnMount = (editor, monaco) => {
  // Define a custom theme
  monaco.editor.defineTheme("custom-theme", {
    base: "vs-dark", // Valid values: "vs", "vs-dark", "hc-black"
    inherit: true, // Whether to inherit from the base theme
    rules: [
      { token: "", background: "001E3F" }, // Default background
      { token: "comment", foreground: "6a9955" }, // Comments
      { token: "keyword", foreground: "569cd6" }, // Keywords
    ],
    colors: {
      "editor.background": "#000F20", // Background color
      "editor.lineHighlightBackground": "#4C4C4C3F", // Line highlight
      "editor.selectionBackground": "#4C4C4C", // Selection background
    },
  });

  monaco.editor.setTheme("custom-theme");
};
