import React, { useState, useRef, useEffect } from "react";
import "./test.css"; // You can create this CSS file or use inline styles

const ResizableSections = () => {
  // State to track if user is currently dragging
  const [isDragging, setIsDragging] = useState(false);

  // Refs to access DOM elements
  const containerRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  // Start dragging
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  useEffect(() => {
    // Handle mouse movement during drag
    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();

      // Calculate position relative to container
      const mousePosition = e.clientX - containerRect.left;
      const containerWidth = containerRect.width;

      // Calculate percentage (with limits to prevent tiny sections)
      const percentage = Math.min(
        Math.max((mousePosition / containerWidth) * 100, 10),
        90
      );

      // Apply new widths
      leftSectionRef.current.style.width = `${percentage}%`;
      rightSectionRef.current.style.width = `${100 - percentage}%`;
    };

    // End dragging
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // Add event listeners when dragging starts
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      // Change cursor for entire document during resize
      document.body.style.cursor = "col-resize";
    }

    // Clean up
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
    };
  }, [isDragging]);

  return (
    <div className="resizable-container" ref={containerRef}>
      {/* Left section */}
      <div className="section left-section" ref={leftSectionRef}>
        <h2>Left Section</h2>
        <p>This section can be resized.</p>
      </div>

      {/* Resizer element */}
      <div className="resizer-line" onMouseDown={handleMouseDown} />

      {/* Right section */}
      <div className="section right-section" ref={rightSectionRef}>
        <h2>Right Section</h2>
        <p>This section can be resized.</p>
      </div>
    </div>
  );
};

export default ResizableSections;
