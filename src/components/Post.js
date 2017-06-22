import { h } from 'preact';

export function Post(props) {
    return(
        <article class="post">
            <h1>{props.title}</h1>
            <div>
                {props.body}
            </div>
            <div>
                <time>{props.date}</time>
            </div>
            <hr />
        </article>
    );
}

export default Post;