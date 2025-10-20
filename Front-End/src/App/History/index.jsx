import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Table,
  Th,
  Td,
  Wrapper,
  Tr,
  SearchInput,
} from "./styledHistory";
import { Pagination } from "../../Components/Pagination";
import apiConnection from "../../Services/apiConnection";

const ITEMS_PER_PAGE = 7;

export const History = () => {
  const [histories, setHistories] = useState([]);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput.trim());
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await apiConnection.get("/history");
        setHistories(data);
      } catch (error) {
        console.error("Erro ao carregar os history:", error);
      }
    }

    loadData();
  }, []);

  const filteredhistory = debouncedSearch
    ? histories.filter((item) => {
        const tutorName = item.tutor?.name?.toLowerCase() || "";
        return tutorName.includes(debouncedSearch.toLowerCase());
      })
    : histories;

  const totalPages = Math.ceil(filteredhistory.length / ITEMS_PER_PAGE);
  const paginatedData = filteredhistory.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );
  console.log(paginatedData);
  return (
    <Wrapper>
      <Navbar>
        <SearchInput
          type="text"
          placeholder="Buscar por nome do tutor"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            setPage(1);
          }}
        />
      </Navbar>

      <Container>
        <Table>
          <thead>
            <Tr>
              <Th>Nº Ticket</Th>
              <Th>Cliente</Th>
              <Th>Código de Rastreio</Th>
              <Th>Phone</Th>
              <Th>Data de abertura</Th>
              <Th>Data da Finalização</Th>
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
                {paginatedData.map((history) => ( 
                  <Tr key={history._id}>
                    <Td>{history?.tutor.protocol_Id}</Td>
                    <Td>{history?.tutor.name}</Td>
                    <Td>{history.tracking_code || "Sem código"}</Td>
                    <Td>{history?.tutor.phone}</Td>
                    <Td>{new Date(history.createdAt).toLocaleString()}</Td>
                    <Td>{new Date(history.createdAt).toLocaleString()}</Td>
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
