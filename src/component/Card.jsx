import React from 'react'

export const Card = ({celebrity}) => {
  return (
     <div>
       <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className='flex justify-center'>
            <a href="#">
                <img className="rounded-t-lg" src={celebrity.image} alt="" style={{height: '300px'}} />
            </a>
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {celebrity.name}</h5>
            <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Country: {celebrity.country}</h5>            
            <div
      class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
      <small>Last updated {celebrity.lastUpdated} </small>
    </div>
          
          </div>
      </div>
     </div>
  )
}
