import { useEffect } from "react";
import authStore from "../stores/authStore"

export default function LogOutPage() {
    const store = authStore();
    useEffect(() => {
        store.logout();
    })
  return (
    <div>
        <h1>You are now Logged Out</h1>

    </div>
  )
}
