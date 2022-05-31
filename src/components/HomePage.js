import React from 'react'
import SliderComp from './SliderComp'
import LatestEntries from "./LatestEntries"
import Streaming from "./Streaming"
export default function HomePage() {
  return (
    <div>
      <div className="sliderComp">
    <SliderComp/>
      </div>
      <div className="latestEntries">
        <LatestEntries/>
      </div>
<div className="streaming">
      <Streaming/>
</div>
    </div>
  )
}
