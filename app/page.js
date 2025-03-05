
import ButtonLogin from '@/components/ButtonLogin'; 

export default function Home() {
  const isLoggedIn = true;
  const name = "Rufus";
  return ( 
    <main>
      {/* HEADER */}
      <section className='bg-base-200' >
        <div className=" max-w-3xl mx-auto flex justify-between items-center px-8">
          <div className=" font-bold">
            ReUp
          </div>
          <div className='flex items-center '>
            <div className='space-x-8 px-8 max-md:hidden '> 
              <a className='link link-hover'>Pricing</a>
              <a className='link link-hover'>FAQ</a>
            </div>
            <div className='py-2'>
              <ButtonLogin isLoggedIn={isLoggedIn} name={name}/>
            </div>
          </div>
        </div>
        
        
      </section>
      {/* HERO */}
      <section className="text-center px-8  py-32 max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
              All your reordering done in 5 minutes
          </h1>
        <div className='opacity-90 mb-10'>
          Create draft orders, prioritze based on budget or vendor, and place all orders in a few clicks.
        </div>
      
        <ButtonLogin isLoggedIn={isLoggedIn} name={name}/>
      </section>
      {/* PRICING */}
      <section className='bg-base-200 '>
        <div className='py-32 px-8 max-w-3xl mx-auto text-center'>
          <p className='text-sm uppercase font-medium text-primary mb-4'>Pricing</p>
          <h2>Nothing upfront, pay as you earn</h2>  
        </div>
      </section>
    </main> 
  );
}
