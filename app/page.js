
import ButtonLogin from '@/components/ButtonLogin'; 
import FAQListItem from '@/components/FAQListItem';
import Image from 'next/image';
import productDemo from './productDemo.jpeg';
import {auth} from '@/auth';

export default async function Home() {
  const session = await auth ()
  console.log(session);

  // const greeting1 = "Hello " + name;
  // const greeting2 = `Hello ${isLoggedIn ? name : "there"}`;
  // console.log(greeting1);
  // console.log(greeting2);
  // const fruits = ['🍏', '🍌','🍒'];
  // console.log(fruits);
  // console.log(fruits[0]);
  // console.log(fruits.length);
  // fruits[0] = '🍉';
  // console.log(fruits);
  // fruits.push('🍇');
  // console.log(fruits.length);
  // const fruitSalad = fruits.map((poop) => {
  //   return `I love ${poop}`;
  // }
  // );
  // console.log(fruitSalad);
  // const fruitsNoBananas = fruits.filter((fruit) => {
  //   if (fruit !== '🍌') { 
  //     return true;
  //   }
    
  // });
  // console.log(fruitsNoBananas);
  
console.log(process.env.MONGO_URI);

  

  return ( 
    <main>
      {/* HEADER */}
      <section className='bg-base-200' >
        <div className=" max-w-5xl mx-auto flex justify-between items-center px-8">
          <div className=" font-bold">
            ReUp
          </div>
          <div className='flex items-center '>
            <div className='space-x-8 px-8 max-md:hidden '> 
              <a className='link link-hover' href="#pricing">Pricing</a>
              <a className='link link-hover' href='#faq'>FAQ</a>
            </div>
            <div className='py-2'>
              <ButtonLogin session={session}/>
            </div>
          </div>
        </div>
        
        
      </section>

      {/* HERO */}
      <section className="py-32 px-8 max-w-5xl mx-auto text-center flex flex-col lg:flex-row gap-14 items-center lg:items-start">
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
                All your reordering done in 5 minutes
            </h1>
            <div className='opacity-90 mb-10'>
              Create draft orders, prioritze based on budget or vendor, and place all orders in a few clicks.
            </div>
        
            <ButtonLogin session={session}/>
          </div>
          
        <Image src={productDemo} alt="Product Demo" className='max-w-96 rounded-xl ' />
      </section>

      {/* PRICING */}
      <section className='bg-base-200 ' id="pricing">
        <div className='py-32 px-8 max-w-5xl mx-auto '>
          <p className='text-md uppercase font-medium text-primary mb-4 text-center' >Pricing</p>
          <h2 className='text-3xl lg:text-4xl font-extrabold mb-12 text-center'>Nothing upfront, pay as you go</h2>
          {/* Pricing Card */}
          <div className='p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6'>
            <div className='flex gap-2 items-baseline text-center justify-center'>
              <div className='text-4xl font-black'>$19</div>
              <div className=' uppercase text-sm font-medium opacity-60'>/Month</div>
            </div>  
            <ul className='space-y-2'>
              {
                [
                  "Track all purchases in one place",
                  "Optimize your product mix",
                  "Huge timesaver for placing orders",
                  "Connects to all major POS systems"
                ].map((priceItem) => {
                    return (
                    <li className='flex items-center gap-2' key="{priceItem}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path 
                        fillRule="evenodd" 
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" 
                        clipRule="evenodd" 
                        className='text-green-600 size-4'
    
                        />
                    </svg>
                    {priceItem}
                    </li>
                );
              
              })}
                   
            </ul>
            <ButtonLogin session={session} extraStyle="w-full"/> 
            {/* <Example></Example> */}
          </div>
          
        </div>
      </section>

      {/* FAQ */}
      <section className='bg-base-200 ' id="faq">
        <div className='py-32 px-8 max-w-3xl mx-auto '>
          <p className='text-base uppercase font-medium text-primary mb-4 text-center' >FAQ</p>
          <h2 className='text-3xl lg:text-4xl font-extrabold mb-12 text-center'>Freqently Asked Questions</h2>

          <ul className='max-w-lg mx-auto'>
            {
              [
                
                {
                  question: "What is ReUp?",
                  answer: "ReUp is a platform that helps buyers and sellers optimize the reordering process."
                },

                {
                  question: "How does it know what's needed?",
                  answer: "You connect your POS system and we use historical sales and inventory levels."
                },
                {
                  question: "Can we customize the orders?",
                  answer: "Yes, you can set up custom rules and make any edits you want."
                },
                {
                  question: "What's the cancellation policy?",
                  answer: "No contracts. You can cancel anytime. Full refund if you're not satisfied."
                },
                {
                  question: "how much does it cost?",
                  answer: "We charge retailers $99/month and suppliers $29/month." 
                },
                {
                  question: "Can we get a demo?",
                  answer: "Yes, we offer a 30 day free trial."
                },
                {
                  question: "What are the main benefits?",
                  answer: "Time savings, optimized product mix, and better cash flow."
                },
                {
                  question: "What if we have a problem?",
                  answer: "We offer 24/7 support."
                },
                {
                  question: "Can we get a refund?",
                  answer: "Yes, we offer a 30 day money back guarantee."
                }
            ].map((qa) => (
                
                <FAQListItem key={qa.question} qa={qa} />
              ))}
          </ul>
          
        </div>
      </section>
    </main> 
  );
}
