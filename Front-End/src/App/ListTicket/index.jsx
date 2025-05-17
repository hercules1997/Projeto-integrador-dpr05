import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  Th,
  Td,
  Wrapper,
  Tr,
  SearchInput,
  DetailButton,
  ModalContent,
  ModalOverlay,
  FinalyButton,
} from "./styledListTicket";
import { Pagination } from "../../Components/Pagination";
import apiConnection from "../../Services/apiConnection";
import { toast } from "react-toastify";
import { Loading } from "../../Components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DetailsList } from "../../Components/DetailsList";

const ITEMS_PER_PAGE = 7;

export const ListTicket = () => {
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput.trim());
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInput, refresh]);

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await apiConnection.get("/tickets");
        setTickets(data.tickets);
      } catch (error) {
        console.error("Erro ao carregar os tickets:", error);
        setTickets([]);
      }
    }

    loadData();
  }, [refresh]);

  const filteredTickets = debouncedSearch
    ? tickets.filter((item) => {
        const tutorName = item.tutor?.name?.toLowerCase() || "";
        return tutorName.includes(debouncedSearch.toLowerCase());
      })
    : tickets;

  const totalPages = Math.ceil(filteredTickets.length / ITEMS_PER_PAGE);
  const paginatedData = filteredTickets.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handleDetails = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleCloseModal = () => {
    setSelectedTicket(null);
  };

  const handleFinaly = async (ticket_Id) => {
    const confirmed = confirm("Tem certeza que deseja finalizar?");
    if (!confirmed) return;

    setIsLoading(false);

    try {
      await toast.promise(
        apiConnection.post(`/history/${ticket_Id}`),

        {
          pending: "Finalizando ticket, aguarde...",
          success: "Ticket finalizado com sucesso!",
          error: "Erro ao finalizar, tente novamente mais tarde",
        }
      );

      await apiConnection.delete(`/tickets/${ticket_Id}`);
      setRefresh((prev) => prev + 1);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Erro ao enviar dados pelo handleFinaly", error);
      setIsLoading(false);
    }
  };

  if (isLoading)
    return <Loading message="Indo para lista de envios, aguarde..." />;

  return (
    <Wrapper>
      <Container>
        <SearchInput
          type="text"
          placeholder="Buscar por nome do tutor"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            setPage(1);
          }}
        />
        {selectedTicket && (
          <ModalOverlay onClick={handleCloseModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <DetailsList dataDetails={selectedTicket} />

              <button onClick={handleCloseModal}>Fechar</button>
            </ModalContent>
          </ModalOverlay>
        )}

        <Table>
          <thead>
            <Tr>
              <Th></Th>
              <Th>nº Ticket</Th>
              <Th>Nome Tutor</Th>
              <Th>Data Registro</Th>
              <Th>Rastreio</Th>
              <Th></Th>
            </Tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <Td
                  colSpan="6"
                  style={{ textAlign: "center", padding: "90px" }}
                >
                  Nenhum item encontrado.
                </Td>
              </tr>
            ) : (
              <>
                {paginatedData.map((ticket) => (
                  <Tr key={ticket._id}>
                    <Td>
                      <DetailButton onClick={() => handleDetails(ticket)}>
                        <MoreVertIcon />
                      </DetailButton>
                    </Td>
                    <Td>{ticket?.tutor.protocol_Id}</Td>
                    <Td>{ticket?.tutor.name}</Td>
                    <Td>
                      {new Date(
                        ticket.date_register || ticket.tutor?.date
                      ).toLocaleString()}
                    </Td>
                    <Td>{ticket.tracking_code || "Sem código"}</Td>

                    <Td>
                      <FinalyButton onClick={() => handleFinaly(ticket._id)}>
                        Finalizar
                      </FinalyButton>
                    </Td>
                  </Tr>
                ))}
              </>
            )}
          </tbody>
        </Table>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </Container>
    </Wrapper>
  );
};
