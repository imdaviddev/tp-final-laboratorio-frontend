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