import { forwardRef } from "react"
import DrunkEffect from "./DrunkEffect"

//usare forwardRef perche un function non puo essere usata useRef
export default forwardRef(function Drunk(props, ref) { //mandiamo ref nel primitivo
    const effect = new DrunkEffect(props)
    return <primitive ref={ref} object={effect} /> //ref vine mandato al useRef in Experience
})
