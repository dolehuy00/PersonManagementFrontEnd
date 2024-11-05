import React from "react";

const Pagination = ({ pageIndex, totalPage, maxPageView, onPageChange }) => {
    // Hàm chuyển đến trang trước
    const handlePrevPage = () => {
        if (pageIndex > 1) {
            onPageChange(pageIndex - 1);
        }
    };

    // Hàm chuyển đến trang tiếp theo
    const handleNextPage = () => {
        if (pageIndex < totalPage) {
            onPageChange(pageIndex + 1);
        }
    };

    // Hàm xử lý khi người dùng chọn một trang cụ thể
    const handlePageClick = (page) => {
        onPageChange(page);
    };

    // Xác định trang bắt đầu và kết thúc trong phạm vi hiển thị
    const getPageRange = () => {
        const halfMax = Math.floor(maxPageView / 2);
        let start = Math.max(1, pageIndex - halfMax);
        let end = Math.min(totalPage, pageIndex + halfMax);

        if (end - start + 1 < maxPageView) {
            if (start === 1) {
                end = Math.min(totalPage, start + maxPageView - 1);
            } else {
                start = Math.max(1, end - maxPageView + 1);
            }
        }
        return { start, end };
    };

    const { start, end } = getPageRange();

    return (
        <div className="py-2">
            <nav className="block">
                <ul className="flex pl-0 rounded list-none flex-wrap">
                    <li>
                        <a
                            href="#prev-double"
                            className={
                                pageIndex === 1
                                    ? "text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-200 text-white bg-lightBlue-200"
                                    : "text-xs font-semibold w-8 h-8 flex items-center justify-center mx-1 rounded-full border border-lightBlue-500 text-lightBlue-500"
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                if (pageIndex !== 1) handlePageClick(1);
                            }}
                        >
                            <i className="fas fa-chevron-left -ml-px"></i>
                            <i className="fas fa-chevron-left -ml-px"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#prev"
                            className={
                                pageIndex === 1
                                    ? "text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-200 text-white bg-lightBlue-200"
                                    : "text-xs font-semibold w-8 h-8 flex items-center justify-center mx-1 rounded-full border border-lightBlue-500 text-lightBlue-500"}
                            onClick={(e) => {
                                e.preventDefault();
                                if (pageIndex !== 1) handlePrevPage();
                            }}
                        >
                            <i className="fas fa-chevron-left -ml-px"></i>
                        </a>
                    </li>
                    {/* Dấu chấm "..." khi trang hiện tại cách xa trang 1 */}
                    {start > 1 && (
                        <li>
                            <a
                                href="#threedot"
                                className="text-xs font-semibold w-8 h-8 flex items-center justify-center mx-1 rounded-full text-lightBlue-500"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <i className="fas fa-ellipsis-h -ml-px"></i>
                            </a>
                        </li>
                    )}

                    {/* Hiển thị các trang trong phạm vi start-end */}
                    {[...Array(end - start + 1)].map((_, i) => {
                        const pageNum = start + i;
                        return (
                            <li key={pageNum}>
                                <a
                                    href={`#page-${pageNum}`}
                                    onClick={(e) => { e.preventDefault(); onPageChange(pageNum); }}
                                    className={`text-xs font-semibold w-8 h-8 flex items-center justify-center mx-1 rounded-full border ${pageIndex === pageNum
                                        ? "text-white bg-lightBlue-500"
                                        : "text-lightBlue-500 bg-white"
                                        }`}
                                >
                                    {pageNum}
                                </a>
                            </li>
                        );
                    })}

                    {/* Dấu chấm "..." khi trang hiện tại cách xa trang cuối */}
                    {end < totalPage && (
                        <li>
                            <a
                                href="#threedot"
                                className="text-xs font-semibold w-8 h-8 flex items-center justify-center mx-1 rounded-full text-lightBlue-500"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <i className="fas fa-ellipsis-h -ml-px"></i>
                            </a>
                        </li>
                    )}
                    <li>
                        <a
                            href="#next"
                            className={
                                pageIndex === totalPage
                                    ? "text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-200 text-white bg-lightBlue-200"
                                    : "text-xs font-semibold w-8 h-8 flex items-center justify-center mx-1 rounded-full border border-lightBlue-500 text-lightBlue-500"}
                            onClick={(e) => {
                                e.preventDefault();
                                if (pageIndex !== totalPage) handleNextPage();
                            }}
                        >
                            <i className="fas fa-chevron-right -mr-px"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#next-double"
                            className={
                                pageIndex === totalPage
                                    ? "text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-200 text-white bg-lightBlue-200"
                                    : "text-xs font-semibold w-8 h-8 flex items-center justify-center mx-1 rounded-full border border-lightBlue-500 text-lightBlue-500"}
                            onClick={(e) => {
                                e.preventDefault();
                                if (pageIndex !== totalPage) handlePageClick(totalPage);
                            }}
                        >
                            <i className="fas fa-chevron-right -mr-px"></i>
                            <i className="fas fa-chevron-right -mr-px"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
