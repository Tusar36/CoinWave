import React from 'react'
import NewsCard from './NewsCard'
import { useEffect } from 'react';
export default function News(props) {
  let fixed=0;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [fixed]);
  return (
    <div  className='w-[100%] m-3 flex flex-wrap gap-2 justify-center min-h-screen'>
      {
        props.data.data.map((element,i)=>{
          if(i<props.limit){
            return <NewsCard
          url={element.url}
          image={element.thumbnail}
          title={element.title}
          description={element.description}
          />
          }
          
        })
      }
    </div>
  )
}
