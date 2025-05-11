// src/pages/Formulario.js
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Input,
  Label,
  Row,
  Section,
  Select,
  Title,
  Wrapper,
  Div,
  SeparateButton,
} from "./styledTicket";

import { useNavigate } from "react-router-dom";
import { paths } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { ProgressBar } from "../../Components/ProcessBar";
import { Loading } from "../../Components";
import apiConnection from "../../Services/apiConnection";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaCreateTicket } from "./schemaTicket";
import { slideVariants } from "./slides";
import { formatedCep, formatedCpf } from "../../Utils";

export const Ticket = () => {
  const navigate = useNavigate();
  const [etapa, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [tutors, setTutors] = useState([]);
  const [formData, setFormData] = useState({});
  const [gifts, setGifts] = useState([]);

  const nextStep = () => setStep((prev) => prev + 1);
  const backStep = () => setStep((prev) => prev - 1);

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await apiConnection.get("/tutors");

        setTutors(data.tutors || data || []);
      } catch (error) {
        console.error("Erro ao carregar os tutores:", error);
      }

      try {
        const { data } = await apiConnection.get("/gifts");
        setGifts(data);
      } catch (error) {
        console.error("Erro ao carregar os brindes do estoque:", error);
      }
    }

    loadData();
  }, [refresh]);

  const onSubmit = async (ticketData) => {
    const confirmed = confirm("Tem certeza que deseja enviar os dados?");
    if (!confirmed) return;

    setIsLoading(true);

    try {
      await toast.promise(
        apiConnection.post(`/tickets`, {
          protocol_Id: ticketData.protocol_Id,
          gift_id: ticketData.gifts_id,
          quantity: ticketData.quantity,
          packageBox: {
            size: ticketData.packageBox.size,
            quantity: ticketData.packageBox.quantity,
          },
        }),

        {
          pending: "Criando ticket, aguarde...",
          success: "Ticket criado com sucesso!",
          error: "Erro ao criar ticket, tente novamente mais tarde",
        }
      );

      setTimeout(() => {
        setIsLoading(false);
        navigate(paths.ListTicket);
      }, 2000);
    } catch (error) {
      console.error("Erro ao enviar dados pelo onSubmit do ticket", error);
      setIsLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schemaCreateTicket),
  });

  if (isLoading)
    return <Loading message="Indo para lista de envios, aguarde..." />;

  return (
    <AnimatePresence mode="wait">
      <Wrapper>
        <Container>
          <div style={{ marginBottom: "2rem" }}>
            <ProgressBar etapa={etapa} totalEtapas={4} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {etapa === 1 && (
              <motion.div key="etapa1" {...slideVariants}>
                <Section>
                  <Div>
                    <Label flex="2">
                      n° do Ticket
                      <Input
                        type="number"
                        {...register("protocol_Id")}
                        required
                      />
                    </Label>
                  </Div>

                  <SeparateButton>
                    <Button
                      type="button"
                      onClick={() => {
                        const tutor = tutors.find(
                          (tutorId) =>
                            tutorId.protocol_Id === Number(watch("protocol_Id"))
                        );

                        if (tutor) {
                          setFormData(tutor);
                          nextStep();
                        } else {
                          toast.error("Protocolo não encontrado!");
                        }
                      }}
                    >
                      Próximo
                    </Button>
                  </SeparateButton>
                </Section>
              </motion.div>
            )}
            {etapa === 2 && (
              <motion.div key="etapa2" {...slideVariants}>
                <Section>
                  <Title>Dados do Tutor</Title>

                  <Row>
                    <Label flex="2">
                      Nome
                      <Input type="text" value={formData.name || ""} readOnly />
                    </Label>
                    <Label>
                      CPF
                      <Input
                        type="text"
                        value={formatedCpf(formData.cpf)}
                        readOnly
                      />
                    </Label>
                  </Row>
                  <Row>
                    <Label>
                      E-mail
                      <Input
                        type="email"
                        value={formData.email || ""}
                        readOnly
                      />
                    </Label>
                    <Label>
                      Data de nascimento
                      <Input
                        type="date"
                        value={formData.date ? formData.date.slice(0, 10) : ""}
                        readOnly
                      />
                    </Label>
                  </Row>
                  <Row>
                    <Label flex="2">
                      Endereço
                      <Input
                        type="text"
                        value={formData.address?.logradouro || ""}
                        readOnly
                      />
                    </Label>
                    <Label flex="2">
                      cep
                      <Input
                        type="text"
                        value={formatedCep(formData.address?.cep)}
                        readOnly
                      />
                    </Label>
                  </Row>
                  <SeparateButton>
                    <Button type="button" onClick={backStep}>
                      Voltar
                    </Button>
                    <Button type="button" onClick={nextStep}>
                      Próximo
                    </Button>
                  </SeparateButton>
                </Section>
              </motion.div>
            )}

            {etapa === 3 && (
              <motion.div key="etapa3" {...slideVariants}>
                <Section>
                  <Title>Dados do Pet</Title>

                  <Row>
                    <Label flex="2">
                      Nome do pet
                      <Input
                        type="text"
                        value={formData.data_animal?.name || ""}
                        readOnly
                      />
                    </Label>
                    <Label>
                      Idade
                      <Input
                        type="text"
                        value={formData.data_animal?.age || ""}
                        readOnly
                      />
                    </Label>
                    <Label>
                      Sexo
                      <Input
                        type="text"
                        value={formData.data_animal?.sex || ""}
                        readOnly
                      />
                    </Label>
                    <Label>
                      Raça
                      <Input
                        type="text"
                        value={formData.data_animal?.race || ""}
                        readOnly
                      />
                    </Label>
                  </Row>
                  <Row>
                    <Label flex="1">
                      Produto que consome atualmente
                      <Input
                        type="text"
                        value={formData.data_animal?.product_consumer || ""}
                        readOnly
                      />
                    </Label>
                    <Label flex="1">
                      Restrição Alimentar
                      <Input
                        type="text"
                        value={formData.data_animal?.dietary_restriction || ""}
                        readOnly
                      />
                    </Label>
                  </Row>
                  <SeparateButton>
                    <Button type="button" onClick={backStep}>
                      Voltar
                    </Button>
                    <Button type="button" onClick={nextStep}>
                      Próximo
                    </Button>
                  </SeparateButton>
                </Section>
              </motion.div>
            )}

            {etapa === 4 && (
              <motion.div key="etapa4" {...slideVariants}>
                <Section>
                  <Title>Brinde</Title>
                  <Row>
                    <Label flex="2">
                      Item
                      <Select {...register("gifts_id")}>
                        <option value="" disabled hidden>
                          Selecione
                        </option>
                        {gifts.map((gift) => (
                          <option key={gift._id} value={gift._id}>
                            {gift.name}
                          </option>
                        ))}
                      </Select>
                    </Label>

                    <Label>
                      Quantidade:
                      <Input type="text" {...register("quantity")} />
                    </Label>
                  </Row>

                  <Title>Pacote</Title>

                  <Label>
                    Tamanho
                    <Select {...register("packageBox.size")}>
                      <option value="" disabled hidden>
                        Selecione
                      </option>
                      <option value="Unidade">Unidade</option>
                      <option value="Padrão">Padrão</option>
                    </Select>
                  </Label>

                  <SeparateButton>
                    <Button type="button" onClick={backStep}>
                      Voltar
                    </Button>
                    <Button type="submit">Enviar</Button>
                  </SeparateButton>
                </Section>
              </motion.div>
            )}
          </form>
        </Container>
      </Wrapper>
    </AnimatePresence>
  );
};
