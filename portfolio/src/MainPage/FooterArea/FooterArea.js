import {Typography} from "@mui/material";

const footerStyle = {
    "height" : "8vh",
    "display" : "flex",
    "flexDirection" : "column",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor" : "rgba(45, 42, 46, 1)"
}
function FooterArea () {
    return (
        <div id="footer" style={footerStyle}>
            <Typography variant="body2" sx={{color: "white", textAlign: "center"}}>
                Copyright &copy; 2022 Austin Phan
            </Typography>
            <Typography variant="body2" sx={{color: "white", textAlign: "center"}}>
                A project created for CS1300, User Experiences and Interfaces.
            </Typography>
        </div>
    )
}
export default FooterArea;