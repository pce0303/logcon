import Swal from "sweetalert2";

import Content from "@/components/Content";
import Modal from "@/components/Modal";
import { useDeleteNotice, useNotice } from "@/hooks/notice";
import { useState } from "react";
import styled from "styled-components";

export default function AdminNotice() {
  const { data: notices } = useNotice();
  const [modal, setModal] = useState(false);

  const { mutateAsync } = useDeleteNotice();

  return (
    <>
      <Content.Container>
        <Wrapper>
          <TitleRow>
            <Title>Notice 관리자</Title>
            <Button onClick={() => setModal(true)}>공지 추가</Button>
          </TitleRow>
          <Row>
            {notices?.map((notice) => (
              <ContentBox
                key={notice.id}
                onClick={() =>
                  Swal.fire({
                    title: "공지사항 삭제",
                    text: "정말 삭제하시겠습니까?",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      mutateAsync(notice.id);
                    }
                  })
                }
              >
                <ContentTitle>{notice.title}</ContentTitle>
                <ContentDetail>{notice.description}</ContentDetail>
              </ContentBox>
            ))}
          </Row>
        </Wrapper>
      </Content.Container>
      {modal && <Modal.Admin.Notice close={() => setModal(false)} />}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 24px;
  padding: 48px 0;
  width: 100%;
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

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  color: #f2f2f2;
  font-family: Interop;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
  letter-spacing: -0.36px;
  background-color: #3a4542;
  border-radius: 12px;
  border: none;
  padding: 12px 18px;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const ContentBox = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 12px;
  width: 180px;
  padding: 12px 18px;
  background-color: #2e312d;
  border-radius: 12px;
  border: 1px solid var(--2024-logcon-30, #697565);
  cursor: pointer;
`;

const ContentTitle = styled.h3`
  color: #f2f2f2;
  font-family: Interop;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
  letter-spacing: -0.36px;
`;

const ContentDetail = styled.p`
  color: #f2f2f2;
  font-family: Interop;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.28px;
`;
