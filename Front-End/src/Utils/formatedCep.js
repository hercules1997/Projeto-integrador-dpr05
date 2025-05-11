export function formatedCep(cep) {
  if (!cep) return "";
  cep = String(cep);
  return cep
    .replace(/\D/g, "")
    .replace(/^(\d{5})(\d)/, "$1-$2")
    .slice(0, 9);
}
