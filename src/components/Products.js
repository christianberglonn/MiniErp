import React, { Component } from 'react';


class Products extends Component {

    constructor(props) {

        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        const wooUrl = 'https://christiansbutik.com.christianberglonn.com/wp-json/wc/v3/products';
        const auth = this.basicAuth();

        fetch(wooUrl, {
            headers: {
                'Authorization': auth,
            }
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true,

                })
            });

    }

    basicAuth() {
        const wooClientKey = 'ck_c5c048e9447e63faf4e7545f5afc5da511eb875b';
        const wooClientSecret = 'cs_579f00af36b89fb80519d13fe27baaf5e7b26f58';
        let hash = btoa(wooClientKey + ':' + wooClientSecret);
        return "Basic " + hash;
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <body>
                    <h1>Products</h1>
                    <div className="App">
                        <ul>
                            {items.map(item => (
                                <>
                                    <li key={item.id}>
                                        <img src="{item.images[0].src}" alt="Http/Https problem. Read comment in assignment" />
                                        <br />
                                    </li>
                                    <li key={item.id}>
                                        Name: {item.name} <br />
                                    </li>
                                    <li key={item.id}>
                                        Category: {item.categories[0].name} <br />
                                    </li>
                                    <li key={item.id}>
                                        Price: {item.price} <br />
                                    </li>
                                    <br />
                                </>
                            ))}
                        </ul>


                    </div>
                </body>
            );

        };

    }

}


export default Products;