import { selectLocalPeerRoleName, useHMSStore } from "@100mslive/react-sdk";

export const useChatRoleSelector = () => {
  // TODO error handling if env string is malformed and handle array roles
  const localRoleName = useHMSStore(selectLocalPeerRoleName);
  const roleMap = JSON.parse(process.env.REACT_APP_CHAT_ROLE_MAPS);
  console.log(roleMap);
  const fixedRole = roleMap && localRoleName ? roleMap[localRoleName] : false;
  return fixedRole;
};
