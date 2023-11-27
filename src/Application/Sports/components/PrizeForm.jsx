import React from 'react'
import { generateSelectOptions } from '../../../Util/genericFunctions/Elements'
import { useForm } from 'react-hook-form'


const PrizeForm = ({ onSubmit, data }) => {
    const { handleSubmit, register, formState: { errors } } = useForm({ defaultValues: data });

    let categoria = [
        {
            value: "Premio Primario",
            option: 'Premio Primario'
        },
        {
            value: "Premio Secundario",
            option: 'Premio Secundario'
        }
    ]

    return (
        <form className="row g-3 ps-5 pe-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6 has-validation" style={{ display: 'none' }}>
                <label className="form-label">Id</label>
                <input type="text" className="form-control"
                    {...register("id")} />
                <div className="invalid-feedback">
                    Please choose a username.
                </div>

            </div>
            <div className="col-md-6">
                <label className="form-label">Nombre Premio</label>
                <div className="input-group has-validation">
                    <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        aria-describedby="inputGroupPrepend"{...register("name", { required: true })} />
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label className="form-label">Categoria de premio</label>
                <div className="input-group has-validation">
                    <select className={`form-control ${errors.sport === '0' ? 'is-invalid' : ''}`}
                        {...register("type", { required: true })}>
                        <option value="0">--Seleccion--</option>
                        {generateSelectOptions(categoria)}
                    </select>
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio
                    </div>
                </div>
            </div>
            <div className="col-12">
                <label className="form-label">Valor del premio</label>
                <div className="input-group has-validation">
                    <input type="number" className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder='Valor del premio'
                        {...register("value", { required: true })}></input>
                    <div className="invalid-feedback">
                        Este Campo es Obligatorio
                    </div>
                </div>
            </div>
            <div className="col-12">
                <label className="form-label">Descripcion de Campeonato</label>
                <div className="input-group has-validation">
                    <textarea className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder='Descripcion del premio'
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

export default PrizeForm;