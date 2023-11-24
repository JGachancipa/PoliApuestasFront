import React from 'react'
import { useForm } from 'react-hook-form'

import { generateSelectOptions } from '../../../Util/genericFunctions/Elements'

/**
 * Estructura del Formulario de Campeonatos
 * @param {onSubmit} onSubmit 
 * @param {Object} data 
 * @returns {HTMLElement}
 */
const ChampionshipForm = ({ onSubmit, data }) => {
    const { handleSubmit, register, formState: { errors } } = useForm({ defaultValues: data });

    let sports = [
        {
            value: 1,
            option: 'Futbol'
        },
        {
            value: 2,
            option: 'BasketBall'
        }
    ]

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
                <label className="form-label">Nombre Campeonato</label>
                <div className="input-group has-validation">
                    <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        aria-describedby="inputGroupPrepend"{...register("name", { required: true })} />
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label">Deporte</label>
                <div className="input-group has-validation">
                    <select className={`form-control ${errors.sport ? 'is-invalid' : ''}`}
                        {...register("sport", { required: true })}>
                        <option value=''>--Seleccion--</option>
                        {generateSelectOptions(sports)}
                    </select>
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label">Fecha Inicial</label>
                <div className="input-group has-validation">
                    <input type="date" className={`form-control ${errors.initialDate ? 'is-invalid' : ''}`}
                        {...register("initialDate", { required: true })} />
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label">Fecha Final</label>
                <div className="input-group has-validation">
                    <input type="date" className={`form-control ${errors.finalDate ? 'is-invalid' : ''}`}
                        {...register("finalDate", { required: true })} />
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio
                    </div>
                </div>
            </div>
            <div className="col-12">
                <label className="form-label">Categoria</label>
                <div className="input-group has-validation">
                    <select className={`form-control ${errors.category ? 'is-invalid' : ''}`}
                        {...register("category", { required: true })}>
                        <option value=''>--Seleccion--</option>
                        {generateSelectOptions(sports)}
                    </select>
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio
                    </div>
                </div>
            </div>
            <div className="col-12">
                <label className="form-label">Descripcion de Campeonato</label>
                <div className="input-group has-validation">
                    <textarea className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder='Descripcion de Campeonato'
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

export default ChampionshipForm;