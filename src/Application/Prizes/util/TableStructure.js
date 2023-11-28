
export const PRIZE_COLUMNS = [
    {
        accessorKey: 'id',
        header: 'Id',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'name',
        header: 'Nombre',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'description',
        header: 'Descripcion',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'type',
        header: 'Tipo',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'Value',
        header: 'Fecha Final',
        cell: (props) => <p>{props.getValue()}</p>
    },
    
]