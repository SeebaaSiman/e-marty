import { styled } from "styled-components";
import { BoxShadow } from "@/ui/styles";
import { device } from "../../StylesApp";

//* CreditCard
export const CardContainer = styled.div`
  perspective: 1000px;
  background-color: transparent;
  width: 300px;
  height: 200px;
  color: #f1f1f1;
  position: relative;
  @media ${device.sm}{
    width: 380px;
  height: 220px;
  }
  @media ${device.md}{
    width: 380px;
  height: 220px;
}
  @media ${device.lg}{}
  @media ${device.xl}{}
`;
export const Card = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) => props.isHover ? `rotateY(180deg)` : `rotateY(0deg)`};
  /* &:hover {
    transform: rotateY(180deg);
  } */
`;

const CardStyle = styled.div`
  position: absolute;
  background-color: #000000;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  backface-visibility: hidden;
  ${BoxShadow}
`;
//*Front
export const CardFrontContainer = styled(CardStyle)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding:1rem;
  font-size: 16px;
  color: #f1f1f1;
overflow:hidden;
span{
overflow:hidden;
display: flex;
align-items: center;
/* justify-content: space-around; */
height: 100%;
&:nth-child(1)
{
  margin-right: auto;
}
    &:nth-child(5){
      margin-left:auto;   }
    }
p{
    width:70%;
     margin-top: 4px;
     border: solid 1px #f1f1f1;
     padding:4px;
     border-radius: 6px;
     text-align: center;
}

    `;
export const Header = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
overflow:hidden;
justify-content: space-between;
overflow:hidden;
span{
  display: flex;
  overflow:hidden;
  align-items: center;
  justify-content: center;
}
div{
  margin-top: 8px;
  width:50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow:hidden;
}
`
export const Title = styled.span`
font-size:10px;
color:#888888;
margin-left: auto;
`

//*Back
export const CardBackContainer = styled(CardStyle)`
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #f1f1f1;
  span{
   display: flex;
   flex-direction: row;
   align-items: center;
   gap:1rem;
  }
`;
export const Trip = styled.div`
width:100%;
height:2rem;
background: repeating-linear-gradient(
 45deg,
 #303030,
 #303030 10px,
 #202020 10px,
 #202020 20px
 );
 `
export const TripBg = styled.div`
width:180px;
height:1rem;
background-color: #f1f1f1;
border-radius: 16px;
`
export const TripBg2 = styled(TripBg)`
width:60px;
color:#000;
text-align: center;
`