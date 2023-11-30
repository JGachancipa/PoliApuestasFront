import React from 'react'
import { useForm } from 'react-hook-form'

import { generateSelectOptions } from '../../../Util/genericFunctions/Elements'

/**
 * Estructura del Formulario de Campeonatos
 * @param {onSubmit} onSubmit 
 * @param {Object} data 
 * @returns {HTMLElement}
 */
const RaffleForm = ({ onSubmit, data }) => {
    const { handleSubmit, register, formState: { errors } } = useForm({ defaultValues: data });
    return (
        <form className="row g-3 ps-5 pe-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6 has-validation d-none">
                <label className="form-label">Id</label>
                <input type="text" className="form-control"
                    {...register("id")} />
                <div className="invalid-feedback">
                    default text.
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label">Título de la Rifa</label>
                <div className="input-group has-validation">
                    <input type="text" className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                    placeholder='Título de la Rifa'
                        aria-describedby="inputGroupPrepend"{...register("title", { required: true })} />
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio.
                    </div>
                </div>
            </div>
            <div className="col-12">
                <label className="form-label">Descripción de la Rifa</label>
                <div className="input-group has-validation">
                    <textarea className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                        placeholder='Descripción de la Rifa'
                        {...register("description", { required: true })}></textarea>
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio.
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label">Número de participantes</label>
                <div className="input-group has-validation">
                    <input type="text" className={`form-control ${errors.participating_number ? 'is-invalid' : ''}`}
                    placeholder='Número de participantes' aria-describedby="inputGroupPrepend"{...register("participating_number", { required: true })} />
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio.
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label">Máximo de participantes</label>
                <div className="input-group has-validation">
                    <input type="text" className={`form-control ${errors.maximum_participant ? 'is-invalid' : ''}`}
                    placeholder='Máximo de participantes' aria-describedby="inputGroupPrepend"{...register("maximum_participant", { required: true })} />
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio.
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label">Valor de la boleta</label>
                <div className="input-group has-validation">
                    <input type="text" className={`form-control ${errors.ticket_value ? 'is-invalid' : ''}`}
                    placeholder='Valor de la boleta' aria-describedby="inputGroupPrepend"{...register("ticket_value", { required: true })} />
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio.
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label">Fecha inicio de venta</label>
                <div className="input-group has-validation">
                    <input type="date" className={`form-control ${errors.sale_start_date ? 'is-invalid' : ''}`}
                        {...register("sale_start_date", { required: true })}/>
                        
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label">Fecha fin de venta</label>
                <div className="input-group has-validation">
                    <input type="date" className={`form-control ${errors.sale_end_date ? 'is-invalid' : ''}`}
                        {...register("sale_end_date", { required: true })} />
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label">Fecha de juego</label>
                <div className="input-group has-validation">
                    <input type="date" className={`form-control ${errors.game_date ? 'is-invalid' : ''}`}
                        {...register("game_date", { required: true })} />
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label">Premio Principal</label>
                <div className="input-group has-validation">
                    <input type="text" className={`form-control ${errors.main_prize ? 'is-invalid' : ''}`}
                    placeholder='Premio principal'
                        aria-describedby="inputGroupPrepend"{...register("main_prize", { required: true })} />
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio.
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label">Premio Secundario</label>
                <div className="input-group has-validation">
                    <input type="text" className={`form-control ${errors.secondary_prize ? 'is-invalid' : ''}`}
                    placeholder='Premio secundario'
                        aria-describedby="inputGroupPrepend"{...register("secondary_prize", { required: true })} />
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio.
                    </div>
                </div>
            </div>
            
            <div className="col-md-6">
                <label className="form-label">Estado</label>
                <div className="input-group has-validation">
                    <input type="checkbox" className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                    placeholder='Estado de la rifa (A)ctivo o (I)nactivo' checked
                        aria-describedby="inputGroupPrepend"{...register("state", { required: true })}/>
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio.
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label">Número ganador</label>
                <div className="input-group has-validation">
                    <input type="text" className={`form-control ${errors.winning_number ? 'is-invalid' : ''}`}
                    placeholder='Número ganador'
                        aria-describedby="inputGroupPrepend"{...register("winning_number", { required: true })} />
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio.
                    </div>
                </div>
            </div>
            <div className="col-md-12 btn btn-outline-primary">
                <button type="submit" className="btn btn-primary">Save Raffle</button>
            </div>
        </form>
    );
};

export default RaffleForm;