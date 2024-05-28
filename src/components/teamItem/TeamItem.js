import "./teamItem.sass"

export default function TeamItem({id, name, profession, src }) {
  return (
    <div key={id} className='team-item'>
        <div className='team-item__img-div'>
            <img src={src} alt='фото'/>
        </div>
        <div className='team-item__descr'>
            <h3>{name}</h3>
            <p>{profession}</p>
        </div>
    </div>
  )
}
