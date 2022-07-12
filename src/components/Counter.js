import { useCounterStore } from "../store/useCounterStore"

export default function Counter() {
    const { count, inc } = useCounterStore()
    return (
        <div className="counter">
            <p>{count}</p>
            <button onClick={inc}>one up</button>
        </div>
    )
}

