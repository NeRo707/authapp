import { TextField } from "@mui/material";
import './InputControl.styles.css';


function InputControl(props:any) {
  return (
    <div className="inputs">
      <TextField
       InputProps={{
        classes: {
          input: 'custom-text-color',
          placeholder: 'MuiInputBase-input',
          notchedOutline: 'custom-outline-color',
        },
      }}

      InputLabelProps={{
        style: { color: 'white' },
      }}

      type="text" {...props} id="outlined-basic" variant="outlined" />
    </div>
  );
}

export default InputControl;