import React, { Component } from "react";
import Preview from "../../Components/Preview/Preview";
import SHOP_DATA from "./shopdata";

export class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop">
                <h1>Collections</h1>
                {collections.map(({ id, ...props }) => (
                    <Preview key={id} {...props} />
                ))}
            </div>
        );
    }
}

export default Shop;
