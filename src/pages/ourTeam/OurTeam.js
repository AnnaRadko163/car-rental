import HeaderPages from '../../components/headerPages/HeaderPages'
import listTeam from './listTeam.js'
import TeamItem from '../../components/teamItem/TeamItem'

import "./outTeam.sass"

export default function OurTeam(props) {
  return (
    <section className='team-section'>
      <HeaderPages title={props.title}/>
      <div className='container'>
        <div className='team'>
          <div className='team__wrapper'>
            {listTeam.map(e => (<TeamItem key={e.id} id={e.id} name={e.name} profession={e.profession} src={e.src}/>))}
          </div>
        </div>
      </div>
    </section>

  )
}


