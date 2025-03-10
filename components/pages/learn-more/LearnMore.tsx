import styled from "styled-components";
import Product from "./Product";

function LearnMore() {
  return (
    <Wrapper id={"learn-more"}>
      <Content>
        <Product title={"Recycled PET"} description={"A very cool product description that you guys need to decide on."} image={"/img/learn-more/product.jpg"} />
        <Product title={"Recycled PET"} description={"A very cool product description that you guys need to decide on."} image={"/img/learn-more/product.jpg"} />
        <Product title={"Recycled PET"} description={"A very cool product description that you guys need to decide on."} image={"/img/learn-more/product.jpg"} />
      </Content>
      <Wave2 src="/img/learn-more/wave2.svg" alt="" />
    </Wrapper>
  );
}

export default LearnMore;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(90deg, #6ac65e -8.6%, #afd986 107.17%);
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  max-width: 1280px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Wave2 = styled.img`
  width: 100%;
`;
