import { Pagination } from "./pagination"
import { fetchInvoicesPages } from '@/app/lib/data';

export default async function PaginationWrapper({query} : {query:string}){
  const totalPages = await fetchInvoicesPages(query);
  
  return (
    <Pagination totalPages={totalPages} />
  )
}