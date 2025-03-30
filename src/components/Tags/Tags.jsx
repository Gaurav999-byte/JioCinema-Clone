import { useState } from 'react'
import styles from './tags.module.css'

const Tags = () => {

      let [tags,setTags]=useState([
            "For You",
            "Bollywood",
            "Hollywood",
            "Web Series",
            "Action",
            "Comedy",
            "Drama",
            "Thriller",
            "Romance",
            "Animated",
            "Horror",
            "Sci-Fi",
            "Documentary",
            "Crime",
            "Mystery"
      ])

  return (
   <>
   <div className={styles.tags}>
      {
            tags.map((tag)=>{
                  return <p className={styles.tag}>{tag}</p>
            })
      }
   </div>
   </>
  )
}

export default Tags