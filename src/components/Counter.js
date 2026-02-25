import { useRef, useState, useMemo, useCallback } from "react";

function Counter() {
    console.log('render Counter')
    const [number, setNumber] = useState(0);
    let num = useRef(0);

    function handleClick(e) {
        e.stopPropagation();

        setNumber(number => number + 1);
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        num.current++

        console.log(num.number)
    }
    const fibFx = useCallback(function fib(n) {
        if (n <= 0) return 0;     // ✅ important
        if (n === 1) return 1;    // ✅ base case
        return fib(n - 1) + fib(n - 2);
    }, []);

    const fibMemoized = useMemo(() => fibFx(number), [number, fibFx])
    return (
        <>
            <h1 style={{ color: 'black' }}>{number}| {fibMemoized}</h1>
            <button onClick={handleClick}>Add</button>
        </>
    )

}

export default Counter;