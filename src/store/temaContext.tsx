import { useState } from "react";

const themes = {
    colorPrimario: {
        background: '#cc2514',
        color: 'white',
    },
    colorSecundario: {
        background: '#e7bcbc',
        color: '#da7168',
    },
};

export enum Tema  {
    PRIMARIO = "primario",
    SECUNDARIO = "secundario",
}

type Theme = {
    background: string,
    color: string
}

const useTheme = (tema: Tema) => {
    const[theme, setTheme] = useState<Theme>();
    (tema == Tema.PRIMARIO ? setTheme(themes.colorPrimario) : setTheme(themes.colorSecundario))
    return (theme)
}

export default useTheme;

