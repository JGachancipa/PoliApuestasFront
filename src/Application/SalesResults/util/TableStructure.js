/**
 * Columnas Tabla de Publicación de premios
 * @type {Object}
 */

export const SALES_RESULTS_COLUMNS = [
    {
        accessorKey: "id",
        header: "Id",
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "event",
        header: "Evento",
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "description",
        header: "Descripción",
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "unitValue",
        header: "Valor unitario",
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "participantsNumber",
        header: "Número de participantes",
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "totalValue",
        header: "Valor Total",
        cell: (props) => <p>{props.getValue()}</p>,
    },
];
