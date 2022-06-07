import React from 'react'
import SliderComp from './SliderComp'
import LatestEntries from "./LatestEntries"
import Streaming from "./Streaming"
import {Helmet} from "react-helmet";
export default function HomePage() {
  return (
    <div>
        <Helmet>
        <title>{"Bilgilib - Bilim, Teknoloji, Güncel Konular... "}</title>
        <meta name="description" content={`Bilgilib Anasayfa`} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9997269729766280"
     crossorigin="anonymous"></script>
        </Helmet>
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
