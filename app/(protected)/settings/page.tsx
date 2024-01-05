import { auth, signOut } from "@/auth"

const SettingsPage = async () => {
    const session = await auth()
  return (
    <div>
      <span>{JSON.stringify(session).toString()}</span>
      <form action={async () => {
        "use server"

        await signOut()
      }}>
        <button typeof="submit">Logout</button>
      </form>
    </div>
  )
}

export default SettingsPage