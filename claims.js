const ROLES = {
  'roman@redoc.ly': 'Admin',
  'gotsijroman@gmail.com': 'Partner',
  'serhii@redoc.ly': 'Admin',
}

exports.default = async (claims, { ROLES_CLAIM_NAME }) => {
  const role = ROLES[claims.email];
  return {
    ...claims,
    [ROLES_CLAIM_NAME]: [ role ],
  };
};