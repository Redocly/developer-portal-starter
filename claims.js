const ROLES = {
  'roman@redoc.ly': 'Admin',
  'gotsijroman@gmail.com': 'Partner'
}

exports.default = async (claims, { rolesClaimName }) => {
  const role = ROLES[claims.email];
  return {
    ...claims,
    [rolesClaimName]: [ role ],
  };
};