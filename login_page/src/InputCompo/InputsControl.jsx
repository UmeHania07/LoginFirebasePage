import React from 'react'

function InputsControl(props) {
    return (
        <div className='container' style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",

        }}>
            {/* agr props mai kuch hoga toh he label show hoga */}
            {props.label && <label style={{
                fontWeight: "500",
                fontSize: "1rem",
                color: "#4b4b4b"
            }}> {props.label} </label>}
            
            <input type="email" {...props} style={{
               borderRadius:"5px",
               border:"1px solid #9900ff",
               outline:"none",
               padding:"8px 15px",
               color:"#000",
               height:"20px"

            }} />
        </div>
    )
}


export default InputsControl
