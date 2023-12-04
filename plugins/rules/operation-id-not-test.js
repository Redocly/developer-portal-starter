module.exports = OperationIdNotTest;

function OperationIdNotTest() {
  return {
    Operation(operation, ctx) {
      if (operation.operationId === 'test') {
        ctx.report({
          message: `operationId must be not "test"`,
          location: ctx.location.child('operationId'),
        });
      }
    },
  };
}