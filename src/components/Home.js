import { h , Component } from 'preact';
import { createClient } from 'contentful';
import Post from './Post';

const POST_CONTENT_TYPE_ID = '2wKn6yEnZewu2SCCkus4as';

const client = createClient({
    // This is the space ID.
    // A space is like a project folder in Contentful terms
    space: 'cnlaab2hrglo',
    // This is the access token for this space.
    // Normally you get both ID and the token in the Contentful web app
    accessToken: 'e691649d313dce900f4712bfdbfb52d4f7896a689608fdaac88b2ff7731e8ee7'
});

export class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: null,
            loading: true
        }
    }

    componentDidMount() {

        client.getEntries({
            content_type: POST_CONTENT_TYPE_ID
        })
        .then(entries => {

            this.setState({
                posts: entries.items,
                loading: false
            });

        })
        .catch(console.error);

    }

    render({}, {loading, posts}) {
        return (
            <section>
                {loading
                 ? <p>Fetching...</p>
                 : posts.map(post => {
                     return <Post title={post.fields.title} body={post.fields.body} date={post.fields.date} />
                 })
                }
            </section>
        )
    };
}

export default Home;