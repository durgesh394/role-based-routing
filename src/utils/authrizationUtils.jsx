const hasPermission = (requiredPermissions = [], userRole) => {
  if (requiredPermissions === undefined || userRole === null) {
    return true;
  }
  if (requiredPermissions?.length === 0) {
    return true;
  }
  if (userRole && Array.isArray(userRole)) {
    return authArr.some((r) => userRole.indexOf(r) >= 0);
  }
  return requiredPermissions?.includes(userRole);
};
export default hasPermission;
