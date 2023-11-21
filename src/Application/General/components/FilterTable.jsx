import React from 'react'

const FilterTable = ({ columnFilters, setColumnFilters, filter }) => {

    const taskName = columnFilters.find(filterCol => filterCol.id === filter)?.value || '';
    const onFilterChange = (id, value) => setColumnFilters(
        prev => prev.filter(fil => fil.id !== id).concat({ id, value })
    );

    return (
        <div className='row g-3 justify-content-end'>
            <div className='col-md-4'>
                <div className='input-group'>
                    <span className="input-group-text" id="addon-wrapping">
                        <i className="bi bi-search"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="Buscar"
                        aria-label="Buscar" aria-describedby="addon-wrapping"
                        value={taskName}
                        onChange={(e) => onFilterChange(filter, e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default FilterTable;