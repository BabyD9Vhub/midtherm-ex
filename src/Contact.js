import React from "react";
import { Layout } from "./App";


function Contact() {

    return (
        <>

            <Layout />
            <div className="intro" style={{ width: '100%', height: '100%', display: "flex", justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
                <img src="/funny.jpg" style={{ width: '300px', height: '300px' }}>
                </img>
                <p>นางสาวจิราวรรณ ผางพันธ์ 66114640206</p>
                <p>มีความรู้สึกว่าทำไม่ทันค่ะ เหมือนหน้าหนูนั่นแหละค่ะ</p>
                <p>คำคม เจ้าสิแล่นตามไผ๋อ้ายบ่สน แต่เจ้าอย่าแล่นล้มอ้ายอยากหัว</p>
                <p>ขอบคุณค่ะ</p>

            </div>
        </>
    );
}

export default Contact;