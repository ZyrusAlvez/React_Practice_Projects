import ComponentE from "./ComponentE"
import { useContext } from "react"
import { userContext } from "./App"

export default function ComponentD(){

    const user = useContext(userContext)

    return (
        <div>
            Hello! {user}
            <ComponentE/>
        </div>
    )
}