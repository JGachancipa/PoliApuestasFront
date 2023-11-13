export const generateSelectInput = (props) => {
    return (
        <select id={props.id} className={props.className}>
            <option value={0}>--Seleccion--</option>
            {/**{props.options es un foreach para validar} */}
        </select>
    );
};
