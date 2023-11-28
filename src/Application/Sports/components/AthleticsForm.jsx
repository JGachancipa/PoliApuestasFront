import React from 'react'
import { useForm } from 'react-hook-form'

import { generateSelectOptions } from '../../../Util/genericFunctions/Elements'

/**
 * Estructura del Formulario de Campeonatos
 * @param {onSubmit} onSubmit 
 * @param {Object} data 
 * @returns {HTMLElement}
 */
const AthleticsForm = ({ onSubmit, data }) => {
    const { handleSubmit, register, formState: { errors } } = useForm({ defaultValues: data });
    return (
        <form className="row g-3 ps-5 pe-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6 has-validation d-none">
                <label className="form-label">Id</label>
                <input type="text" className="form-control"
                    {...register("id")} />
                <div className="invalid-feedback">
                    Please choose a username.
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label">Nombre del Deporte</label>
                <div className="input-group has-validation">
                    <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder='Nombre de deporte'
                        aria-describedby="inputGroupPrepend"{...register("name", { required: true })} />
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio
                    </div>
                </div>
            </div>
            <div className="col-12">
                <label className="form-label">Descripcion del deporte</label>
                <div className="input-group has-validation">
                    <textarea className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder='Descripcion del deporte'
                        {...register("description", { required: true })}></textarea>
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio
                    </div>
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
        </form>
    );
};

export default AthleticsForm;