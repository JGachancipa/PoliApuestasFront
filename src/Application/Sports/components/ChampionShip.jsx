import React from 'react'

import { generateSelectInput } from '../../../Util/genericFunctions/Elements'
import '../css/ChampionShip.css'

export const ChampionShip = () => {
    return (
        <div>
            <h1 className='mt-2 mb-4 pb-2' id='tittle'>Crear Campeonato</h1>
            <div className='ps-5 pe-5 mt-3'>
                <form className="row g-3 ps-5 pe-5">
                    <div className="col-md-6">
                        <label className="form-label">Nombre Campeonato</label>
                        <input type="text" className="form-control" id="championshipName"
                            placeholder='Nombre Campeonato' />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Deporte</label>
                        {generateSelectInput({ id: 'sport', className: 'form-select' })}
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Fecha Inicial</label>
                        <input type="date" className="form-control" id="initialDate" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Fecha Final</label>
                        <input type="date" className="form-control" id="finalDate" />
                    </div>
                    <div className="col-12">
                        <label className="form-label">Categoria</label>
                        {generateSelectInput({ id: 'category', className: 'form-select' })}
                    </div>
                    <div className="col-12">
                        <label className="form-label">
                            Descripcion de Campeonato
                        </label>
                        <textarea className="form-control" id="championshipDescription"
                            placeholder='Descripcion de Campeonato'></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};