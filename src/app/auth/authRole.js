import { USER_ROLES } from "../../constant";
const { ADMIN, GOD, OWNER, STANDARD } = USER_ROLES;

const authRoles = {
  standard: [STANDARD],
  admin: [ADMIN],
  god: [GOD],
  owner: [OWNER],
  user: [ADMIN, OWNER, GOD],
  onlyGuest: [],
};

export default authRoles;
