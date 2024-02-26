import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '../lib/data';
import { formatCurrency } from '../lib/utils';


 
export default async function Page() {
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();
  const revenuePromise =  fetchRevenue();
  const latestInvoicesPromise = fetchLatestInvoices();
  const cardDataPromise = fetchCardData();

  const data = await Promise.all([
    revenuePromise,
    latestInvoicesPromise,
    cardDataPromise
  ]);

  const revenue = data[0].rows
  const latestInvoices = data[1].rows.map((invoice) => ({
    ...invoice,
    amount: formatCurrency(invoice.amount),
  }));
  const cardData = data[2]

  const numberOfInvoices = Number(cardData[0].rows[0].count ?? '0');
  const numberOfCustomers = Number(cardData[1].rows[0].count ?? '0');
  const totalPaidInvoices = formatCurrency(cardData[2].rows[0].paid ?? '0');
  const totalPendingInvoices = formatCurrency(cardData[2].rows[0].pending ?? '0');


  // const {
  //   numberOfCustomers,
  //   numberOfInvoices,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData()
  
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard 
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}