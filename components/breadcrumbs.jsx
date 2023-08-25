import Link from "next/link";
import { tw } from "twind";
import { TiChevronRight } from "react-icons/ti";
const BreadCrumbs = ({ bread }) => {
  // const bread = {
  //     disabled:{
  //         "item":"Tour package"
  //     },
  //     enabled :[
  //         {
  //             item:"Kiomoi",
  //             href:"/"
  //         },
  //         {
  //             item:"Kiomoi",
  //             href:"/"
  //         },
  //         {
  //             item:"Kiomoi",
  //             href:"/"
  //         }
  //     ]
  // }

  return (
    <>
      {/* style={{position:'sticky',top:'60px'}} */}
      <section className="container">
        <div className="row_">
          <ul
            className="breadcrumb flex items-center"
            itemScope={true}
            itemtype="https://schema.org/BreadcrumbList"
          >
            {bread.enabled.map((e, index) => {
              return (
                <li
                  key={index}
                  itemprop="itemListElement"
                  className="flex items-center"
                  itemScope={true}
                  itemtype="https://schema.org/ListItem"
                >
                  <>
                    <Link href={e.href} itemprop="item">
                      <div className="_b_active">
                        <span itemprop="name">{e.item}</span>
                        <meta itemprop="position" content={index + 1} />
                      </div>
                    </Link>
                    <TiChevronRight className={tw`bread_icon inline`} />
                  </>
                </li>
              );
            })}
            <li>{bread.disabled.item}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default BreadCrumbs;
