/**
 * Genera las opciones para los Campos select
 * @param {Object} props 
 * @returns {HTMLElement}
 */
export const generateSelectOptions = (props) => {
    return props.map((key) => {
        return <option key={key.value} value={key.value}>{key.option}</option>
    });
};