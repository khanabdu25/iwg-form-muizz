import React, { CSSProperties } from "react";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import dayjs from "dayjs";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./FormElement.css";

interface FormElement {
	labelText: string;
	formType: string;
	data?: string[];
}

const FormElement: React.FC<FormElement> = ({
	labelText,
	formType,
	data = [],
}) => {
	const [selection, setSelection] = React.useState("");
	const handleChange = (event: SelectChangeEvent) => {
		setSelection(event.target.value);
	};

	const getType = () => {
		if (formType === "text") {
			return (
				<TextField
					id="outlined-basic"
					variant="outlined"
					size="small"
					className="input-style"
				/>
			);
		} else if (formType === "select") {
			return (
				<FormControl
					sx={{ m: 0, minWidth: 0 }}
					size="small"
					className="input-style"
				>
					<Select
						value={selection}
						onChange={handleChange}
						displayEmpty
						inputProps={{ "aria-label": "Without label" }}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						{data.map((option) => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			);
		} else if (formType === "time") {
			return (
				<p>hello</p>
			);
		} else if (formType === "big-text"){
			return (
				<TextField
					className="input-style"
					multiline
					rows={4}
				/>
			);
		}
		return <p>{formType} is not a valid type you dog</p>;
	};

	return (
		<div className="form-item">
			<span className="">{labelText}</span>
			{getType()}
		</div>
	);
};

// 	return (
// 		<div style={containerStyle}>
// 			<div>
// 				<span style={labelStyle}>{labelText}</span>
// 				<span style={asteriskStyle}>*</span>
// 			</div>
// 			{getType()}
// 		</div>
// 	);
// };

// const labelStyle: CSSProperties = {
// 	color: "#a0aec0",
// 	fontSize: "15px",
// 	fontWeight: "normal",
// 	fontFamily: "Inter, sans-serif",
// 	textDecoration: "underline",
// };

// const asteriskStyle: CSSProperties = {
// 	color: "#e3342f",
// 	fontSize: "15px",
// 	fontWeight: "normal",
// 	fontFamily: "Inter, sans-serif",
// };

// const containerStyle: CSSProperties = {
// 	display: "flex",
// 	flexDirection: "column",
// 	alignItems: "flex-start",
// 	gap: "5px",
// 	backgroundColor: "black",
// 	width: "100%",
// 	// margin: "2px"
// };

export default FormElement;
