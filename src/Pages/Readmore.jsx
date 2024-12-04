import React, { createContext, Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export const newsContext = createContext();

export default function Readmore() {
    const { id } = useParams();

  const [singleNews, setSingleNews] = useState([]);

  useEffect(() => {
    try {
      const fetchNews = async () => {
        const url = `https://fake-api-one-rust.vercel.app/api/news/single_news/${id}`;
    
        const res = await fetch(url);
    
        const data = await res.json();
    
        if (data.success === false) {
          setError('Error while fetching data!');
        }
    
        setSingleNews(data);
      }; fetchNews();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(singleNews);
  

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://fake-api-one-rust.vercel.app/api/news/all_news`;
  
      const res = await fetch(url);
  
      const data = await res.json();
  
      if (data.success === false) {
        setError('Error while fetching data!');
      }
  
      setNews(data);
    }; fetchNews();
  }, []);
    
  return (
    <div className='bg-slate-200 py-10'>
      <div className="xl:max-w-[50%] md:max-w-[60%] max-w-[97%] mx-auto bg-white p-4 rounded-md">
        <div className="h-[300px] border rounded-md">
          <img src={singleNews.source} alt="" />
        </div>
        <div className="py-4">
          <h2 className="font-medium text-xl">{singleNews.title}</h2>
          {/* <p className="pb-2"
            dangerouslySetInnerHTML={{
              __html: singleNews.description.replace(/\n/g, "<br />"),
            }}></p> */}
        </div>
      </div>
      {/*  */}
    </div>
  )
}
