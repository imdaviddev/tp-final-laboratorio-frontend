import { styled } from '@mui/material/styles';
import { css } from 'styled-components';
import {Button,Paper} from '@mui/material';

const stylesConstants = {
    text: {
        colorPrimary: 'white',
        colorSecondary: 'red',
        fontWeight: 'bold',
        fontSizeTitle: '1.2rem'
    },
    button: {
        color: 'white',
        backgroundColor: 'red',
        padding: '1rem 2rem',
    },
}


export const customScrollbar = css`
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #e7bcbc;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #da7168;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #cc2514;
  }
`;

// Ejemplo de uso en un componente





//Estilos para los menus de Material UI

export const tabStyles = {
    hoverColor: 'red',
    selectedColor: 'red',
    indicatorColor: 'red',
};

export const commonTabSx = {
    '&:hover': { color: tabStyles.hoverColor },
    '&.Mui-selected': { color: tabStyles.selectedColor },
};

//Estilos para paquetes de la pestaña emergente

export const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    maxWidth: 300,
}));

export const RedButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.error.dark,
    },
}));

export const PackageImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: 'auto',
    maxHeight: 120,
    objectFit: 'cover',
    marginBottom: theme.spacing(2),
    borderStyle: 'none',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    '&.small-image': {
        maxWidth: 115,
        maxHeight: 100,
        display: 'block',
        margin: '0 auto',
    },
}));