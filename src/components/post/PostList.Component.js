import PropTypes from 'prop-types';
import React from 'react';
import { createFragmentContainer, createPaginationContainer, graphql } from 'react-relay';
import Post from './Post.Component'
import PostAddedSubscription from './subscriptions/PostAddedSubscription'

import enviroment from '../../Environment'
import { DEFAULT_POST_PAGE_LIMIT } from '../../common/common.constant'

const propTypes = {
    viewer: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired
}

// const contextTypes = {
//     relay: PropTypes.shape({
//         variables: PropTypes.shape({
//             status: PropTypes.string.isRequired
//         }).isRequired
//     }).isRequired
// };

class PostList extends React.Component{
    

    componentDidMount = () =>{
        const { relay, viewer } = this.props;
        PostAddedSubscription.request(relay.environment, viewer)
    }

    _loadMore() {
        if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
          return;
        }
        this.props.relay.loadMore(
          DEFAULT_POST_PAGE_LIMIT, 
          error => {
            console.log(error);
          },
        );
    }



    render() {
        const { viewer } = this.props;
        const { posts, numPosts } = viewer

        if(!numPosts){
            return null;
        }
        return (
            
            <section className="main">
                
                
                
                
              
                <ul className="todo-list">
                    {posts.edges.map(({ node }) => (
                       
                        <Post key={node.id} viewer={viewer} post={node} />
                    ))}
                </ul>

                <button
                    className="load-more-btn"
                    onClick={() => this._loadMore()}
                    title="Load More">
                      {'Load More'}
                </button>
            </section>
        )
    }
}

PostList.propTypes = propTypes;
// PostList.contextType = contextTypes;


export default createPaginationContainer(
    PostList,
    graphql`
        fragment PostList_viewer on User
        @argumentDefinitions(
            count: {type: "Int", defaultValue: 2}
            cursor: {type: "String"}
        ){
            posts( 
                first: $count
                after: $cursor
            ) @connection(key: "PostList_posts"){
                edges{
                    node{
                        id
                        ...Post_post
                    }
                }
            }
            id
            numPosts
            ...Post_viewer
        }   
    `,
    {
        direction: 'forward',
        getConnectionFromProps(props) {
            return props.viewer && props.viewer.posts;
        },
        // This is also the default implementation of `getFragmentVariables` if it isn't provided.
        getFragmentVariables(prevVars, totalCount) {
            return {
                ...prevVars,
                count: totalCount,
            };
        },
        getVariables(props, args, fragmentVariables) {
       
            const {count, cursor} = args
            return {
              count,
              cursor,
            };
        },
        query: graphql`
            query PostListPaginationQuery($count: Int!, $cursor: String!) {
                viewer {
                    ...PostList_viewer @arguments(count: $count, cursor: $cursor)
                }
            }
        `
    }
)

