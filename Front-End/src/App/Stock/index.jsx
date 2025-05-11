import React, { useState, useEffect } from "react";

import {
  Wrapper,
  Nav,
  Button,
  Modal,
  ContainerMaster,
  InputSeach,
} from "./styleStock";
import { ModalNewItemStock } from "../../Components/ModalNewItemStock";
import { Pagination } from "../../Components/Pagination";
import { ItemsTableStock } from "../../Components";

export const Stock = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput.trim());
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const handleItemAdded = () => {
    setModalVisible(false);
    setRefresh((prev) => prev + 1);
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setModalVisible(false);
    }
  };

  return (
    <ContainerMaster>
      {modalVisible && (
        <Modal onClick={handleOutsideClick}>
          <ModalNewItemStock
            onItemAdded={handleItemAdded}
            onClose={() => setModalVisible(false)} 
          />
        </Modal>
      )}

      <Nav>
        <InputSeach
          type="search"
          placeholder="Buscar item"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <span>
          <Button onClick={() => setModalVisible(true)}>Novo item</Button>
        </span>
      </Nav>

      <Wrapper>
        <ItemsTableStock searchTerm={debouncedSearch} refresh={refresh} />
        <Pagination />
      </Wrapper>
    </ContainerMaster>
  );
};
