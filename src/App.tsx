import { useEffect, useRef, ReactElement } from "react"
import { Wrapper, Status } from "@googlemaps/react-wrapper"

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>
  if (status === Status.FAILURE) return <h3>{status} ...</h3>
  return <></>
}

function MyMapComponent({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral
  zoom: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    new window.google.maps.Map(ref.current as HTMLDivElement, {
      center,
      zoom,
    })
  })

  return <div ref={ref} id="map" />
}

const App = () => {
  const center = { lat: -34.397, lng: 150.644 }
  const zoom = 4

  return (
    <Wrapper apiKey="AIzaSyBQfTJZ-cN-0xOlq18w1WvyzTPtKhlmN8s" render={render}>
      <MyMapComponent center={center} zoom={zoom} />
    </Wrapper>
  )
}

export default App
