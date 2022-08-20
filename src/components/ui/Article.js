const Article = data => {
  return (
    <>
      {Object.values(data).map((article, index) => {
        const { title, pageid, snippet } = article
        const url = `http://en.wikipedia.org/?curid=${pageid}`
        return (
          <a key={index} href={url} target="_blank" rel="noreferrer">
            <h4>{title}</h4>
            <p dangerouslySetInnerHTML={{ __html: snippet }}></p>
          </a>
        )
      })}
    </>
  )
}

export default Article
