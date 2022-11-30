import "./Guide.css";
import ReactPlayer from "react-player";
import styled from "styled-components";

export function Guide() {
  const PlayerWrapper = styled.div`
    position: relative;
    padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */;
    .react-player {
      position: absolute;
      top: 0;
      left: 0;
    }
    }
  `;
  return (
    <PlayerWrapper>
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=qSnsHO5v2GY&ab_channel=%EC%9D%B4%EB%AF%BC%EC%84%9D"
        width="100%"
        height="100vh"
        muted={false}
        playing={true}
        loop={true}
      />
    </PlayerWrapper>
  );
}
