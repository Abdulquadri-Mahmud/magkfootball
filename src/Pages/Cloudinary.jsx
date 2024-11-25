import React, { useState } from "react";

export default function CloudinaryUpload () {

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setUploading(true);

    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", "your_upload_preset"); // Replace with your upload preset
    
    formData.append("cloud_name", "your_cloud_name"); // Replace with your Cloudinary cloud name

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setUrl(data.secure_url);
      alert("Upload successful!");
      
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="py-20 px-7">
      <h2>Upload Image or Video to Cloudinary</h2>
      <input type="file" onChange={handleFileChange} accept="image/*,video/*" />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button> <br />
      {url && (
        <div>
          <h3>Uploaded File:</h3>
          {file.type.startsWith("image/") ? (
            <img src={url} alt="Uploaded File" style={{ maxWidth: "300px", marginTop: "10px" }} />
          ) : (
            <video controls style={{ maxWidth: "300px", marginTop: "10px" }}>
              <source src={url} type={file.type} />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
};
