import React, { Component } from 'react';


class Media extends Component {

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
                <>
                    <h1>Media</h1>
                    <div className="App">

                        <ul>
                            {items.map(item => (
                                <li key={item.id}>
                                    <img src="{item.images[0].src}" alt="Http/Https problem. Read comment in assignment" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            );

        };

    }

}


export default Media;