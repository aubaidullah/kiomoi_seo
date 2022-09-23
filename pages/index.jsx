// import RelatedTour from "../components/detail/related_tours";
import HomePackages from "../components/home/packages";
import { getarticleQuery, getbanner, getHome,getreviewsQuery,getThemeQuery,getTravelGuideHome } from "../components/Graphql/Queries";
import client from "../components/Graphql/service";
import Banner from "../components/home/banner"
import State from "../components/home/state";
import Nav from "../components/Nav"
import TravelGuide from "../components/home/travel_guide";
import Hotel from "../components/home/hotel";
import Reviews from "../components/home/reviews";
import Articles from "../components/home/articles";
import Themes from "../components/home/theme";

const Home_Page = ({home,travel,reviews,articles,theme}) =>{

    return <>
    <Nav />
    <Banner data={home.banners} />
    <State data = {home.states}/>
    <TravelGuide data = {travel}/>
    <HomePackages data={home} />
    <Themes data={theme}/>
    <Hotel data = {home.hotels}/>
    <Articles data = {articles?.articles } />
    <Reviews data = {reviews?.reviews} />
    
    
        <section className="container">
            <section>
                
            </section>
            
        </section>
    </>

}

// getbanner



export async function getServerSideProps(context) {
    // Fetch data from external API
    context.res.setHeader('Cache-Control', 's-maxage=10'); 
    // const headers = context.req.headers
    
    const res = await client.query({query:getHome,variables:{input:{'av':'','id':'','pt':''}}})
    const res_travel = await client.query({query:getTravelGuideHome,variables:{input:{'av':'1.3','id':'0','pt':'WEBSITE','geoid':0,'pagenum':1,'pid':0,'size':18,'type':0}}})  
    const res_review = await client.query({query:getreviewsQuery,variables:{input:{av:'1.3',id:'0',pt:'WEBSITE',geoid:0,pagenum:1,pid:0,size:6,'type':''}}})  
    const res_article = await client.query({query:getarticleQuery,variables:{input:{av:'1.3',id:'string',pt:'WEBSITE',geoid:0,pagenum:1,pid:0,size:20,'type':'0'}}})  
    // getarticleQuery
    const res_theme = await client.query({query:getThemeQuery,variables:{input:{'av':'','id':'','pt':''}}})
    // console.log(res_article.data)
    // const data = res.data.allpackage.output.packages.slice(0, 10)

    // const data = res.data.allpackage.output.packages

    // const region = res.data.allpackage.output.region??null
    // const places = res.data.allpackage.output.fcities
    // console.log(places)
    console.log(res_theme.data.alltheme.output)
    return {props:{home:res.data.home.output,travel:res_travel.data.travelguide.output,reviews:res_review.data.reviews.output,articles:res_article.data.articles.output,theme:res_theme.data.alltheme.output}}
    // return { props: { data,headers,region,places}}
}



export default Home_Page