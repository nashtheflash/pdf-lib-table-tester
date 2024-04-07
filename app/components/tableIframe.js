export function TableIframe({ url }) {
    return(
        <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="100%"
            height="100%"
            src={url}
        >
      </iframe>
    )
}