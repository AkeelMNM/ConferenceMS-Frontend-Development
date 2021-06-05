import React from 'react';
//display created posts
export default class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    const {post} = this.props;
       return <div>
    <div>
        <p>ID: {post.id}</p>
    </div>
    <div>
        <p>Name: {post.name}</p>
    </div>
<div>
    <p>Description: {post.description}</p>
</div>
    </div>;
}

}