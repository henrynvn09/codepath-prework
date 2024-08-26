import React, { useEffect, useState } from "react"
import Creator from "../components/Creator"
import "../styles/ShowCreators.css"
import { supabase } from "../client"

export default function ShowCreators() {
  const [creators, setCreators] = useState([])
  useEffect(() => {
    supabase
      .from("creators")
      .select("*")
      .then((response) => {
        console.log(response)
        setCreators(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const creatorElements = creators.map((creator) => {
    return <Creator id={creator.id} name={creator.name} description={creator.description} image={creator.image} youtube={creator.youtube} twitter={creator.twitter} instagram={creator.instagram} />
  })

  return <div className="flex-box">{creatorElements}</div>
}
