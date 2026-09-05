import React, { useState, useRef } from "react";
import "./DataUpload.css";
import {
  UploadCloud, FileText, Database, Radio, X,
  CheckCircle2, Loader2, Clock, HardDrive
} from "lucide-react";

const FORMAT_TABS = [
  { id: "netcdf", label: "NetCDF", icon: Database, accept: ".nc,.netcdf,.cdf" },
  { id: "csv", label: "CSV / ASCII", icon: FileText, accept: ".csv,.txt,.asc" },
  { id: "future", label: "Future Sensors & Model Variables", icon: Radio, accept: "*" },
];

// Mock existing data — replace with API response later
const EXISTING_DATA = [
  { id: "e1", name: "arabian_sea_temp_2024.nc", type: "netcdf", size: 48200000, date: "2026-08-12", status: "processed" },
  { id: "e2", name: "buoy_readings_july.csv", type: "csv", size: 1240000, date: "2026-08-09", status: "processed" },
  { id: "e3", name: "salinity_profile_indian_ocean.nc", type: "netcdf", size: 76500000, date: "2026-08-03", status: "processed" },
  { id: "e4", name: "sensor_calibration_log.csv", type: "csv", size: 340000, date: "2026-07-28", status: "processed" },
  { id: "e5", name: "model_variables_draft.txt", type: "future", size: 89000, date: "2026-07-15", status: "processed" },
];

const DataUpload = () => {
  const [activeTab, setActiveTab] = useState("netcdf");
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState("idle");
  const [existingData, setExistingData] = useState(EXISTING_DATA);
  const [existingFilter, setExistingFilter] = useState("all");
  const inputRef = useRef(null);

  const currentTab = FORMAT_TABS.find((t) => t.id === activeTab);

  const handleFiles = (fileList) => {
    const newFiles = Array.from(fileList).map((file) => ({
      name: file.name,
      size: file.size,
      type: activeTab,
      id: `${file.name}-${Date.now()}-${Math.random()}`,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
    setStatus("idle");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.length) handleFiles(e.dataTransfer.files);
  };

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleProcess = () => {
    if (files.length === 0) return;
    setStatus("processing");
    setTimeout(() => {
      setExistingData((prev) => [
        ...files.map((f) => ({
          id: f.id,
          name: f.name,
          type: f.type,
          size: f.size,
          date: new Date().toISOString().split("T")[0],
          status: "processed",
        })),
        ...prev,
      ]);
      setFiles([]);
      setStatus("done");
    }, 1800);
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const filteredExisting =
    existingFilter === "all"
      ? existingData
      : existingData.filter((f) => f.type === existingFilter);

  return (
    <div className="upload_page">

      {/* ---------- UPLOAD SECTION ---------- */}
      <div className="upload_container">

        <div className="upload_header">
          <span>Data Ingestion</span>
          <h2>Upload &amp; Process New Data</h2>
        </div>

        <div className="upload_tabs">
          {FORMAT_TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`upload_tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setStatus("idle");
                }}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          className={`upload_dropzone ${isDragging ? "dragging" : ""}`}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <UploadCloud size={34} />
          <p>
            Drag &amp; drop <strong>{currentTab.label}</strong> files here, or{" "}
            <span className="upload_browse">browse</span>
          </p>
          <span className="upload_hint">Accepted: {currentTab.accept}</span>

          <input
            ref={inputRef}
            type="file"
            multiple
            accept={currentTab.accept}
            hidden
            onChange={(e) => e.target.files?.length && handleFiles(e.target.files)}
          />
        </div>

        {files.length > 0 && (
          <div className="upload_filelist">
            {files.map((file) => (
              <div key={file.id} className="upload_fileitem">
                <div className="upload_fileinfo">
                  <FileText size={16} />
                  <span className="upload_filename">{file.name}</span>
                  <span className="upload_filesize">{formatSize(file.size)}</span>
                  <span className="upload_filetag">{file.type}</span>
                </div>
                <button className="upload_removebtn" onClick={() => removeFile(file.id)}>
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="upload_actions">
          <span className="upload_count">
            {files.length} file{files.length !== 1 ? "s" : ""} queued
          </span>

          <button
            className="upload_processbtn"
            disabled={files.length === 0 || status === "processing"}
            onClick={handleProcess}
          >
            {status === "processing" && <><Loader2 size={16} className="spin" /> Processing...</>}
            {status === "done" && <><CheckCircle2 size={16} /> Processed</>}
            {status === "idle" && "Process Data"}
          </button>
        </div>

        {status === "done" && (
          <div className="upload_success">
            <CheckCircle2 size={16} />
            Files processed and added to your data library (mock — backend not connected yet).
          </div>
        )}
      </div>

      {/* ---------- EXISTING DATA SECTION (no delete button) ---------- */}
      <div className="existing_container">

        <div className="existing_header">
          <div>
            <span>Data Library</span>
            <h2>Already Uploaded</h2>
          </div>

          <div className="existing_filters">
            {["all", "netcdf", "csv", "future"].map((f) => (
              <button
                key={f}
                className={`existing_filterbtn ${existingFilter === f ? "active" : ""}`}
                onClick={() => setExistingFilter(f)}
              >
                {f === "all" ? "All" : FORMAT_TABS.find((t) => t.id === f)?.label || f}
              </button>
            ))}
          </div>
        </div>

        {filteredExisting.length === 0 ? (
          <div className="existing_empty">No data uploaded yet for this filter.</div>
        ) : (
          <div className="existing_list">
            {filteredExisting.map((item) => (
              <div key={item.id} className="existing_item">
                <div className="existing_iteminfo">
                  <FileText size={16} />
                  <span className="existing_itemname">{item.name}</span>
                  <span className="existing_itemtag">{item.type}</span>
                </div>

                <div className="existing_itemmeta">
                  <span><HardDrive size={13} /> {formatSize(item.size)}</span>
                  <span><Clock size={13} /> {item.date}</span>
                  <span className="existing_status">
                    <CheckCircle2 size={13} /> {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DataUpload;