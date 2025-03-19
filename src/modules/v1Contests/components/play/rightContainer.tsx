import DropDown from "@/components/molecules/Dropdown";
import constants from "@/constants";
import React from "react";
import styles from './play.module.css';
import CodeEditor from "@/components/shared/CodeEditor/CodeEditor";
import TestResults from "./TestResults";
import { runDataModal } from "@/types/modules/v1Contests";

interface RightContainerProps {
  isSubmitting: boolean;
  language: string;
  setLanguage: (language: string) => void;
  code: string;
  setCode: (code: string) => void;
  runData: runDataModal | undefined;
  setSubmitting: (isSubmitting: boolean) => void;
  fullScreen: boolean;
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RightContainer = ({
  isSubmitting,
  language,
  setLanguage,
  code,
  setCode,
  runData,
  setSubmitting,
  fullScreen,
  setFullScreen,
}: RightContainerProps) => {
  return (
    <div className={styles.right_cont}>
      <div
        style={{
          height: isSubmitting ? "49%" : "70%",
        }}
        className={styles.code_cont}
      >
        <div className={styles.code_headder}>
          <div>
            <DropDown
              placeHolder="Language"
              height="30px"
              borderRadius="6px"
              value={language}
              onChange={(e: string) => setLanguage(e)}
              options={constants.monacoLanguages}
            />
            <DropDown
              placeHolder="Themes"
              height="30px"
              borderRadius="6px"
              value={""}
              onChange={(e: string) => {
                console.log(e);
              }}
              options={constants.monacoLanguages}
            />
          </div>
          <div>
            <img
              className={styles.headder_img}
              onClick={() => setCode("// write your code below this line")}
              src={"/static/icons/reset.svg"}
              height={30}
              width={30}
              alt="reset"
            />
            <img
              className={styles.headder_img}
              onClick={() => setFullScreen(!fullScreen)}
              src={"/static/icons/fullscreen.svg"}
              height={30}
              width={30}
              alt="reset"
            />
          </div>
        </div>
        <CodeEditor
          isFullScreen={fullScreen}
          cancelFullScreen={() => setFullScreen(false)}
          value={code}
          onChange={(e: string) => setCode(e)}
        />
      </div>
      <TestResults
        isSubmitting={isSubmitting}
        runData={runData}
        onClose={() => setSubmitting(false)}
      />
    </div>
  );
};

export default React.memo(RightContainer);
