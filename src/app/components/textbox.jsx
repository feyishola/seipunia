export default function TextBox({style, message}){

    const defaultStyles = {
        // textWrap:"wrap",
        paddingTop:"16px",
        paddingBottom:"16px",
        textAlign:"center",
    }

    const combinedStyles = {...defaultStyles, ...style}

return(
    <div className="text-wrap py-4 text-center"  style={combinedStyles}>
        <p>{message}</p>
    </div>
)
}