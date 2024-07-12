import { Fragment } from "react"
import Categories from "../components/Categories/Categories"
import Products from "../components/Products/Products"
import CampaignSingle from "../components/CampaignSingle/CampaignSingle"

const ShopPage = () => {
    return (
        <Fragment>
            <Categories />
            <Products />
            <Products />
            <CampaignSingle />
            <Products />
            <Products />
        </Fragment>
    )
}

export default ShopPage