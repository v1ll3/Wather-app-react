import React, { useState, useEffect } from "react"
import {getForeCast} from "./request"

const Weather = () => {
	const [value, setValue] = useState(0)	

	useEffect(() => {
		getForeCast().then((response) => {
			console.log("response", response)
		})
	}, [])

	return (
		<div>
			T�ss� on luku mik� on "value": {value}
			<button onClick={() => setValue(50)}> T�ss� on nappi </button>
		</div>
	)
}

export default Weather