
import { revalidatePath } from "next/cache";
import { getUser } from "../data-access/user";
import { updateNameAction } from "./actions";
import Form from "./form";

export default async function UsersPage({
    params,
}: {
    params: {
        userId: string
    };
}) {
    
  const user = await getUser(params.userId)

  return (
    <div>
      Users {user.name}

      <form action={updateNameAction.bind(null, user.id)}>
        <input className="text-black border border-gray-400" type="text" name="name" />
        <button className="bg-blue-500 hover: bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        Users {user.name}
        <Form userId={user.id} />
      </form>
    </div>
  );
}
