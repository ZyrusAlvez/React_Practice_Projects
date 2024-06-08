import { useContext } from "react"
import { userContext } from "./App"

export default function ComponentE(){
    const user = useContext(userContext)

    return (
        <div>
            Bye! {user}
        </div>
    )
}