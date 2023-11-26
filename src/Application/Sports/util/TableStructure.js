/**
 * Columnas Tabla de Campeonatos
 * @type {Object}
 */
export const CHAMPIONSHIP_COLUMNS = [
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
        accessorKey: 'sport',
        header: 'Deporte',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'initialDate',
        header: 'Fecha Inicial',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'finalDate',
        header: 'Fecha Final',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'category',
        header: 'Categoria',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'description',
        header: 'Descripción',
        cell: (props) => <p>{props.getValue()}</p>
    },
]

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