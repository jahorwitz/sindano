import styled from 'styled-components';
import { data } from '../utils/data';
import TeamMember from './TeamMember';

/**
 * The Team Component
 * @author [Sam](https://github.com/Samm96)
 *
 * The Sindano Team
 */

const Container = styled.div`
    margin: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 90px 100px;
    background-color: transparent;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 95px 100px;
    }

    @media (max-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 40px 11px;
    }
`;

const Team = () => {
  return (
    <Container>
      {data.team.map((person, index) => (
        <TeamMember
          key={index}
          photo={person.image}
          name={person.name}
          pronouns={person.pronouns}
          headline={person.title}
        />
      ))}
    </Container>
  );
};

export default Team;
