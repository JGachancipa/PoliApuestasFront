import React from 'react'

const BodyTable = ({ table, flexRender }) => {
    return (
        <tbody className="table-group-divider">
            {
                table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {
                            row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
    );
};

export default BodyTable;