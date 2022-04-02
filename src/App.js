import React, { useState } from "react";
//import Button from "@mui/material/Button"
import TextField from "@material-ui/core/TextField";

export default function MyComponent() {
    //const [toggleButton, setButton] = useState("Off");
    const [name, setName] = useState("");

    //this.handleInputChange = this.handleInputChange.bind(this);

    return(
//            <h1>Your Input Request to Server</h1>;
//
//            <p>Enter first name</p>
//            <TextField
//             id="standard-basic"
//             label = "first name"
//             varient = "standard"
//             value = {name}
//             onChange= {(e) => {
//                setName(e.target.value);
//            }}
//            />
//            <h2>Response from Server</h2>;

           /* handleInputChange(event) {
//                const target = event.target;
//                const value = target.name === 'maneeza' ? target.checked : target.value;
//                const name = target.name;

                fetch("http://127.0.0.1:5000/toggle_button/" + value)
                        .then(response =>
                            response.json()
                        )
                        .then(data => {
                            setText(data.last_name)
                            console.log(data)
                        })
                        .catch(error => {
                            console.log(error)
                        })

                this.setState({
                    [name]: value
                });
           }*/

       render() {
           return (
               <form>
                   <label>
                      Your Input Request to Server:
                      <input
                         name="firstName"
                         type="string"
                         value={this.state.firstName}
                         onChange={this.handleInputChange} />
                    </label>
               </form>
           );
       }

            <Button
                variant="outlined"
                onClick={() => {
                    fetch("http://127.0.0.1:5000/toggle_button/" + value)
                        .then(response =>
                            response.json()
                        )
                        .then(data => {
                            setText(data.last_name)
                            console.log(data)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }}
            >
//            //Submit
//            </Button>
//            <p>(name)</p>
        </div>
    );
}

