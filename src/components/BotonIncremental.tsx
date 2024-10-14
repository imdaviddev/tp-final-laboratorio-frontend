import { useState } from "react";
import { Boton } from "../pages/ComponentsUI/Botones";
const BotonIncremental = () => {
    const [count, setCount] = useState(0)

    const incrementar = () => {
        setCount(count + 1)
    }

    return (
        <div>
            {count}
            <Boton onClick={incrementar}>+</Boton>
        </div>

    );
}

export default BotonIncremental;

