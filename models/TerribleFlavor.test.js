const TerribleFlavor = require('./TerribleFlavor');

describe('TerribleFlavor', () => {

  describe('badnessRating', () => {
    it('requires a rating for badness', () => {
      const terribleFlavor = new TerribleFlavor({
        similarTo: 'Toothpaste boiled in yogurt'
      });

      const { errors } = terribleFlavor.validateSync();
      expect(errors.badnessRating.message).toEqual('Path `badnessRating` is required.');
    });

    it('should be of type Number', () => {
      const terribleFlavor = new TerribleFlavor({
        badnessRating: [],
        similarTo: 'Toothpaste boiled in yogurt'
      });
      const { errors } = terribleFlavor.validateSync();
      expect(errors.badnessRating.message).toEqual('Cast to Number failed for value "[]" at path "badnessRating"');
    });
  });

  describe('similarTo', () => {
    it('requires a flavor that it is similar to', () => {
      const terribleFlavor = new TerribleFlavor({
        badnessRating: 12
      });

      const { errors } = terribleFlavor.validateSync();
      expect(errors.similarTo.message).toEqual('Path `similarTo` is required.');
    });

    it('should be of type String', () => {
      const terribleFlavor = new TerribleFlavor({
        badnessRating: 300,
        similarTo: []
      });

      const { errors } = terribleFlavor.validateSync();
      expect(errors.similarTo.message).toEqual('Cast to String failed for value "[]" at path "similarTo"');
    });
  });
});
