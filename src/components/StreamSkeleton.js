import React from 'react'

export default function StreamSkeleton() {
  return (
    <div className="skeleton">
    <div className="skeleton-left flex1">
    <div className="square"></div>
  </div>
    <div className="skeleton-right flex2">
      <div className="line  w75"></div>
      <div className="line  w75"></div>
      <div className="line  w75"></div>
      <div className="line  w75"></div>
  </div>
</div>
  )
}
