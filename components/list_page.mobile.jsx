import Package from "../components/package"
import Link from 'next/link'
import {TiChevronRight} from 'react-icons/ti'
import BreadCrumbs from "./breadcrumbs"
import {tw} from 'twind'
import dynamic from 'next/dynamic';
import { useState,useEffect } from "react"
// import { useSelector } from "react-redux"
import FilterBy from "./list/filter"
import { ScrollWrapper } from 'react-bottom-scroll';
import ReactHtmlParser from "react-html-parser";

// const FilterBy = dynamic(() => import('./list/filter'), {
//     ssr: true,
// });

// const filtr = useSelector(state=>state.filter)
// console.log(filtr)

const ListPageMobile = ({data,region,places,isMobile}) =>{
    
    const [filter,setFilter] = useState({keyword:""})
    const [limit,setLimit] = useState(10)
    const [overviewlimit,setOverviewlimit] = useState(200)
    const [overview,setOverview] = useState()
    
    const setFiltering = (keyword) =>{
        // console.log(keyword)
        setFilter({keyword:keyword})
    }
    
    // console.log(filter)
    
    const bread = {
        disabled:{
            "item":"Holidays Bookings"
        },
        enabled :[
            {
                item:"Kiomoi",
                href:"/"
            },                    
        ]
    }

    var d = region?.desc
    // console.log(d)

    useEffect(()=>{
        if (region !== null)
        setOverview(d.substring(0, overviewlimit))  
    },[overviewlimit])

    return <article>

        <BreadCrumbs bread={bread}/>
            <section className="container">
                {/* <div className="row" style={{marginBottom:'30px'}}>
                    <h2>Kiomoi packages</h2>
                </div> */}
                {region?
                <div className={tw`p-4 bg-white mb-4 _box_shadow_`}>
                <h2 className={tw`text-2xl pb-2`}>{region?.name}</h2>
                <div>
                    {ReactHtmlParser(overview)}
                    {overviewlimit == 150 ||
                        overviewlimit == 200 ? (
                        <a
                        onClick={() =>
                            setOverviewlimit(10000)
                        }
                        className="_plus_more"
                        >
                        +more
                        </a>
                    ) : (
                        <a
                        onClick={()=>setOverviewlimit(200)}
                        className="_plus_more"
                        >
                        -less
                        </a>
                    )}

                </div>
                </div>
                
                
                :""
                }

                <div className={tw`flex flex-wrap`}>
                    {!isMobile?
                    <div className={tw`w-full lg:w-1/4 pr-5`}>
                        <FilterBy filter={filter} setKeyword={setFilter} data={places}/>
                    </div>:""
                    }


                    <div className={tw`w-full lg:w-3/4 `}>
                        <div className={tw``}>
                            <div className={tw`flex items-center justify-between mb-6 pb-2 border-b`}>
                                <div>
                                    <h3 className={tw`text-base`}>
                                        Showing
                                        <span className={tw`font-bold ml-2`}>
                                            {data.length} Packages
                                        </span>
                                        
                                    </h3>
                                    
                                </div>
                                <div>
                                    <div className="flex flex-wrap">
                                        <div className={tw`p-2 text-sm text-bold text-gray-600`}>
                                            SORT BY : 
                                        </div>
                                        <div className={tw`p-2 text-sm text-gray-600 cursor-pointer`}>
                                            POPULAR
                                        </div>
                                        <div className={tw`p-2 text-sm  text-gray-600 cursor-pointer`}>
                                            DURATION
                                        </div>
                                        <div className={tw`p-2 text-sm text-gray-600 cursor-pointer`}>
                                            PRICE
                                        </div>                                                                                
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        
                            <ScrollWrapper
                            wrapperStyle={{width: '100%',overflowY:'initial'}}
                            bottomCallback={()=>{setLimit(limit+10)}}
                            minScroll={20}
                            className={"row"}
                            // smoothBehavior={true}
                            >
                                <div className="row">
                                
                                    {
                                        data.slice(0,limit).map((item,index)=>{
                                            return  item.name.length>=2 &&(item.name.toLowerCase().includes(filter.keyword) || item.cities.toLowerCase().includes(filter.keyword) || item.theme.toLowerCase().includes(filter.keyword))?
                                            <Package key={index} item={item} />:null
                                        })
                                    }
                                </div>
                                
                            </ScrollWrapper>
                        
                        

                    </div>
                    
                    
                    
                    

                </div>
            </section>
        </article>
}
export default ListPageMobile