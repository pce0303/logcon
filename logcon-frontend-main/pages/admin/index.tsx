import { authInstance } from "@/api";
import Content from "@/components/Content";
import Link from "next/link";
import { useMemo } from "react";
import styled from "styled-components";

export default function Admin() {
  const menuList = useMemo(
    () => [
      {
        name: "Challenge",
        path: "/admin/challenge",
      },
      {
        name: "Notice",
        path: "/admin/notice",
      },
    ],
    []
  );

  return (
    <>
      <Content.Container>
        <Wrapper>
          <Title>관리자 페이지</Title>
          <Row>
            {menuList.map((menu, index) => (
              <ButtonLink key={index} href={menu.path}>
                {menu.name}
              </ButtonLink>
            ))}

            <Button
              onClick={() => {
                authInstance().get("/challenge/sync");
              }}
            >
              점수 동기화
            </Button>
          </Row>
        </Wrapper>
      </Content.Container>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  padding: 48px 0;
`;

const Title = styled.h1`
  color: #f2f2f2;
  font-family: Interop;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 42px */
  letter-spacing: -0.56px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const ButtonLink = styled(Link)`
  border-radius: 2px;
  background: #3a4542;
  flex: 1;
  color: #f2f2f2;

  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.32px;

  padding: 12px 16px;
  border-radius: 8px;
`;

const Button = styled.button`
  border-radius: 2px;
  background: #3a4542;
  flex: 1;
  color: #f2f2f2;

  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.32px;

  padding: 12px 16px;
  border-radius: 8px;
`;
