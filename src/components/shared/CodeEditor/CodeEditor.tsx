import React from "react";
import styles from "@/modules/v1Contests/components/play/play.module.css";
import { Editor } from "@monaco-editor/react";
import { handleEditorMount } from "@/modules/v1Contests/controller/handleEditorMount";
import { options } from "./config";
import { codeEditorProps } from "@/types/modules/v1Contests";

function CodeEditor({
  value,
  onChange,
  isFullScreen,
  cancelFullScreen,
}: codeEditorProps) {
  return (
    <div
      className={`${!isFullScreen ? styles.code_editor : styles.full_screen}`}
    >
      {isFullScreen && (
        <button onClick={cancelFullScreen}>Exit FullScreen</button>
      )}
      <Editor
        language="python"
        value={value}
        height="100%"
        onChange={(value) => onChange(value ?? "")}
        theme="vs-dark"
        onMount={handleEditorMount}
        options={options}
      />
    </div>
  );
}

export default React.memo(CodeEditor);
