"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import Modal from "./ui/modal";
import { ZoomIn, ZoomOut, Monitor, Maximize, Download } from "lucide-react";

export default function ResumeModal() {
  const [zoomLevel, setZoomLevel] = useState(100); // 100% zoom
  const resumeFile = "/resume/caitlin-thaeler-cv-2025-7.pdf"; // can be any file inside /public/resume

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 25, 300));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 25, 50));

  const handleFitHeight = () => setZoomLevel(100);

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
        trigger={<Button>View Resume</Button>}
        size="full"
        title="Resume"
        className="!max-w-[98vw] w-[98vw]"
        footer={
          <div className="flex justify-center gap-2 w-full">
            <Button variant="outline" size="sm" onClick={handleZoomOut} disabled={zoomLevel <= 50}>
              <ZoomOut className="w-4 h-4 mr-1" />
              Zoom Out
            </Button>
            <Button variant="outline" size="sm" onClick={handleZoomIn} disabled={zoomLevel >= 300}>
              <ZoomIn className="w-4 h-4 mr-1" />
              Zoom In
            </Button>
            <Button variant="outline" size="sm" onClick={handleFitHeight}>
              <Monitor className="w-4 h-4 mr-1" />
              Reset
            </Button>
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
