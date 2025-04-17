import { injectTransferTools } from "../utils";
import mediator from "./mediator";

// Add the transfer tool to point to downstream agents if needed
const agents = injectTransferTools([mediator]);

export default agents; 