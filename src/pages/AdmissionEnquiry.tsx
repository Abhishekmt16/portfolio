
function AdmissionEnquiry() {
  return (
    <div style={{ minHeight: "100vh", padding: "40px 20px" }}>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "30px",
          background: "white",
          color: "black",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2>School Admission Enquiry Form</h2>

        <form
          action="https://crm.zoho.in/crm/WebToLeadForm"
          method="POST"
          acceptCharset="UTF-8"
        >
          <input
            type="hidden"
            name="xnQsjsdp"
            value="13e917e5b44d88e3df32010335a93393d6ffe106d8c60c3ce8435408b8a7a21b"
          />

          <input type="hidden" name="zc_gad" value="" />

          <input
            type="hidden"
            name="xmIwtLD"
            value="9b47407e331b3442303527c368b344ea7167eee73415317ec4fa3d27a17483db1af55a2ea33ad3f1e7ef7bdd3054385c"
          />

          <input type="hidden" name="actionType" value="TGVhZHM=" />

          <input type="hidden" name="returnURL" value="https://abhishekmtr16-portfolio.vercel.app/admission-enquiry" />

          <input type="hidden" name="Company" value="School Admission" />

          <div style={{ marginBottom: "18px" }}>
            <label>First Name</label>
            <input
              type="text"
              name="First Name"
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "18px" }}>
            <label>
              Last Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              name="Last Name"
              required
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "18px" }}>
            <label>Email</label>
            <input
              type="email"
              name="Email"
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "18px" }}>
            <label>Phone</label>
            <input
              type="text"
              name="Phone"
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "18px" }}>
            <label>Lead Source</label>
            <select
              name="Lead Source"
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            >
              <option value="-None-">-None-</option>
              <option value="Web Download">Web Download</option>
              <option value="Online Store">Online Store</option>
              <option value="Advertisement">Advertisement</option>
              <option value="External Referral">External Referral</option>
            </select>
          </div>

          <input
            type="hidden"
            name="Lead Status"
            value="Not Contacted"
          />

          <div style={{ marginBottom: "18px" }}>
            <label>Parent Name</label>
            <input
              type="text"
              name="LEADCF1"
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "18px" }}>
            <label>
              Interested Class <span style={{ color: "red" }}>*</span>
            </label>
            <select
              name="LEADCF2"
              required
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            >
              <option value="-None-">-None-</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
            </select>
          </div>
        <input
            type="hidden"
            name="aG9uZXlwb3Q"
            value=""
            />

          <button
            type="submit"
            style={{
              padding: "10px 25px",
              cursor: "pointer",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdmissionEnquiry;