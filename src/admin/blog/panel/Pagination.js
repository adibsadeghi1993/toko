import React from "react";

const Pagination = React.memo(() => {
    return (
        <div className="overflow-hidden">
            <ul className="flex flex-row overflow-x-auto justify-center">
                <li>
                    <span className="page-link active bg-secondary-background border border-secondary-background rounded-full ">1</span>
                </li>
                <li>
                    <span className="page-link text-other-muted border border-other-borderPagination rounded-full ">2</span>
                </li>
                <li>
                    <span className="page-link text-other-muted border border-other-borderPagination rounded-full ">3</span>
                </li>
                <li>
                    <span className="page-link text-other-muted border border-other-borderPagination rounded-full ">4</span>
                </li>
                <li>
                    <span className="page-link text-other-muted border border-other-borderPagination rounded-full ">5</span>
                </li>
                <li>
                    <span className="page-link text-other-muted border border-other-borderPagination rounded-full ">6</span>
                </li>
                <li>
                    <span className="page-link text-other-muted border border-other-borderPagination rounded-full ">7</span>
                </li>
                <li>
                    <span className="page-link text-other-muted border border-other-borderPagination rounded-full ">8</span>
                </li>
                <li>
                    <span className="page-link text-other-muted border border-other-borderPagination rounded-full ">9</span>
                </li>
                <li>
                    <span className="page-link text-other-muted border border-other-borderPagination rounded-full ">10</span>
                </li>
                ...
                <li>
                    <span className="page-link text-other-muted border border-other-borderPagination rounded-full ">{">"}</span>
                </li>
                <li>
                    <span className="page-link text-other-muted border border-other-borderPagination rounded-full ">{">>"}</span>
                </li>
            </ul>
        </div>
    )
})
export default Pagination;