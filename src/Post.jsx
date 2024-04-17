export function Post({ author, content }) {
    return (
        <p>
            <strong>{author} once said: {content}</strong>
        </p>
    )
}