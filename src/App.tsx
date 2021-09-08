import React, { useState } from 'react'
// import QrReader from 'react-qr-reader'
// import BarcodeReader from 'react-barcode-reader'
import BarcodeScannerComponent from 'react-qr-barcode-scanner'

const App = () => {
	const [qrData, setQrData] = useState('')
	const [stopStream, setStopStream] = useState(false)

	return (
		<>
			<BarcodeScannerComponent
				stopStream={stopStream}
				onUpdate={(err, result) => {
					if (result) {
						setQrData(result.getText())
						setStopStream(true)
					} else setQrData('Not Found')
				}}
			/>
			<p>Qr data: {qrData}</p>
		</>
	)
}

export default App
