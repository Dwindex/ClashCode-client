import { editor } from "monaco-editor";

export const options: editor.IStandaloneEditorConstructionOptions = {
  minimap: { enabled: false },
  automaticLayout: true,
  suggestOnTriggerCharacters: true,
  quickSuggestions: {
    other: true,
    comments: false,
    strings: true,
  },
  wordBasedSuggestions: "currentDocument",
  parameterHints: { enabled: true },
  suggest: {
    snippetsPreventQuickSuggestions: false,
    filterGraceful: true,
  },
};
