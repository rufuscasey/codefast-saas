
import ButtonLogin from '@/components/ButtonLogin'; 

export default function Home() {
  const isLoggedIn = true;
  const name = "Rufus";
  const greeting1 = "Hello " + name;
  const greeting2 = `Hello ${isLoggedIn ? name : "there"}`;
  console.log(greeting1);
  console.log(greeting2);
  const fruits = ['🍏', '🍌','🍒'];
  console.log(fruits);
  console.log(fruits[0]);
  console.log(fruits.length);
  fruits[0] = '🍉';
  console.log(fruits);
  fruits.push('🍇');
  console.log(fruits.length);
  const fruitSalad = fruits.map((poop) => {
    return `I love ${poop}`;
  }
  );
  console.log(fruitSalad);
  const fruitsNoBananas = fruits.filter((fruit) => {
    if (fruit !== '🍌') { 
      return true;
    }
    
  });
  console.log(fruitsNoBananas);
  

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
      <section className="py-32 px-8 max-w-3xl mx-auto text-center">
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
        <div className='py-32 px-8 max-w-3xl mx-auto '>
          <p className='text-md uppercase font-medium text-primary mb-4 text-center' >Pricing</p>
          <h2 className='text-3xl lg:text-4xl font-extrabold mb-12 text-center'>Nothing upfront, pay as you go</h2>

          <div className='p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6'>
            <div className='flex gap-2 items-baseline text-center justify-center'>
              <div className='text-4xl font-black'>$19</div>
              <div className=' uppercase text-sm font-medium opacity-60'>/Month</div>
            </div>  
            <ul className='space-y-2'>
              <li className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path 
                    fillRule="evenodd" 
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" 
                    clipRule="evenodd" 
                    className='text-green-600 size-4'

                    />
                </svg>
                Track all purchases in one place</li>
              <li className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path 
                    fillRule="evenodd" 
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" 
                    clipRule="evenodd" 
                    className='text-green-600 size-4'

                    />
                </svg>
                Optimize your product mix</li>
              <li className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path 
                    fillRule="evenodd" 
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" 
                    clipRule="evenodd" 
                    className='text-green-600 size-4'

                    />
                </svg>
                Huge timesaver for placing orders</li>
              <li className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path 
                    fillRule="evenodd" 
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" 
                    clipRule="evenodd" 
                    className='text-green-600 size-4'

                    />
                </svg>
                Connects to all major POS systems</li>
            </ul>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} extraStyle="w-full"/> 
          </div>
          
        </div>
      </section>
    </main> 
  );
}
