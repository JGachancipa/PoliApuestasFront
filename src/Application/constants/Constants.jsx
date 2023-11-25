/**
 * URL General De las APIS
 * @type {String}
 */
export const APIURL = 'http://127.0.0.1:8000';

/**
 * Rutas registradas en el Sistema
 * @type {Object}
 */
export const PAGES = {
    HOME: '/',
    ERROR: '*',
    CHAMPIONSHIP: '/sports/championship/',
<<<<<<< HEAD
    CHAMPIONSHIPFORM: '/sports/championship/form',
    CHAMPIONSHIPTABLE: '/sports/championship/table',
    PRIZE: '/1/prize/',
    PRIZEFORM: '/1/prize/form',
    PRIZETABLE: '/prize/table'
=======
    CHAMPIONSHIP_TABLE: '/sports/championships'
>>>>>>> f778f337dec91db536663398d70b449a6a0032f5
};

/**
 * Nombre de los Campos para Buscar en Cada Tabla
 * @type {Object}
 */
export const TABLE_INPUTS_SEARCH = {
    CHAMPIONSHIP: 'name',
}

/**
 * Definicion de la Columna de opciones
 * @type {Object}
 */
export const TABLE_OPTIONS = {
    tableOptions: {
        id: 'opciones',
        accessorKey: 'id',
        header: 'Opciones',
        enableSorting: false,
        cell: null
    }
}

/**
 * Estado Basico Para Error 404
 * @type {Object}
 */
export const ERROR_DEFAULT_VALUES = {
    status: 404,
    statusText: 'Not Found'
}