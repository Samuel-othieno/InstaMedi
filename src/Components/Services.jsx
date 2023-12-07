import { ArticleCardImage } from "./home/ArticleCardImage";
import { ArticlesCardsGrid } from "./Providers/ArticlesCardsGrid";
import { FeaturesGrid } from "./service/FeaturesGrid";
import { HeroImageRight } from "./service/HeroImageRight";

import "./Services.css";

function Services() {
    return (
        <>
           <HeroImageRight/>
           <FeaturesGrid/>
           <ArticlesCardsGrid/>
           
           
        </>
    );
}

export default Services;
