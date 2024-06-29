import { revalidatePath } from "next/cache";
import { getUser, updateUser } from "../data-access/user";

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

      <form action={async (formData: FormData) => {
        'use server'
        const newName = formData.get("name") as string
        await updateUser(user.id, newName)
        revalidatePath(`/users/${user.id}`)
      }}>
        <input className="text-black border border-gray-400" type="text" name="name" />
        <button className="bg-blue-500 hover: bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
}
