import { useStore } from '../data/Store'

const TeamMember = ({ name }) => {
  return(
    <div className="TeamMember Card">
      { name }
    </div>
  )
}

const Team = () => {
  const team = useStore('team')

  return (
    <div className="Team">
      <h3 className="header">Team</h3>
      <div className="Team__Members">
        { team.map(({ id, name }) => <TeamMember key={`team-member-${id}`} name={name} />) }
      </div>
    </div>
  )
}

export default Team;