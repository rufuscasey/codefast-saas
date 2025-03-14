import ButtonLogout from "@/components/ButtonLogout";
import FormNewBoard from "@/components/FormNewBoard";
import { auth } from "@/auth";
import connectMongo  from "@/libs/mongoose";
import User from "@/models/User";
import Board from "@/models/Board";

async function getUser() {
  const session = await auth();

  await connectMongo();
  return await User.findById(session.user.id).populate("boards");

}

export default async function Dashboard() {

  const user = await getUser();
  console.log(user);

  return (
    <main className="bg-base-200 min-h-screen">
      {/* HEADER */}
        <section  className="bg-base-100 ">
          <div className="max-w-5xl mx-auto px-5 py-3 flex justify-end">
          <ButtonLogout />
          </div>
          
        </section>
      
      {/* MAIN */}
      <section className="max-w-5xl mx-auto px-5 py-12 space-y-12">
        <FormNewBoard />
        <div>
          <h1 className="font-extrabold text-xl mb-4">
            {user.boards.length} Boards
          </h1>

          <ul className="space-y-4 ">
            {user.boards.map((board) => (
              <li 
                key={board._id}
                className="bg-base-100 p6 rounded-3xl ">
                <h2>{board.name}</h2>
              </li>
            ))}
          </ul>
        </div>
      
      </section>
      
      
    </main> 
  );
}
