"use client";

import React, { useState, useEffect } from "react";
import styles from "./AnimatedDownloadButton.module.css";

interface AnimatedDownloadButtonProps {
  downloadUrl?: string;
  fileName?: string;
  className?: string;
}

export const AnimatedDownloadButton: React.FC<AnimatedDownloadButtonProps> = ({
  downloadUrl = "/resume.pdf",
  fileName = "Rabbi_Frontend_Developer_Resume.pdf",
  className = "",
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isChecked) {
      // 3.5s matches the CSS animation duration
      timer = setTimeout(() => {
        setIsCompleted(true);
      }, 3500);
    }
    return () => clearTimeout(timer);
  }, [isChecked]);

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();

    if (isCompleted) {
      // If already installed/downloaded, clicking "Open" opens the PDF in a new tab
      window.open(downloadUrl, "_blank", "noopener,noreferrer");
      return;
    }

    if (!isChecked) {
      setIsChecked(true);
      // Trigger actual download
      triggerDownload();
    }
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <label
        className={styles.label}
        onClick={handleClick}
        title={isCompleted ? "Open Resume (PDF)" : "Download Resume (PDF)"}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick(e as unknown as React.MouseEvent<HTMLLabelElement>);
          }
        }}
      >
        <input
          type="checkbox"
          className={styles.input}
          checked={isChecked}
          readOnly
          aria-label={isCompleted ? "Open Resume" : "Download Resume"}
        />
        <span className={styles.circle}>
          <svg
            className={styles.icon}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            />
          </svg>
          <div className={styles.square} />
        </span>
        <p className={styles.title}>Download</p>
        <p className={styles.title}>Open</p>
      </label>
    </div>
  );
};
