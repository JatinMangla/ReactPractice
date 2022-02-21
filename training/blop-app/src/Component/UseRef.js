import React, { useRef, useEffect } from 'react'

function FocusInput() {
	const inputRef = useRef(null)

const Doo = () => {
		inputRef.current.style.display="none"
        console.log("done")
	}
	return (
		<div>
			<input ref={inputRef} type="text" />
            <button onClick={Doo}>Press</button>
		</div>
	)
}

export default FocusInput