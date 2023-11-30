/**
 * URL General De las APIS
 * @type {String}
 */
export const APIURL = "http://127.0.0.1:8000";

/**
 * Rutas registradas en el Sistema
 * @type {Object}
 */
export const PAGES = {
    HOME: "/",
    ERROR: "*",
    CHAMPIONSHIP: "/sports/championship/",
    CHAMPIONSHIP_TABLE: "/sports/championships",
    PRIZE: "/1/prize/",
    PRIZETABLE: "/1/prize",
    ATHLETICS: "/sports/athletics/",
    ATHLETICSTABLE: "/sports/athletics",
    RAFFLE_RESULTS: "/adwards_publications/raffle/",
    RAFFLE_RESULTS_TABLE: "/adwards_publications/raffle",
    BET_RESULTS: "/adwards_publications_bet/bet/",
    BET_RESULTS_TABLE: "/adwards_publications_bet/bet",
    SALES_RESULTS: "/sales_results/sales/",
    SALES_RESULTS_TABLE: "/sales_results/sales",
};

/**
 * Nombre de los Campos para Buscar en Cada Tabla
 * @type {Object}
 */
export const TABLE_INPUTS_SEARCH = {
    CHAMPIONSHIP: "name",
    PRIZE: "name",
    ATHLETICS: "name",
    RAFFLE_RESULTS: "name",
    BET_RESULTS: "name",
};

/**
 * Definicion de la Columna de opciones
 * @type {Object}
 */
export const TABLE_OPTIONS = {
    tableOptions: {
        id: "opciones",
        accessorKey: "id",
        header: "Opciones",
        enableSorting: false,
        cell: null,
    },
};

/**
 * Estado Basico Para Error 404
 * @type {Object}
 */
export const ERROR_DEFAULT_VALUES = {
    status: 404,
    statusText: "Not Found",
};
