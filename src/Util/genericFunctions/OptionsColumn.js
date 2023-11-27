/**
 * Generacion de opciones Edicion y Eliminacion En la Tabla de Datos
 * @param {Integer} getValue 
 * @param {CallBack} handleEdit 
 * @param {CallBack} deleteAPISInfo 
 * @param {String} url 
 * @param {String} section 
 * @param {String} sectionForm 
 * @returns {HTMLElement}
 */
<<<<<<< HEAD
export const OptionsColumn = (getValue, handleEdit, deleteAPISInfo, url, section, sectionForm) => {
    return (
        <div style={{ fontSize: '20px' }}>
            <i className="bi bi-pen-fill"
                onClick={() => handleEdit(getValue, sectionForm)}>
=======
export const OptionsColumn = (getValue, handleEdit, deleteAPISInfo, url, section,sectionForm) => {
    return (
        <div style={{ fontSize: '20px' }}>
            <i className="bi bi-pen-fill"
                onClick={() => handleEdit(getValue,sectionForm)}>
>>>>>>> c6ad7b0997c2742ddc0d38c2ade77b594da8935a
            </i>
            <i className="bi bi-x-circle-fill m-2"
                onClick={() => { deleteAPISInfo && deleteAPISInfo(getValue, url, section) }}>
            </i>
        </div>
    );
};