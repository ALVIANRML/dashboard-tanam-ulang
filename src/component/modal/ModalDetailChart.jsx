import { useState } from "react";
import { CalendarOutlined } from "@ant-design/icons";
import ChartKebun from "../chart/ChartKebun";
export default function ModalDetailChart({
  showModal,
  selectedItem,
  closeModal,
}) {
  const [activeTab, setActiveTab] = useState("input");
  const [tanggal, setTanggal] = useState("");
  const [realisasiFisik, setRealisasiFisik] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  if (!showModal || !selectedItem) {
    return null;
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log({
      tanggal,
      realisasiFisik,
      uploadedFile,
      selectedItem: selectedItem.title,
    });
    alert("Data berhasil dikirim!");
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "fadeIn 0.3s ease-in-out",
        }}
        onClick={closeModal}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "0",
            width: "80%",
            maxWidth: "1500px",
            height: "auto",
            
            borderRadius: 38,
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            position: "relative",
            animation: "slideUp 0.3s ease-out",
            overflow: "hidden",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              backgroundColor: "transparent",
              border: "none",
              fontSize: "28px",
              cursor: "pointer",
              color: "#666",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "rgba(255,255,255,0.2)";
              e.target.style.color = "#333";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#666";
            }}
          >
            ×
          </button>

          {/* Modal Content */}
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "40px",
            }}
          >
            {/* Title */}
            <h1
              style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                color: "#4E342E",
                margin: 0,
                marginBottom: "20px",
                textAlign: "center",
                paddingRight: "40px", // Account for close button
              }}
            >
              {selectedItem.title}
            </h1>
            <hr style={{border:"1px solid black", width:"100%"}}/>
            <ChartKebun/>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "30px",
              }}
            >
              <button
                 onClick={closeModal}
                style={{
                  backgroundColor: "#5BA87F",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  padding: "12px 32px",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginTop:"5vh",
                  width:"100%",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  minWidth: "100px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#7A9B6F";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#8FAE7B";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
