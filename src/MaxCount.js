import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50px 200px 1fr;
  align-items: center;
  margin-top: -30px;
`;

const shuffle = (array) =>
  array
    // Generate a random number for each elements
    .map((value) => [Math.random(), value])

    // Sort using each element random number
    .sort(([a], [b]) => a - b)

    // Return back to an array of values
    .map((entry) => entry[1]);

let data =
  `6497f7b76cb81cc835a089d1,32106,8245543,ณัฏฐพล ไพรรื่นรมย์,3.8937399271339683
6497f7e76cb81cc835a12d10,27724,4353495,Chotpisit Adunsehawat,6.368216800524636
6497f7c26cb81cc835a0ae80,27327,341645,Tanakorn Chotayakrit,79.9865357315342
6497f8236cb81cc835a1ef0f,12031,2673315,Pontakorn Paesaeng,4.500404927963969
6497f8136cb81cc835a1ba97,11735,2728824,Sirati Hirunthanee,4.300387273052421
6497f8456cb81cc835a25bae,11690,3199850,อภิเดช เตี่ยไพบูลย์,3.6532962482616376
6497e5006cb81cc835619845,11340,4502944,Wichayada Chamnansil,2.5183524378717568
6497f7b46cb81cc835a08219,10359,3074826,Bunyariit Jerdrujikul,3.368971122268382
6497f7af6cb81cc835a07053,10193,3153921,Phatthanakon Takrutthong,3.2318501319468687
6497f87d6cb81cc835a3112d,9272,2768857,Thanapat Dinakara Na Ayudthaya,3.348674200220524`
    .split("\n")
    .map((x) => {
      const d = x.split(",");
      return {
        name: d[3],
        count: parseInt(d[1]),
      };
    });

data = shuffle(data);

let MAX = 0;
data.forEach((d) => {
  if (d.count > MAX) {
    MAX = d.count;
  }
});

const Lord = styled.div`
  width: ${(props) => props.percent}%;
  height: 40px;
  background-color: red;
  color: white;
  font-weight: bold;
  font-size: 2em;
`;

const Count = (props) => {
  const [progress, setProgress] = useState(0);
  const percent = (props.data.count / MAX) * 100;
  const [done, setDone] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setProgress((prev) => {
        if (prev < percent) {
          return prev + 0.05;
        }
        setDone(true);
        return prev;
      });
    }, 10);
  }, []);

  return (
    <Container>
      <h1>#{props.id}</h1>
      <div>{props.data.name}</div>
      <div>
        <Lord percent={progress}>{done && <div>{props.data.count}</div>}</Lord>
      </div>
    </Container>
  );
};

export default function MaxCount() {
  return (
    <div>
      <h1>Top 10 Most Shake</h1>
      <br />

      {data.map((d, i) => {
        return <Count id={i + 1} data={d} />;
      })}
    </div>
  );
}
