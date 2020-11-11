import React, { Component } from 'react';


class Posts extends Component {

    constructor(props) {

        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        const API_URL = 'https://christiansbutik.com.christianberglonn.com/wp-json/wp/v2/posts';

        fetch(API_URL)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true,
                })
            });

    }

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <>
                    <h1>Posts</h1>
                    <div className="App">

                        <ul>
                            {items.map(item => (
                                <li key={item.id}>
                                    <h3>{item.title.rendered}</h3>
                                    <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            );
        };

    }

}


export default Posts;