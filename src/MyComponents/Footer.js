import React from 'react'

export const Footer = () => {
    let footerStyle ={
        position: "absolute",
        width: "100%",
        top: "auto",
        border:"3px solid red"
    }

    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; myinfo.com
            </p>
        </footer>
    )
}
