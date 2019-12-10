const HiddenTreasure = require('./HiddenTreasure');

describe('HiddenTreasure', () => {

  describe('hiddenInsideTree', () => {
    it('requires whether it was hidden inside a tree', () => {
      const hiddenTreasure = new HiddenTreasure({
        guardedByGhosts: true
      });

      const { errors } = hiddenTreasure.validateSync();
      expect(errors.hiddenInsideTree.message).toEqual('Path `hiddenInsideTree` is required.');
    });

    it('should be of type Boolean', () => {
      const hiddenTreasure = new HiddenTreasure({
        hiddenInsideTree: [],
        guardedByGhosts: true
      });
      const { errors } = hiddenTreasure.validateSync();
      expect(errors.hiddenInsideTree.message).toEqual('Cast to Boolean failed for value "[]" at path "hiddenInsideTree"');
    });
  });

  describe('guardedByGhosts', () => {
    it('requires whether it is guarded by ghosts', () => {
      const hiddenTreasure = new HiddenTreasure({
        hiddenInsideTree: true
      });

      const { errors } = hiddenTreasure.validateSync();
      expect(errors.guardedByGhosts.message).toEqual('Path `guardedByGhosts` is required.');
    });

    it('should be of type Boolean', () => {
      const hiddenTreasure = new HiddenTreasure({
        hiddenInsideTree: true,
        guardedByGhosts: []
      });

      const { errors } = hiddenTreasure.validateSync();
      expect(errors.guardedByGhosts.message).toEqual('Cast to Boolean failed for value "[]" at path "guardedByGhosts"');
    });
  });
});
