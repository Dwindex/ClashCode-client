/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";

interface ResizableSectionsProps {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
  initialLeftWidth?: number;
  minLeftWidth?: number;
  maxLeftWidth?: number;
  dividerWidth?: number;
  dividerColor?: string;
  dividerHoverColor?: string;
  orientation?: "horizontal" | "vertical";
  leftClassName?: string;
  rightClassName?: string;
  dividerClassName?: string;
  containerClassName?: string;
  onResize?: (leftWidth: number, rightWidth: number) => void;
}

const ResizableSections: React.FC<ResizableSectionsProps> = ({
  LeftComponent,
  rightComponent,
  initialLeftWidth = 50,
  minLeftWidth = 10,
  maxLeftWidth = 90,
  dividerWidth = 6,
  dividerColor = "#ccc",
  dividerHoverColor = "#999",
  orientation = "horizontal",
  leftClassName = "",
  rightClassName = "",
  dividerClassName = "",
  containerClassName = "",
  onResize = null,
}) => {
  const [leftWidth, setLeftWidth] = useState(initialLeftWidth);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
      document.body.style.cursor =
        orientation === "horizontal" ? "col-resize" : "row-resize";
      document.body.style.userSelect = "none";
    },
    [orientation]
  );

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      let newLeftWidth: number;

      if (orientation === "horizontal") {
        newLeftWidth =
          ((e.clientX - containerRect.left) / containerRect.width) * 100;
      } else {
        newLeftWidth =
          ((e.clientY - containerRect.top) / containerRect.height) * 100;
      }

      newLeftWidth = Math.max(
        minLeftWidth,
        Math.min(maxLeftWidth, newLeftWidth)
      );
      setLeftWidth(newLeftWidth);

      if (onResize) {
        onResize(newLeftWidth, 100 - newLeftWidth);
      }
    },
    [isDragging, minLeftWidth, maxLeftWidth, orientation, onResize]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      let newLeftWidth: number;
      if (orientation === "horizontal") {
        newLeftWidth =
          ((e.touches[0].clientX - containerRect.left) / containerRect.width) *
          100;
      } else {
        newLeftWidth =
          ((e.touches[0].clientY - containerRect.top) / containerRect.height) *
          100;
      }

      newLeftWidth = Math.max(
        minLeftWidth,
        Math.min(maxLeftWidth, newLeftWidth)
      );
      setLeftWidth(newLeftWidth);

      if (onResize) {
        onResize(newLeftWidth, 100 - newLeftWidth);
      }

      e.preventDefault();
    },
    [isDragging, minLeftWidth, maxLeftWidth, orientation, onResize]
  );

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }
  }, [isDragging]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove]);

  // Generate styles based on orientation and props
  const containerStyle: any = useMemo(
    () => ({
      display: "flex",
      width: "100%",
      height: "100%",
      flexDirection: orientation === "horizontal" ? "row" : "column",
      overflow: "hidden",
    }),
    [orientation]
  );

  const leftStyle = useMemo(
    () => ({
      [orientation === "horizontal" ? "width" : "height"]: `${leftWidth}%`,
      overflow: "auto",
    }),
    [leftWidth, orientation]
  );

  const rightStyle = useMemo(
    () => ({
      [orientation === "horizontal" ? "width" : "height"]: `${
        100 - leftWidth
      }%`,
      overflow: "auto",
    }),
    [leftWidth, orientation]
  );

  const dividerStyle: any = useMemo(
    () => ({
      [orientation === "horizontal" ? "width" : "height"]: `${dividerWidth}px`,
      [orientation === "horizontal"
        ? "minWidth"
        : "minHeight"]: `${dividerWidth}px`,
      backgroundColor: dividerColor,
      cursor: orientation === "horizontal" ? "col-resize" : "row-resize",
      position: "relative", // Ensure correct positioning for children
    }),
    [dividerWidth, dividerColor, orientation]
  );

  const combinedContainerClassName: any = useMemo(
    () => `resizable-container ${containerClassName}`.trim(),
    [containerClassName]
  );
  const combinedLeftClassName: any = useMemo(
    () => `resizable-section left-section ${leftClassName}`.trim(),
    [leftClassName]
  );
  const combinedRightClassName: any = useMemo(
    () => `resizable-section right-section ${rightClassName}`.trim(),
    [rightClassName]
  );
  const combinedDividerClassName: any = useMemo(
    () => `resizable-divider ${dividerClassName}`.trim(),
    [dividerClassName]
  );

  return (
    <div
      ref={containerRef}
      className={combinedContainerClassName}
      style={containerStyle}
    >
      <div className={combinedLeftClassName} style={leftStyle}>
        <LeftComponent />
      </div>

      <div
        className={combinedDividerClassName}
        style={dividerStyle}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseOver={() => {
          if (!isDragging) {
            const divider = document.querySelector(
              `.${combinedDividerClassName}`
            );
            if (divider)
              (divider as HTMLElement).style.backgroundColor =
                dividerHoverColor;
          }
        }}
        onMouseOut={() => {
          if (!isDragging) {
            const divider = document.querySelector(
              `.${combinedDividerClassName}`
            );
            if (divider)
              (divider as HTMLElement).style.backgroundColor = dividerColor;
          }
        }}
      />

      <div className={combinedRightClassName} style={rightStyle}>
        {rightComponent}
      </div>
    </div>
  );
};

export default React.memo(ResizableSections);
