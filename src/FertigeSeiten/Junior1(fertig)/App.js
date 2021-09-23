import './App.css';
import FifthComponent from './FifthComponent';
import TitleComponent from './FirstComponent';
import ForthComponent from './ForthComponent';
import {
  FifthContainer,
  FirstContainer,
  ForthContainer,
  MainContainer,
  SecondContainer,
  ThirdContainer,
} from './MetaComponents/MetaComponents';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';

export default function Blogr() {
  return (
    <div>
      <MainContainer>
        <FirstContainer>
          <TitleComponent />
        </FirstContainer>
        <SecondContainer>
          <SecondComponent />
        </SecondContainer>
        <ThirdContainer>
          <ThirdComponent />
        </ThirdContainer>
        <ForthContainer>
          <ForthComponent />
        </ForthContainer>
        <FifthContainer>
          <FifthComponent />
        </FifthContainer>
      </MainContainer>
    </div>
  );
}
