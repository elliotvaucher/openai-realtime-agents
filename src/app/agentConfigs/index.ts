import { AllAgentConfigsType } from "@/app/types";
import frontDeskAuthentication from "./frontDeskAuthentication";
import customerServiceRetail from "./customerServiceRetail";
import simpleExample from "./simpleExample";
import mediationSession from "./mediationSession";

export const allAgentSets: AllAgentConfigsType = {
  mediationSession,
  frontDeskAuthentication,
  customerServiceRetail,
  simpleExample,
};

export const defaultAgentSetKey = "mediationSession";
