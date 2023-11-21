import React from 'react'

const PaginationButtons = ({ table }) => {
    return (
        <nav aria-label="Page navigation example ">
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link" aria-label="Next"
                        onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                        &laquo;
                    </button>
                </li>
                {
                    table.getPageOptions().map((value, key) => (
                        <li className="page-item" key={key}>
                            <button className="page-link" aria-label="Next"
                                onClick={() => table.setPageIndex(value)}>
                                {value + 1}
                            </button>
                        </li>
                    ))
                }
                <li className="page-item">
                    <button className="page-link" aria-label="Next"
                        onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                        &raquo;
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default PaginationButtons;