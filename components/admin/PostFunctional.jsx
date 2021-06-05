import React from 'react';
import PostListItem from "./PostListenItem";
import Post from "./Post";

export default function PostsFunction(props){
    const [post, setPost] = useState(null);
    const {posts} =props;
    return<div>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {posts.map(post => {
                return <PostListItem key={post.id.toString()} post={post}
                                     selectPost={setPost}/>
            })}
            </tbody>
        </table>
        <div>
            {post ? <Post post={post}/> : ''}
        </div>
    </div>;
}