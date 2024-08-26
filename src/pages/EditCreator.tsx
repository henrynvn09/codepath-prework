import React, { useEffect, useState } from "react"

import "../styles/AddCreator.css"

import { supabase } from "../client"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

interface CreatorForm {
  name: string
  image: string
  description: string
  youtube: string
  twitter: string
  instagram: string
}

function EditCreator() {
  const navigate = useNavigate()
  const [form, setForm] = useState<CreatorForm>({
    name: "",
    image: "",
    description: "",
    youtube: "",
    twitter: "",
    instagram: "",
  })
  const { id } = useParams()
  useEffect(() => {
    supabase
      .from("creators")
      .select("*")
      .eq("id", id)
      .then((response) => {
        console.log(response)
        setForm(response.data[0])
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., send data to an API)
    console.log(form)
    supabase
      .from("creators")
      .upsert([form])
      .then((response) => {
        console.log(response)
        navigate("/")
      })
  }

  return (
    <div id="AddEditCreator">
      <form id="addCreatorForm" onSubmit={handleSubmit}>
        <div>Name</div>
        <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} />

        <div>
          Image
          <p>Provide a link to an image of your creator. Be sure to include the http://</p>
        </div>
        <input type="text" id="image" name="image" required value={form.image} onChange={handleChange} />

        <div>
          Description
          <p>Provide a description of the creator. Who are they? What makes them interesting?</p>
        </div>
        <textarea name="description" rows={3} cols={50} id="description" required value={form.description} onChange={handleChange} />
        <h3 id="header">Social Media Links</h3>
        <p>Provide at least one of the creator's social media links.</p>
        <div>
          <span className="fa-brands fa-youtube" aria-hidden="true"></span>
          YouTube
          <p>The creator's YouTube handle (without the @)</p>
        </div>
        <input type="text" id="youtube" name="youtube" value={form.youtube} onChange={handleChange} />
        <div>
          <span className="fa-brands fa-twitter" aria-hidden="true"></span>
          Twitter
          <p>The creator's Twitter handle (without the @)</p>
        </div>
        <input type="text" id="twitter" name="twitter" value={form.twitter} onChange={handleChange} />
        <div>
          <span className="fa-brands fa-instagram" aria-hidden="true"></span>
          Instagram
          <p>The creator's Instagram handle (without the @)</p>
        </div>
        <input type="text" id="instagram" name="instagram" value={form.instagram} onChange={handleChange} />
        <button id="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditCreator
