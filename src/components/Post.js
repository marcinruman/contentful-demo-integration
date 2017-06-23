import { h, render, Component } from 'preact';
import marked from 'marked';

export class Post extends Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <article class="post">
                <h1>{props.title}</h1>
                <div dangerouslySetInnerHTML={{
                    __html: marked(props.body)
                }}></div>
                <div>
                    <time>{props.date}</time>
                </div>
                <hr />
            </article>
        )
    }
}

export default Post;