import { SerpapiPagination } from '@common/models/search-result.model';
import { Pagination } from '@common/models/base.models';

export function paginationConverterFunction(
  pagination: SerpapiPagination,
): Pagination[] {
  return [
    { pageNum: pagination.current, link: null, active: true },
    ...Object.entries(pagination.other_pages).map(([key, link]) => ({
      pageNum: Number(key),
      link,
      active: false,
    })),
  ].sort((a, b) => a.pageNum - b.pageNum);
}
