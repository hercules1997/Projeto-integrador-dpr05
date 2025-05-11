import { useEffect, useState } from "react";
import { Container, Quantity, Table, Td, Th, Tr } from "./styleTable";
import apiConnection from "../../Services/apiConnection";

import { Pagination } from "../index";

export const ItemsTableStock = ({ searchTerm, refresh }) => {
  const [brindes, setBrindes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadData() {
      try {
        const { data: items } = await apiConnection.get("/gifts");
        setBrindes(items);
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, [refresh]);

  const ITEMS_PER_PAGE = 8;

  const filteredBrindes = (
    searchTerm
      ? brindes.filter((item) => {
          const lowerSearch = searchTerm.toLowerCase();
          return (
            item.name.toLowerCase().includes(lowerSearch) ||
            String(item.number_nf).includes(lowerSearch) ||
            item.type.toLowerCase().includes(lowerSearch)
          );
        })
      : brindes
  ).filter((item) => item.quantity > 0);

  const totalPages = Math.ceil(filteredBrindes.length / ITEMS_PER_PAGE);
  const paginatedData = filteredBrindes.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th>Nome do Item</Th>
            <Th>Tipo</Th>
            <Th>Quantidade Disponível</Th>
            <Th>Nº da nota</Th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length === 0 ? (
            <tr>
              <Td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                Nenhum item encontrado.
              </Td>
            </tr>
          ) : (
            paginatedData.map((item) => (
              <Tr key={item._id}>
                <Td style={{ textAlign: "start" }}>{item.name}</Td>
                <Td>{item.type}</Td>
                <Td style={{ padding: "0px" }}>
                  <Quantity value={item.quantity}>{item.quantity}</Quantity>
                </Td>
                <Td>{item.number_nf}</Td>
              </Tr>
            ))
          )}
        </tbody>
      </Table>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </Container>
  );
};
