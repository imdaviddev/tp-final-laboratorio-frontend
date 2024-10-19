import { Box, Modal } from '@mui/material';
import jsQR from 'jsqr';
import React, { useEffect, useRef, useState } from 'react';
import { Boton } from '../../ComponentsUI/Botones';
import { Container, DescHijo } from '../../ComponentsUI';
import usePaquetestore from '../../../store/paquetesContext';
import { IPaquete } from '../../../api/models/paquetes.models';

const QRScanner = ({ open, handleClose }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [qrCodeData, setQrCodeData] = useState(null);
    const { actualizarPaquete } = usePaquetestore();

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            } catch (err) {
                console.error("Error al acceder a la cámara", err);
            }
        };

        if (open) {
            startCamera();
        }

        return () => {
            if (open) stopCamera();
        };
    }, [open]);

    useEffect(() => {
        const scanQRCode = () => {
            if (videoRef.current && canvasRef.current) {
                const context = getContextAndDraw(videoRef.current, canvasRef.current);
                const imageData = context.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height);

                if (code) {
                    try {
                        const paqueteData = JSON.parse(code.data); 

                        const paquete: IPaquete = {
                            id: paqueteData.id,
                            id_viaje: paqueteData.id_viaje,
                            id_conductor: paqueteData.id_conductor,
                            matricula: paqueteData.matricula,
                            descripcion: paqueteData.descripcion,
                            estado: paqueteData.estado,
                            peso_kg: paqueteData.peso_kg,
                            nombre_cliente: paqueteData.nombre_cliente,
                            volumen: paqueteData.volumen,
                            localidad: paqueteData.localidad,
                            direccion_entrega: paqueteData.direccion_entrega,
                        };
                        setQrCodeData(code.data);
                        actualizarPaquete(paquete); 
                        handleClose();
                    } catch (error) {
                        console.error("Error al parsear los datos del QR", error);
                    }
                }
            }
        };

        const intervalId = setInterval(scanQRCode, 300);
        return () => clearInterval(intervalId);
    });

    const getContextAndDraw = (video, canvas) => {
        const context = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        return context;
    };

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject;
            stream.getTracks().forEach(track => track.stop());
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="qr-scanner-modal"
            aria-describedby="qr-scanner-to-scan-package"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    outline: 'none',
                }}
            >
                <DescHijo>Escaneando QR</DescHijo>
                <video ref={videoRef} style={{ width: '100%', height: 'auto' }} />
                <canvas ref={canvasRef} style={{ display: 'none' }} />
                <p>QR Detectado: {qrCodeData ? qrCodeData : "Escaneando..."}</p>
                <Container>
                    <Boton onClick={handleClose} >Cerrar</Boton>
                </Container>
            </Box>
        </Modal>
    );
};

export default QRScanner;



