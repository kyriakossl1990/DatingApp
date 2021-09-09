export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: Number;
    totalPages: Number
}

export class PaginatedResult<T> {
    result!: T;
    pagination!: Pagination;
}