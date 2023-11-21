import React from 'react'
import { generateSelectOptions } from '../../../Util/genericFunctions/Elements'
import { useForm } from 'react-hook-form'

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
            <div className="col-md-6" style={{display: 'none'}}>
                <label className="form-label">Nombre Campeonato</label>
                <input type="text" className="form-control"
                    {...register("id")} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Nombre Campeonato</label>
                <input type="text" className="form-control"
                    {...register("name", { required: true })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Deporte</label>
                <select className="form-select" {...register("sport", { required: true })}>
                    <option value="0">--Seleccion--</option>
                    {generateSelectOptions(sports)}
                </select>
            </div>
            <div className="col-md-6">
                <label className="form-label">Fecha Inicial</label>
                <input type="date" className="form-control"
                    {...register("initialDate", { required: true })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Fecha Final</label>
                <input type="date" className="form-control"
                    {...register("finalDate", { required: true })} />
            </div>
            <div className="col-12">
                <label className="form-label">Categoria</label>
                <select className="form-select" {...register("category", { required: true })}>
                    <option value="0">--Seleccion--</option>
                    {generateSelectOptions(sports)}
                </select>
            </div>
            <div className="col-12">
                <label className="form-label">
                    Descripcion de Campeonato
                </label>
                <textarea className="form-control" placeholder='Descripcion de Campeonato'
                    {...register("description", { required: true })}></textarea>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
        </form>
    );
};

export default ChampionshipForm;