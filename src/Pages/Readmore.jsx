import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const newsContext = createContext();

export default function Readmore() {
  const { id } = useParams();
  const [singleNews, setSingleNews] = useState({});
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchSingleNews = async () => {
      try {
        const url = `https://fake-api-one-rust.vercel.app/api/news/single_news/${id}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.success === false) {
          throw new Error("Error while fetching single news data!");
        }

        setSingleNews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleNews();
  }, [id]);

  console.log(singleNews);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const url = `https://fake-api-one-rust.vercel.app/api/news/all_news`;
        const res = await fetch(url);
        const data = await res.json();

        if (!res.ok || data.success === false) {
          throw new Error("Error while fetching all news!");
        }

        setNews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllNews();
  }, []);

  return (
    <div className="bg-slate-200 py-10">
      <div className="xl:max-w-[50%] md:max-w-[60%] max-w-[97%] mx-auto bg-white p-4 rounded-md">
        <div className="h-[300px] border rounded-md">
          {singleNews?.source && (
            <img src={singleNews.source} alt="" className="h-[300px] rounded-md" />
          )}
        </div>
        <div className="border-t border-b border-gray-300 py-2 mt-3 flex justify-between items-center gap-2">
          <p className="text-[12px] text-gray-500">Created by: admin</p>
          <p className="text-[12px] text-gray-500">Date: {singleNews?.date || "N/A"}</p>
        </div>
        <div className="py-4">
          <h2 className="font-medium text-xl">{singleNews?.title || "No Title"}</h2>
          {singleNews?.description && (
            <p
              className="pb-2"
              dangerouslySetInnerHTML={{
                __html: (singleNews.description || "").replace(/\n/g, "<br />"),
              }}
            ></p>
          )}
        </div>
      </div>
    </div>
  );
}
