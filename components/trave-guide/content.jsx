// import { Collapse } from 'react-bootstrap';
import ReactHtmlParser from "react-html-parser";
import { useState } from 'react';
import {tw} from 'twind'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

const Tabs=({title,desc,clps=null})=>{
    const [collapse, setCollapse] = useState(clps);
    return     <div>
        <div className="faq-acc">
            <div aria-multiselectable="true" className="panel-group" id="accordion" role="tablist">
                <div className="panel panel-default">
                    <div
                    className="panel-heading"
                    // id="howtoreach"
                    id={title}
                    role="tab"
                    >
                        <h4 className="panel-title">
                        <a
                            aria-controls="headingOne"
                            aria-expanded="false"
                            className="collapsed"
                            role={"button"}
                            data-toggle="collapse"
                            onClick={()=>collapse ===null?setCollapse(true):setCollapse(null)}
                            >

                            <div className={tw`flex justify-between`}>
                                <div>
                                    {title}
                                </div>
                                {collapse?
                                <AiOutlineMinus/>:
                                <AiOutlinePlus/>
                                }
                                
                            </div>
                            
                            
                            </a>

                        </h4>
                    </div>

                    <div in={collapse}>
                    <div
                        className="panel-collapse"
                        >
                        <div className={tw`${collapse?'block':'hidden'} panel-body`}>
                            <div>
                            {ReactHtmlParser(
                                desc
                            )}
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
                
            </div>
        </div>
    </div>

}









const Content =({data,collapse=null})=>{
    // const [collapse, setCollapse] = useState(null);
    return <>
    

    <div>
        {data.tg.howToReachwHeading?<Tabs title={data.tg.howToReachwHeading} desc={data.tg.howToReachDesc} clps={collapse} />:""}
        {data.tg.eventsHeading?<Tabs title={data.tg.eventsHeading} desc={data.tg.eventsDesc} clps={collapse} />:""}
        {data.tg.factsHeading?<Tabs title={data.tg.factsHeading} desc={data.tg.factsDesc} clps={collapse} />:""}
        {data.tg.foodHeading?<Tabs title={data.tg.foodHeading} desc={data.tg.foodDesc} clps={collapse} />:""}
        {data.tg.marketHeading?<Tabs title={data.tg.marketHeading} desc={data.tg.marketDesc} clps={collapse} />:""}
        {/* <Tabs title={data.tg.factsHeading} desc={data.tg.factsDesc} /> */}
        {/* <Tabs title={data.tg.foodHeading} desc={data.tg.foodDesc} /> */}
        {/* <Tabs title={data.tg.marketHeading} desc={data.tg.marketDesc} /> */}
    </div>

    </>
}

export default Content