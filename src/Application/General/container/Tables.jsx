import {
    flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel,
    getSortedRowModel, useReactTable
} from '@tanstack/react-table';
import React, { useState } from 'react'
import FilterTable from '../components/FilterTable';
import HeaderTable from '../components/HeaderTable';
import BodyTable from '../components/BodyTable';
import PaginationButtons from '../components/PaginationButtons';

const Tables = ({ props}) => {

    const [columnFilters, setColumnFilters] = useState([]);

    if (!props.columns.includes(props.tableOptions)) props.columns.push(props.tableOptions);

    const table = useReactTable({
        data: props.championships,
        columns: props.columns,
        state: { columnFilters, },
        initialState: { columnVisibility: { id: false }, },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className='card p-4 '>
            <h2 className='mb-3'>Listado de Campeonatos</h2>
            <FilterTable columnFilters={columnFilters} setColumnFilters={setColumnFilters}
                filter={props.filter} />
            <table className="table mt-3 text-center">
                <HeaderTable table={table} />
                <BodyTable table={table} flexRender={flexRender} />
            </table>
            <PaginationButtons table={table} />
        </div >
    );
};

export default Tables;