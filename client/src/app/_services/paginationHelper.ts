import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { PaginatedResult } from "../_models/pagination";


export function getPaginatedRsult<T>(url: string, params: HttpParams, http: HttpClient) {
    const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();

    return http.get<T>(url, { observe: 'response', params }).pipe(
        map(response => {
            paginatedResult.result = response.body as T;
            if (response.headers.get('Pagination') !== null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination') as string);
            }
            return paginatedResult;
        })
    );
}

export function getPaginationHeaders(pageNumber: number, pageSize: number): HttpParams {
    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber?.toString() as string);
    params = params.append('pageSize', pageSize?.toString() as string);
    return params;
}
