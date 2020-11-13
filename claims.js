const ROLES = {
  'roman@redoc.ly': 'Admin',
  'gotsijroman@gmail.com': 'Partner',
  'serhii@redoc.ly': 'Admin',
}

exports.default = async (claims, { rolesClaimName }) => {
  const role = ROLES[claims.email];
  return {
    ...claims,
    [rolesClaimName]: [ role ],
  };
};