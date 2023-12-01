/**
 * Columnas Tabla de Campeonatos
 * @type {Object}
 */
export const RAFFLE_COLUMNS = [
    {
        accessorKey: 'id',
        header: 'Id',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'title',
        header: 'Título',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'description',
        header: 'Descripción',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'participating_number', 
        header: 'Número de participantes',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'maximum_participant',
        header: 'Máximo número de participantes',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'ticket_value',
        header: 'Valor Boleta',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'sale_start_date',
        header: 'Fecha inicio venta',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'sale_end_date',
        header: 'Fecha fin venta',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'game_date',
        header: 'Fecha juego',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'main_prize',
        header: 'Premio principal',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'secondary_prize',
        header: 'Premio secundario',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'state',
        header: 'Estado',
        cell: (props) => <p>{props.getValue() ? 'Activo' : 'Inactivo'}</p>
    },
    {
        accessorKey: 'winning_number',
        header: 'Número ganador',
        cell: (props) => <p>{props.getValue()}</p>
    },
]