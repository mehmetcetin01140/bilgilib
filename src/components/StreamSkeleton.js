import React from 'react'

export default function StreamSkeleton() {
  return (
    <div class="skeleton">
    <div class="skeleton-left flex1">
    <div class="square"></div>
  </div>
    <div class="skeleton-right flex2">
      <div class="line  w75"></div>
      <div class="line  w75"></div>
      <div class="line  w75"></div>
      <div class="line  w75"></div>
  </div>
</div>
  )
}
