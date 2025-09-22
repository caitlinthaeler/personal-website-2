"use client";
import { Button } from "./ui/button";
import Modal from "./ui/modal";
import { Maximize, Download } from "lucide-react";
import {FileIcon} from '@primer/octicons-react'

export default function ResumeModal() {
  const resumeFile = "/resume/caitlin-thaeler-cv-2025-7.pdf"; // can be any file inside /public/resume

  const handleFullScreen = () => {
    window.open(resumeFile, "_blank");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <div>
      <Modal
        trigger={
          <Button variant="outline">
            Resume
            <FileIcon size={16} />
          </Button>}
        size="full"
        title="Resume"
        className="!max-w-[98vw] w-[98vw] gap-2"
        footer={
          <div className="flex justify-center gap-2 w-full">
            <Button variant="outline" size="sm" onClick={handleFullScreen}>
              <Maximize className="w-4 h-4 mr-1" />
              Full Screen
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700"
            >
              <Download className="w-4 h-4 mr-1" />
              Download
            </Button>
          </div>
        }
      >
        <div className="w-full h-[75vh] overflow-hidden border rounded relative">
          <iframe src={resumeFile} className="w-full h-full"/>
        </div>
      </Modal>
    </div>
  );
}
