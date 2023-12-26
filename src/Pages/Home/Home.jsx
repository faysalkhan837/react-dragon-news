import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import Rightsidenav from "./Rightsidenav/Rightsidenav";
import Header from "./Shared/Header/Header";
import Leftsidenav from "./Shared/Leftsidenav/Leftsidenav";
import Navbar from "./Shared/Navbar/Navbar";
import NewsCard from "./NewsCard";
import { useState } from "react";


const Home = () => {
    const [newsCard, setNewsCard] = useState([3])
    const news = useLoaderData()
    // setNewsCard(news)
    
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1 className='text-3xl font-Poopins'>this is home</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className='border'>
                    <Leftsidenav></Leftsidenav>
                </div>
                <div className="border-[10px] border-red-500 md:col-span-2">
                    {
                        news.slice(0, newsCard).map(aNews => <NewsCard
                        key={aNews._id}
                        news={aNews}
                        ></NewsCard>)
                    }
                   <div className="text-center p-5">
                   <div className={newsCard === news.length ? 'hidden' : ''}>
                   <button
                    className="btn btn-primary"
                    onClick={()=>(setNewsCard(news.length))}
                    >Show All</button>
                   </div>
                   </div>
                </div>
                <div className="border">
                    <Rightsidenav></Rightsidenav>
                </div>
            </div>
        </div>
    );
};

export default Home;