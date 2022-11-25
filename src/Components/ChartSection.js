import styled from 'styled-components';
import BarChart from './BarChart';
import PrimaryButton from './PrimaryButton';
import { motion } from 'framer-motion';
import { sectionVariants } from '../utils/animationVariants';
import { useContext } from 'react';
import { ModalContext } from './App'

const ChartSectionContainer = styled.section`
  width: 100%;
  display: flex;
  margin-bottom: 160px;
`;

const RequestDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: center;
  margin-left: 40px;
  position: relative;
`;

const RequestTitle = styled.h2`
  width: 455px;
  font-family: ${(props) => props.theme.fonts.text.font_family[0]};
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
`;

const RightContainer = styled.div`
  position: relative;
`;

function ChartSection() {

  const { openModal } = useContext(ModalContext);

  return (
    <ChartSectionContainer
      as={motion.section}
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <RightContainer>
        <BarChart />
      </RightContainer>
      <RequestDiv>
        <RequestTitle>
          Want the LGBTQ+ Mental Healthcare Insights That Matter?
        </RequestTitle>
        <PrimaryButton onClick={openModal} label="Request a call"/> 
  

      </RequestDiv>
    </ChartSectionContainer>
  );
}

export default ChartSection;
