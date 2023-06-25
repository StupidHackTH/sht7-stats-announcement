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

let data = `6497f7b76cb81cc835a089d1,17648,4370641,ณัฏฐพล ไพรรื่นรมย์
6497f8236cb81cc835a1ef0f,10432,2301787,Pontakorn Paesaeng
6497f7b46cb81cc835a08219,10236,3066455,Bunyariit Jerdrujikul
6497f8136cb81cc835a1ba97,8827,2055551,Sirati Hirunthanee
6497f7af6cb81cc835a07053,8224,2528281,Phatthanakon Takrutthong
6497f8456cb81cc835a25bae,8201,2300380,อภิเดช เตี่ยไพบูลย์
6497e5006cb81cc835619845,8145,3485410,Wichayada Chamnansil
6497e4766cb81cc8355fbee9,7742,2674456,Chanatpakorn Sirintronsopon
6473a8841cbfde077f2bdc55,7231,1830203,ณัฐพัชร์ พงษ์ธัญญวิชัย
6497f9eb6cb81cc835a80029,6869,1884496,Gun Pattanaprateepkul`
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
