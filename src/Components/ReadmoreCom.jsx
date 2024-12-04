// import React, { useContext } from 'react'
// import { newsContext } from '../Pages/Readmore';

// export default function ReadmoreCom() {
//     const news = useContext(newsContext);

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Header */}
//       <header className="bg-blue-900 text-white py-4">
//         <div className="container mx-auto px-4">
//           <h1 className="text-3xl font-bold">Read More News</h1>
//         </div>
//       </header>

//       <div className="container mx-auto px-4 py-6">
//         {/* News List */}
//         {!selectedArticle ? (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {newsArticles.map((article) => (
//               <div
//                 key={article.id}
//                 className="bg-white shadow-md rounded-lg overflow-hidden"
//               >
//                 <img
//                   src={article.image}
//                   alt={article.title}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold">{article.title}</h2>
//                   <p className="text-gray-600 mt-2">{article.summary}</p>
//                   <button
//                     onClick={() => setSelectedArticle(article)}
//                     className="mt-4 bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700"
//                   >
//                     Read More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           // Single Article View
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <button
//               onClick={() => setSelectedArticle(null)}
//               className="text-blue-900 mb-4"
//             >
//               &larr; Back to all news
//             </button>
//             <img
//               src={selectedArticle.image}
//               alt={selectedArticle.title}
//               className="w-full h-60 object-cover rounded-md"
//             />
//             <h2 className="text-3xl font-bold mt-4">{selectedArticle.title}</h2>
//             <p className="text-gray-700 mt-2">{selectedArticle.content}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
//   )
// }
