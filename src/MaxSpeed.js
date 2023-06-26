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
  `6497f7b76cb81cc835a089d1,32106,8245543,ณัฏฐพล ไพรรื่นรมย์,3.8937399271339683
  6497e5006cb81cc835619845,11340,4502944,Wichayada Chamnansil,2.5183524378717568
  6497f7e76cb81cc835a12d10,27724,4353495,Chotpisit Adunsehawat,6.368216800524636
  6497f8456cb81cc835a25bae,11690,3199850,อภิเดช เตี่ยไพบูลย์,3.6532962482616376
  6497f7af6cb81cc835a07053,10193,3153921,Phatthanakon Takrutthong,3.2318501319468687
  6497f7b46cb81cc835a08219,10359,3074826,Bunyariit Jerdrujikul,3.368971122268382
  6497e4766cb81cc8355fbee9,9100,3065654,Chanatpakorn Sirintronsopon,2.968371512245022
  6497f8026cb81cc835a18645,8440,2781522,Watcharaporn Chathaen,3.034309992874405
  6497f87d6cb81cc835a3112d,9272,2768857,Thanapat Dinakara Na Ayudthaya,3.348674200220524
  6497f8136cb81cc835a1ba97,11735,2728824,Sirati Hirunthanee,4.300387273052421`
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
        return <Count id={10 - i} data={d} />;
      })}
    </div>
  );
}
