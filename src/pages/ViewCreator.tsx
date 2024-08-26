import { useEffect, useState } from "react"
import { supabase } from "../client"
import { useNavigate, useParams } from "react-router-dom"
import "../styles/ViewCreator.css"

export default function ViewCreator() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [creator, setCreator] = useState({
    name: "",
    image: "",
    description: "",
    youtube: "",
    twitter: "",
    instagram: "",
  })

  useEffect(() => {
    supabase
      .from("creators")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data, error }) => {
        if (error) {
          console.error(error)
          return
        }

        if (data) {
          setCreator(data)
        }
      })
  }, [id])

  if (!creator) {
    return <div>Loading...</div>
  }

  const deleteHandler = async () => {
    const { error } = await supabase.from("creators").delete().eq("id", id)
    if (error) {
      console.error("Error deleting creator:", error)
      return
    }

    navigate("/")
  }

  return (
    <>
      <div id="ViewCreator">
        <section className="creator-image">
          <div className="image-container" style={{ backgroundImage: `url(${creator.image})` }}></div>
        </section>
        <section className="creator-info">
          <h1>{creator.name}</h1>
          <p className="creator-description">{creator.description}</p>

          {creator.youtube && (
            <button className="socials" onClick={() => window.open(`https://youtube.com/${creator.youtube}`)}>
              <span className="fa-brands fa-youtube" aria-hidden="true"></span>@{creator.youtube}
            </button>
          )}
          {creator.twitter && (
            <button className="socials" onClick={() => window.open(`https://twitter.com/${creator.twitter}`)}>
              <span className="fa-brands fa-twitter" aria-hidden="true"></span>@{creator.twitter}
            </button>
          )}
          {creator.instagram && (
            <button className="socials" onClick={() => window.open(`https://instagram.com/${creator.instagram}`)}>
              <span className="fa-brands fa-instagram" aria-hidden="true"></span>@{creator.instagram}
            </button>
          )}
        </section>
        <div id="back-edit-container">
          <button className="navigate-button edit-button" onClick={() => navigate(`/edit/${id}`)}>
            EDIT
          </button>
          <button className="navigate-button delete-button" onClick={deleteHandler}>
            DELETE
          </button>
        </div>
      </div>
    </>
  )
}
