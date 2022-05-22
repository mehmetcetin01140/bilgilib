import React from 'react'

export default function recomSkeleton() {
  return (
<div className="card-container">
        <div className="card-upper-container inner-card animate-pulse"></div>
        <div className="card-lower-container p-3">
            
                <div className="col-12 inner-card animate-pulse mb-3"> </div>
                <div className="col-12 inner-card animate-pulse mb-3"> </div>
                <div className="col-12 inner-card animate-pulse mb-3"> </div>
           
        </div>
    </div>
  )
}
