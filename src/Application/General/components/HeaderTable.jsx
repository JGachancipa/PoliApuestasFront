import React from 'react'

const HeaderTable = ({ table }) => {

    return (
        <thead className='table-secondary'>
            {
                table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {
                            headerGroup.headers.map(header => (
                                <th scope='col' key={header.id}
                                    onClick={
                                        header.column.getCanSort()
                                            ? header.column.getToggleSortingHandler()
                                            : () => { }}>
                                    {header.column.columnDef.header}
                                    {
                                        {
                                            asc: <i className="bi bi-sort-alpha-up ms-2"></i>,
                                            desc: <i className="bi bi-sort-alpha-down-alt ms-2"></i>
                                        }[header.column.getIsSorted()]
                                    }
                                </th>
                            ))
                        }
                    </tr>
                ))
            }
        </thead>
    );
};

export default HeaderTable;
