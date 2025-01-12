import Content from "@/components/Content";
import Modal from "@/components/Modal";
import { useChallenges } from "@/hooks";
import {
  useCategory,
  useCreateCategory,
  useDeleteCategory,
} from "@/hooks/category";
import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

export default function AdminChallenge() {
  const { data: challenges } = useChallenges();
  const [editModal, setEditModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [selected, setSelected] = useState("");

  const { data: categories } = useCategory();
  const { mutateAsync: deleteCategory } = useDeleteCategory();
  const { mutateAsync: createCategory } = useCreateCategory();

  return (
    <>
      <Content.Container>
        <Wrapper>
          <TitleRow>
            <Title>카테고리 관리자</Title>
            <SubmitButton
              onClick={() =>
                Swal.fire({
                  title: "카테고리 추가",
                  input: "text",
                }).then((result) => {
                  if (result.isConfirmed) {
                    createCategory(result.value);
                  }
                })
              }
            >
              카테고리 추가
            </SubmitButton>
          </TitleRow>
          <Row>
            {categories?.map((category) => (
              <Button
                key={category.id}
                onClick={() => {
                  Swal.fire({
                    title: "카테고리 삭제",
                    text: "정말 삭제하시겠습니까?",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      deleteCategory(category.id);
                    }
                  });
                }}
              >
                {category.name}
              </Button>
            ))}
          </Row>
          <TitleRow>
            <Title>Challenge 관리자</Title>
            <SubmitButton onClick={() => setCreateModal(true)}>
              문제 추가
            </SubmitButton>
          </TitleRow>
          <Row>
            {challenges?.map((challenge) => (
              <Button
                onClick={() => {
                  setSelected(challenge.id);
                  setEditModal(true);
                }}
                key={challenge?.id}
              >
                {challenge?.name}
              </Button>
            ))}
          </Row>
        </Wrapper>
      </Content.Container>
      {createModal && (
        <Modal.Admin.Challenge close={() => setCreateModal(false)} />
      )}
      {editModal && (
        <Modal.Admin.ChallengeEdit
          close={() => setEditModal(false)}
          id={selected}
        />
      )}
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  background-color: #3a4542;
  border: none;
  border-radius: 8px;
  padding: 12px 14px;

  font-size: 16px;
  color: white;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 40px;

  background: #2e312d;
  border-radius: 12px;
  border: 1px solid var(--2024-logcon-30, #697565);

  color: #f2f2f2;
  font-family: Interop;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;
`;
