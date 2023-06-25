import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50px 200px 200px 1fr;
  align-items: center;
`;
const ani = keyframes`
 0% { transform: translateY(-20px) }
 100% { transform: translateY(20px) }`;
const Img = styled.img`
  animation: ${ani} ${(props) => 1 / Math.pow(props.sps, 1.2)}s linear infinite
    alternate;
  // linear
`;

let data =
  `6497f7e76cb81cc835a12d10,18239,2931579,Chotpisit Adunsehawat,6.2215618272610085
6497f8f26cb81cc835a4a497,2437,456811,Katanyoo Thanoosin,5.3348102388077345
6497f8046cb81cc835a18c4a,2213,436603,Pongwiwat Limpasuthum,5.068677952281592
6497fd426cb81cc835b40cfc,1111,234371,Natnicha Onporatn,4.740347568598504
6497f7c26cb81cc835a0b19e,2324,491748,Narongrit Somjaiuraikul,4.725997868827123
6497f9b96cb81cc835a75a49,979,211078,Panyawut Piyasirinanan,4.6380958697732595
6497f9456cb81cc835a5c3fd,6264,1356342,Manus Techaphattrapron,4.6183042330031805
6497fc0a6cb81cc835b00bc8,3505,759771,Worranittha Hukhan,4.613232144948939
6497f8236cb81cc835a1ef0f,11428,2499282,Pontakorn Paesaeng,4.572513225798449
6497f8176cb81cc835a1c69c,821,190133,Phiravit Imsuchart,4.3180300105715475`
    .split("\n")
    .map((x) => {
      const d = x.split(",");
      return {
        name: d[3],
        sps: d[4],
        count: parseInt(d[1]),
      };
    });

data = data.reverse();

let MAX = 0;
data.forEach((d) => {
  if (d.count > MAX) {
    MAX = d.count;
  }
});

const Count = (props) => {
  return (
    <Container>
      <h1>#{props.id}</h1>
      <div>{props.data.name}</div>
      <div>
        <Img
          sps={props.data.sps}
          width="150px"
          src="https://static.vecteezy.com/system/resources/previews/010/870/431/original/hand-holding-smart-phone-with-white-blank-screen-isolated-png.png"
        />
      </div>
      <div>{props.data.sps} shake per sec</div>
    </Container>
  );
};

export default function MaxSpeed() {
  return (
    <div>
      <h1>Top 10 Max Speed</h1>
      <br />

      {data.map((d, i) => {
        return <Count id={i + 1} data={d} />;
      })}
    </div>
  );
}
