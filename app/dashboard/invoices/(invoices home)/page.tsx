
import PaginationWrapper from '@/app/ui/invoices/pagination-wrapper';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { Test } from '@/app/ui/invoices/test';

export default async function Page({
  searchParams,
  }: {searchParams: any}) {

  // const query = searchParams?.query || '';
  //const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <Test/>
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense fallback = "<h1>LOADING SEARCH ..." >
          <Search placeholder="Search invoices..." />
        </Suspense>
        <CreateInvoice />
      </div>
        <Table query={""} currentPage={1} />
      <div className="mt-5 flex w-full justify-center">
        <Suspense fallback = "<h1>LOADING PAGINATION ..." >
          <PaginationWrapper query={""} />
        </Suspense>
      </div>
    </div>
  );
}