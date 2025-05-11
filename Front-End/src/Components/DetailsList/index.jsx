import { formatedCep } from "../../Utils";
import { Wapper } from "./stylesDetails";

export const DetailsList = ({ dataDetails }) => {
  return (
    <Wapper>
      <div>
        <h1>Detalhes do Ticket</h1>
        <span>
          <strong> Código de Rastreio: </strong>
          {dataDetails.tracking_code || "Não informado"}
        </span>
      </div>
      <hr />
      <div>
        <h3>Tutor</h3>

        <span>
          <strong>Nome: </strong> {dataDetails.tutor?.name}
        </span>
        <span>
          <strong>Email: </strong> {dataDetails.tutor?.email}
        </span>
        <span>
          <strong>Telefone: </strong> {dataDetails.tutor?.phone}
        </span>
        <span>
          <strong>Rua: </strong>
          {dataDetails.tutor?.address?.logradouro}
        </span>
        <span>
          <strong>Número: </strong>
          {dataDetails.tutor?.address?.number}
        </span>
        <span>
          <strong>CEP: </strong>
          {formatedCep(dataDetails.tutor?.address?.cep)}
        </span>
        <span>
          <strong>Cidade: </strong>
          {dataDetails.tutor?.address?.city}
        </span>
      </div>

      <hr />

      <div>
        {" "}
        <h3>Pet</h3>
        <span>
          <strong>Nome: </strong>
          {dataDetails.tutor?.data_animal?.name}
        </span>
        <span>
          <strong>Idade: </strong>
          {dataDetails.tutor?.data_animal?.age}
        </span>
        <span>
          <strong>Sexo: </strong>
          {dataDetails.tutor?.data_animal?.sex}
        </span>
        <span>
          <strong>Raça: </strong>
          {dataDetails.tutor?.data_animal?.race}
        </span>
        <span>
          <strong>Consome: </strong>
          {dataDetails.tutor?.data_animal?.product_consumer}
        </span>
        <span>
          <strong>Restrição Alimentar: </strong>
          {dataDetails.tutor?.data_animal?.dietary_restriction}
        </span>
      </div>

      <hr />
      <div>
        <h3>Caixa</h3>
        <span>
          <strong>Brinde: </strong>
          {dataDetails.gift ? dataDetails.gift.name : "Nenhum brinde"}
        </span>
        <span>
          <strong>Tamanho: </strong> {dataDetails.packageBox?.size}
        </span>
        <span>
          <strong>Quantidade: </strong>
          {dataDetails.packageBox?.quantity}
        </span>
      </div>
    </Wapper>
  );
};
