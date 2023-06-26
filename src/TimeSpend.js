import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50px 200px 250px 1fr;
  align-items: center;
`;
const ani = keyframes`
 0% { transform: translateY(-20px) }
 100% { transform: translateY(20px) }`;
const Img = styled.img`
  /* animation: ${ani} ${(props) =>
    1 / Math.pow(props.sps, 1.2)}s linear infinite
    alternate; */
  // linear
`;

let data =
  `6497f7b76cb81cc835a089d1,26242,6953797,ณัฏฐพล ไพรรื่นรมย์,3.773765613232598
  6497e5006cb81cc835619845,11340,4502944,Wichayada Chamnansil,2.5183524378717568
  6497f8456cb81cc835a25bae,11690,3199850,อภิเดช เตี่ยไพบูลย์,3.6532962482616376
  6497f7b46cb81cc835a08219,10793,3193378,Bunyariit Jerdrujikul,3.3798065872565037
  6497f7e76cb81cc835a12d10,18239,2931579,Chotpisit Adunsehawat,6.2215618272610085
  6497e4766cb81cc8355fbee9,8640,2874864,Chanatpakorn Sirintronsopon,3.005359557878216
  6497f8136cb81cc835a1ba97,11735,2728824,Sirati Hirunthanee,4.300387273052421
  6497f7af6cb81cc835a07053,8224,2528281,Phatthanakon Takrutthong,3.2528029914396384
  6497f87d6cb81cc835a3112d,7770,2503889,Thanapat Dinakara Na Ayudthaya,3.103172704540816
  6497f8236cb81cc835a1ef0f,11428,2499282,Pontakorn Paesaeng,4.572513225798449`
    .split("\n")
    .map((x) => {
      const d = x.split(",");
      return {
        name: d[3],
        sps: d[4],
        time: d[2],
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

const imgs = [
  "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422.jpg",
  "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422.jpg",
  "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422.jpg",

  "https://domf5oio6qrcr.cloudfront.net/medialibrary/13687/cf35991b-37dd-4da3-9c4d-27569f15a2dd.jpg",
  "https://domf5oio6qrcr.cloudfront.net/medialibrary/13687/cf35991b-37dd-4da3-9c4d-27569f15a2dd.jpg",
  "https://domf5oio6qrcr.cloudfront.net/medialibrary/13687/cf35991b-37dd-4da3-9c4d-27569f15a2dd.jpg",

  "https://i.gifer.com/2xT2.gif",
  "https://i.ytimg.com/vi/EhQohMNd9BQ/maxresdefault.jpg",
  "https://as1.ftcdn.net/v2/jpg/02/10/42/90/1000_F_210429056_2PAIo0czXQLXVeMlRIWK3Pa6F4IKobZh.jpg",

  "https://storage-wp.thaipost.net/2022/07/03-2.jpg",
];

const Count = (props) => {
  return (
    <Container>
      <h1>#{props.id}</h1>
      <div>{props.data.name}</div>
      <div>
        <Img sps={props.data.sps} width="250px" src={imgs[props.id - 1]} />
      </div>
      <div style={{ fontSize: 24 }}>
        {props.data.time / 1000} seconds (
        {Math.round(props.data.time / 1000 / 60, 2)} mins)
      </div>
    </Container>
  );
};

export default function TimeSpend() {
  return (
    <div>
      <h1>Top 10 Time Spent Shaking</h1>
      <br />

      {data.map((d, i) => {
        return <Count id={i + 1} data={d} />;
      })}
    </div>
  );
}
