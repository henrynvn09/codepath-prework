import React from "react"
import "../styles/Creator.css"

export default function Creator({ id, name, description, image, youtube, twitter, instagram }) {
  return (
    <article className="creator">
      <div className="img-container" style={{ backgroundImage: `url(${image})` }}></div>

      <div className="grid">
        <div className="card-header-name">
          <h3>{name}</h3>
        </div>
        <div className="card-header-edit">
          <a href={`/${id}`}>
            <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
          </a>
          <a href={`/edit/${id}`}>
            <i className="fa-solid fa-pen" aria-hidden="true"></i>
          </a>
        </div>
        <div>
          {youtube && (
            <a href={`https://youtube.com/${youtube}`}>
              <span className="fa-brands fa-youtube" aria-hidden="true"></span>
            </a>
          )}
          {twitter && (
            <a href={`https://twitter.com/${twitter}`}>
              <span className="fa-brands fa-twitter" aria-hidden="true"></span>
            </a>
          )}
          {instagram && (
            <a href={`https://instagram.com/${instagram}`}>
              <span className="fa-brands fa-instagram" aria-hidden="true"></span>
            </a>
          )}
        </div>
        <div></div>
        <div className="card-description" style={{ gridColumn: "span 2" }}>
          <p>{description}</p>
        </div>
      </div>
    </article>
  )
}
