/**
 * Columnas Tabla de Publicación de premios
 * @type {Object}
 */
export const BET_RESULTS_COLUMNS = [
    {
        accessorKey: "id",
        header: "Id",
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "championship",
        header: "Campeonato",
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "sport",
        header: "Deporte",
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "date",
        header: "Fecha Campeonato",
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "state",
        header: "Resultado Apuesta",
        cell: (props) => <p>{props.getValue()}</p>,
    },
];

export const RAFFLE_RESULTS_COLUMNS = [
    {
        accessorKey: "id",
        header: "Id",
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "raffle",
        header: "Rifa",
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "date",
        header: "Fecha de la rifa",
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "state",
        header: "Estado",
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "winnerNumber",
        header: "Número ganador",
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "prize",
        header: "Premio",
        cell: (props) => <p>{props.getValue()}</p>,
    },
];
