import React, { Fragment } from "react"
import { QRCode } from "react-qrcode-logo";
import derivLogo from '../../assets/deriv-logo.webp'
import html2canvas from 'html2canvas';
import classes from './qr-code.module.scss'

const QrCode: React.FC = (props: any) => {

    const qrConfig: any = {
        ecLevel: 'M',
        enableCORS: false,
        quietZone: 10,
        size: 200,
        bgColor: "#000000",
        fgColor: "#52A7BC",
        logoImage: derivLogo,
        logoOpacity: 1,
        qrStyle: "dots",
        eyeRadius: [
            { inner: [0, 0, 0, 0], outer: [50, 0, 0, 0] },
            { inner: [0, 0, 0, 0], outer: [0, 50, 0, 0] },
            { inner: [0, 0, 0, 0], outer: [0, 0, 0, 50] }
        ]
    }

    const downloadHandler = () => {
        html2canvas(document.querySelector('#react-qrcode-logo') as any).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'contact.png';
            link.href = canvas.toDataURL();
            link.click();
        })
    }
    const createVCard = () => {
        const vCardsJS = require('vcards-js');
        const vCard = vCardsJS();
        //Mock data
        vCard.firstName = 'Eric';
        vCard.middleName = 'J';
        vCard.lastName = 'Nesser';
        vCard.organization = 'ACME Corporation';
        vCard.photo.attachFromUrl('https://avatars2.githubusercontent.com/u/5659221?v=3&s=460', 'JPEG');
        vCard.workPhone = '312-555-1212';
        vCard.birthday = new Date(1985, 0, 1);
        vCard.title = 'Software Developer';
        vCard.url = 'https://github.com/enesser';
        vCard.note = 'Notes on Eric';
        console.log(vCard.getFormattedString())
    }

    const { title, firstName, lastName, contact, email, company, position, address, website } = props.vCard

    const vCard = "BEGIN:VCARD\r\nVERSION:3.0\r\n" +
        "N:" + lastName + ";" + firstName + "\r\n" +
        "URL:" + website + "\r\n" +
        "EMAIL;TYPE=work:" + email + "\r\n" +
        "TEL;TYPE=work:" + contact + "\r\n" +
        "ADR;TYPE=work:" + address + "\r\n" +
        "ORG:" + company + "\r\n" +
        "TITLE:" + title + "\r\n" +
        "END:VCARD"

    return (
        <Fragment>
            <section className={classes.card}>
                <div className={classes.qr_code}>
                    <QRCode value={vCard} {...qrConfig} logoWidth={180} logoHeight={40} />
                </div>
                <div className={classes.container}>
                    <h2>{title} {firstName} {lastName}</h2>
                    <p className={classes.title}>{position}</p>
                    <div className={classes.action}>
                        <button onClick={downloadHandler}>Download QR Code</button>
                        <button onClick={createVCard}>Download .VCF</button>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default QrCode;