
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

 
export default function Loading(){
  
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: "",
            active: true,
          },
        ]}
      />
      
      <p>Loading ...</p>
      
      
    </main>
  );
}