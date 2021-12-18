import data from '../../places-data.json'
import {useParams} from 'react-router-dom'

const PLACESDetails=()=> {
  const { id } =useParams()
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
      </div>

      <div>
        <h1>{ title }</h1>
        <p>{ desc }</p>
        <p>{ hours }</p>
        <p>{ features }</p>
        <p>{ geo.lat } { geo.lon }</p>
      </div>

    </div>
  )
}

export default PLACESDetails