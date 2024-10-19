import React, { useEffect, useRef, useState } from 'react';
import jsQR from 'jsqr';
import { Box, Button, ListItemText, Modal, Popover } from '@mui/material';
import { PackageImage, RedButton, StyledPaper } from '../../../constants/styles';
import Detalle from '../../../components/Detalle';
import ImgPaquete from '../../../../public/paquete.svg'

export default function PackagePopover({ paquete }) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [scanning, setScanning] = useState(false); // Estado para controlar cuándo iniciar el escaneo

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setScanning(false);
    };

    const open = Boolean(anchorEl);
    const id = open ? `popover-${paquete.id_paquete}` : undefined;

    return (
        <div>
            <Button onClick={handleClick}>
                <ListItemText primary={`Paquete NRO: ${paquete.id_paquete}`} />
            </Button>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <StyledPaper>
                    <PackageImage
                        src={ImgPaquete}
                        alt={`Imagen de ${paquete.id_paquete}`}
                        className="small-image"
                    />
                    <Detalle tipo="KG" valor={paquete.peso_kg} />
                    <Detalle tipo="Descripcion" valor={paquete.descripcion} />
                    <Detalle tipo="Cliente" valor={paquete.nombre_cliente} />
                    <Detalle tipo="Direccion" valor={paquete.direccion_entrega} />
                    <Detalle tipo="Volumen" valor={paquete.volumen} />

                    <RedButton
                        variant="contained"
                        fullWidth
                        onClick={() => setScanning(true)} // Activar el escaneo
                    >
                        Escanear QR
                    </RedButton>

                    <QRScanner open={scanning} handleClose={() => setScanning(false)} paquete={paquete} /> {/* Muestra el escáner solo si está activo */}
                </StyledPaper>
            </Popover>
        </div>
    );
}

const QRScanner: React.FC<{ open: boolean, handleClose: () => void, paquete: any }> = ({ open, handleClose, paquete }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [qrCodeData, setQrCodeData] = useState<string | null>(null); // Estado para guardar los datos del QR

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }); // Acceder a la cámara trasera
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            } catch (err) {
                console.error("Error al acceder a la cámara", err);
            }
        };

        startCamera();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject as MediaStream;
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop()); // Detener la cámara al desmontar el componente
            }
        };
    }, []);

    useEffect(() => {
        const scanQRCode = () => {
            if (videoRef.current && canvasRef.current) {
                const video = videoRef.current;
                const canvas = canvasRef.current;
                const context = canvas.getContext('2d');

                if (context) {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    context.drawImage(video, 0, 0, canvas.width, canvas.height); // Dibujar el frame del video en el canvas
                    const imageData = context.getImageData(0, 0, canvas.width, canvas.height); // Obtener los datos de imagen del canvas
                    const code = jsQR(imageData.data, imageData.width, imageData.height); // Escanear el código QR

                    if (code) {
                        setQrCodeData(code.data); // Si se detecta un código QR, guardar los datos
                        console.log(`Código QR detectado para el paquete ${paquete.id_paquete}: ${code.data}`);
                    }
                }
            }
        };

        const intervalId = setInterval(scanQRCode, 300); // Escanear cada 300ms

        return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
    }, []);

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
                    outline: 'none', // Quitar borde del modal
                }}
            >
                <h2>Escaneando QR del Paquete {paquete.id_paquete}</h2>
                <video ref={videoRef} style={{ width: '100%', height: 'auto' }} />
                <canvas ref={canvasRef} style={{ display: 'none' }} /> {/* El canvas está oculto */}
                <p>QR Detectado: {qrCodeData ? qrCodeData : "Escaneando..."}</p>

                <Button onClick={handleClose} variant="contained" color="primary">
                    Cerrar
                </Button>
            </Box>
        </Modal>
    );
};
