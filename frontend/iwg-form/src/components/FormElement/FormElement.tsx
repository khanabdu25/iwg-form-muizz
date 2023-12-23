import React from "react";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import dayjs from "dayjs";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
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
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateTimeField
						defaultValue={dayjs("2022-04-17T15:30")}
						size="small"
						className="input-style"
					/>
				</LocalizationProvider>
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

export default FormElement;
