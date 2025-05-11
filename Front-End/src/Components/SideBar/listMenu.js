import CreditScoreIcon from "@mui/icons-material/CreditScore";
import InventoryIcon from "@mui/icons-material/Inventory";
import { paths } from "../../constants";
import PieChartIcon from "@mui/icons-material/PieChart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HistoryIcon from "@mui/icons-material/History";
const listMenu = [
  {
    id: 1,
    label: "Novo Envio",
    link: paths.NewItem,
    icon: AddCircleOutlineIcon,
  },
  {
    id: 2,
    label: "Estoque",
    link: paths.Stock,
    icon: InventoryIcon,
  },
  {
    id: 3,
    label: "Aguardando envio",
    link: paths.ListTicket,
    icon: CreditScoreIcon,
  },
  {
    id: 4,
    label: "Histórico",
    link: paths.History,
    icon: HistoryIcon,
  },
  {
    id: 5,
    label: "Deshboard",
    link: paths.Deshboard,
    icon: PieChartIcon,
  },
];

export default listMenu;
