import { useState } from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import dayjs from "dayjs";
export default function ModalPekerjaan({
  showModal,
  selectedItem,
  closeModal,
}) {
  const [activeTab, setActiveTab] = useState("input");
  const [tanggal, setTanggal] = useState("");
  const [realisasiFisik, setRealisasiFisik] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  if (!showModal || !selectedItem) {
    return null;
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setUploadedFile(file);
      setPreviewImage(URL.createObjectURL(file));
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
          backgroundColor: "#F8F9F4",
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
            backgroundColor: "#DDE1E4",
            padding: "0",
            width: "80%",
            // maxWidth: "800px",
            height: "90%",
            // maxHeight: "700px",
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

            {/* Divider */}
            <hr
              style={{
                width: "100%",
                border: "none",
                borderTop: "2px solid #B8BCC8",
                margin: "0 0 30px 0",
              }}
            />

            {/* Tabs */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#C5C9D1",
                  borderRadius: "25px",
                  padding: "4px",
                  width: "400px",
                }}
              >
                <button
                  onClick={() => setActiveTab("input")}
                  style={{
                    flex: 1,
                    padding: "12px 24px",
                    borderRadius: "21px",
                    border: "none",
                    backgroundColor:
                      activeTab === "input" ? "#8FAE7B" : "transparent",
                    color: activeTab === "input" ? "white" : "#666",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  Masukkan Data
                </button>
                <button
                  onClick={() => setActiveTab("histori")}
                  style={{
                    flex: 1,
                    padding: "12px 24px",
                    borderRadius: "21px",
                    border: "none",
                    backgroundColor:
                      activeTab === "histori" ? "#8FAE7B" : "transparent",
                    color: activeTab === "histori" ? "white" : "#666",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  Histori
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              {activeTab === "input" ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "25px",
                  }}
                >
                  {/* Tanggal Field */}
                  <div style={{ position: "relative", width: "100%" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#4E342E",
                        marginBottom: "8px",
                      }}
                    >
                      Tanggal
                    </label>
                    <input
                      type="date"
                      value={tanggal}
                      onChange={(e) => setTanggal(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        paddingRight: "40px", // tambahkan ruang untuk ikon
                        borderRadius: "12px",
                        border: "2px solid #B8BCC8",
                        backgroundColor: "white",
                        fontSize: "16px",
                        outline: "none",
                        color: "black",
                        transition: "border-color 0.2s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#8FAE7B";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#B8BCC8";
                      }}
                    />
                    <CalendarOutlined
                      size={20}
                      color="#4E342E"
                      style={{
                        position: "absolute",
                        right: "16px",
                        top: "70%",
                        height: "100%",
                        width: "auto",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>

                  {/* Realisasi Fisik Field */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#4E342E",
                        marginBottom: "8px",
                      }}
                    >
                      Realisasi Fisik
                    </label>
                    <input
                      type="text"
                      value={realisasiFisik}
                      onChange={(e) => setRealisasiFisik(e.target.value)}
                      placeholder="Masukkan realisasi fisik..."
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "12px",
                        color: "black",
                        border: "2px solid #B8BCC8",
                        backgroundColor: "white",
                        fontSize: "16px",
                        outline: "none",
                        transition: "border-color 0.2s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#8FAE7B";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#B8BCC8";
                      }}
                    />
                  </div>

                  {/* Upload Foto Field */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#4E342E",
                        marginBottom: "8px",
                      }}
                    >
                      Masukkan Foto
                    </label>
                    <div
                      style={{
                        width: "100%",
                        height: "30vh",
                        borderRadius: "12px",
                        border: "2px dashed #B8BCC8",
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      onClick={() =>
                        document.getElementById("file-upload").click()
                      }
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = "#8FAE7B";
                        e.target.style.backgroundColor = "#f8f9fa";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = "#B8BCC8";
                        e.target.style.backgroundColor = "white";
                      }}
                    >
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        style={{ display: "none" }}
                      />
                      {previewImage ? (
                        <img
                          src={previewImage}
                          alt="Preview"
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                            borderRadius: "12px",
                          }}
                        />
                      ) : (
                        <>
                          <div
                            style={{
                              fontSize: "48px",
                              color: "#B8BCC8",
                              marginBottom: "8px",
                            }}
                          >
                            ↑
                          </div>
                          <p
                            style={{
                              margin: 0,
                              color: "#999",
                              fontSize: "16px",
                              textAlign: "center",
                            }}
                          >
                            Masukkan bukti foto pengerjaan Anda.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    color: "#666",
                    fontSize: "18px",
                  }}
                >
                  Belum ada data histori
                </div>
              )}
            </div>

            {/* Submit Button - Only show on input tab */}
            {activeTab === "input" && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "30px",
                }}
              >
                <button
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: "#8FAE7B",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    padding: "12px 32px",
                    fontSize: "16px",
                    fontWeight: "600",
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
                  Kirim
                </button>
              </div>
            )}
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
