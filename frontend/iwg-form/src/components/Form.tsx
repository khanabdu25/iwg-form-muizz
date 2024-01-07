// return (
//     <div>
//       {infoRequested ? (
//         <Dialog
//         open={infoRequested}
//         TransitionComponent={Transition}
//         onClose={handleInfoRequestedToggle}
//         maxWidth="lg" // Set maximum width
//         fullWidth={true} // Dialog takes the full width of the screen
//         PaperProps={{
//           style: {
//             minHeight: "80vh", // Minimum height of the dialog
//             maxHeight: "90vh", // Maximum height of the dialog
//             width: "80%", // Set custom width
//             // Add more custom styles if needed
//           },
//         }}
//       >
//         <div className="box">
//           <h1 className="form-heading" style={{ padding: 10 }}>
//             About
//           </h1>
//           <button
//             onClick={handleInfoRequestedToggle}
//             style={{
//               border: "none",
//               background: "none",
//               padding: "0",
//               cursor: "pointer",
//             }}
//           >
//             <img
//               style={{
//                 width: "50px",
//                 height: "50px",
//                 flexShrink: 0,
//               }}
//               src={CLOSEICON_PATH}
//               alt="Description"
//             />
//           </button>
//         </div>
//         <p className="required bottom-margin" style={{ padding: 10 }}>
//           Save time by submitting one form instead of 6+. “Report an Incident”
//           is designed to accelerate and simplify how you report islamaphobia
//           on campus. By filling out this one form, your report is sent to
//           multiple official reporting channels, including University of
//           Michigan departments (e.g. ECRT) and CAIR.
//         </p>
//         <h1 className="form-heading" style={{ padding: 10 }}>
//           Where Your Data is Shared
//         </h1>
//         <p className="required" style={{ paddingRight: 10, paddingLeft: 10 }}>
//           We only ask for data that is required by the different reporting
//           channels you send to. Here is the data each reporting channel asks
//           for:
//         </p>
//         <h1 className="form-heading" style={{ padding: 10 }}>
//           Privacy Statement
//         </h1>
//         <p
//           className="required margin-bottom"
//           style={{ paddingRight: 10, paddingLeft: 10, paddingBottom: 30 }}
//         >
//           Muslim Coalition only retains non-identifiable data from your
//           submission (e.g. where your report is sent to, Religion).
//         </p>
//         <div className="row required" style={{ paddingLeft: 10 }}>
//           <small>By Muslim Coalition ™</small>
//         </div>
//       </Dialog>
//       ) : (
//         <main id="mainpage">
//       <form ref={formRef} className="form-container">
//         <div className="row max-space">
//           <div
//             className="child"
//             style={{ display: "flex", alignItems: "center" }}
//           >
//             <h1 className="form-heading">Report an Incident</h1>
//             <button
//               onClick={handleInfoRequestedToggle}
//               style={{
//                 border: "none",
//                 background: "none",
//                 padding: "0",
//                 cursor: "pointer",
//               }}
//             >
//               <img
//                 style={{
//                   width: "24px", // Equivalent to w-6
//                   height: "24px", // Equivalent to h-6
//                   flexShrink: 0,
//                 }}
//                 src={LEARNMORE_PATH}
//                 alt="Description"
//               />
//             </button>
//           </div>
//           <div className="child">
//             <img
//               style={{
//                 maxWidth: "60px",
//                 maxHeight: "61px",
//                 height: "auto",
//                 width: "auto",
//                 flexShrink: 0,
//               }}
//               src={LOGO_PATH}
//               alt="Description"
//             />
//           </div>
//         </div>
//         <div>
//           <span className="asterisk">*</span>
//           <span className="information"> </span>
//           <span className="required">Required</span>
//         </div>
//         <div className="subheader">Send my report to:</div>

//         <div id="checkbox-style">
//           <FormElement labelText="CAIR" formType="checkbox" />
//           <FormElement labelText="DPSS" formType="checkbox" />
//           <FormElement labelText="ECRT" formType="checkbox" />
//         </div>

//         <Spacer height={20} />

//         <div className="subheader">Enter your Information:</div>

//         <div className="checkbox-style">
//           <FormElement
//             labelText="Keep my report anonymous"
//             formType="checkbox"
//           />
//           <FormElement
//             labelText="I consent to give media my contact info"
//             formType="checkbox"
//           />
//         </div>

//         <Spacer height={15} />

//         <div className="row">
//           <FormElement labelText="Umich Email" formType="text" />
//           <FormElement
//             labelText="Affilitation"
//             formType="select"
//             data={AffiliationList}
//           />
//         </div>

//         <div className="row">
//           <FormElement labelText="First Name" formType="text" />
//           <FormElement labelText="Last Name" formType="text" />
//         </div>

//         <div className="row">
//           <FormElement labelText="Phone" formType="text" />
//           <FormElement labelText="Zip" formType="text" />
//         </div>

//         <div className="row">
//           <FormElement labelText="Street" formType="text" />
//           <FormElement labelText="City" formType="text" />
//           <FormElement labelText="State" formType="select" data={usStates} />
//         </div>

//         <div className="row">
//           <FormElement
//             labelText="Religion"
//             formType="select"
//             data={religions}
//           />
//           <FormElement labelText="Race/Ethnicity" formType="text" />
//         </div>

//         <Spacer height={20} />

//         <div className="subheader">Tell us about the incident:</div>

//         <div className="row">
//           <FormElement labelText="Incident Location" formType="text" />
//           <FormElement labelText="Incident Date/Time" formType="time" />
//         </div>

//         <div className="row">
//           <FormElement
//             labelText="Description of Incident"
//             formType="multiline-text"
//           />
//         </div>
//         <div className="row">
//           <FormElement labelText="Attach Evidence" formType="image" />
//         </div>

//         <Spacer height={20} />

//         <button id="submit-button">
//           Submit
//           <img id="send-symbol" src="/iconamoon_send-light.svg" alt="Send" />
//         </button>
//       </form>
//     </main>
//       )}
//     </div>
//   );
