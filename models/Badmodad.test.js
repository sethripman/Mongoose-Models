const Bafmodad = require('./Bafmodad');

describe('Bafmodad', () => {
  describe('tignometer rating', () => {
    it('requires a tignometer', () => {
      const bafmodad = new Bafmodad({
        coporability: 'slagnanimous',
        slugsPresent: true,
        slugFlavor: 'horrid banana',
        isSkurb: false
      });

      const { errors } = bafmodad.validateSync();
      expect(errors.tignometerRating.message).toEqual('Path `tignometerRating` is required.');
    });

    it('should be of type String', () => {
      const bafmodad = new Bafmodad({
        tignometerRating: [],
        coporability: 'slagnanimous',
        slugsPresent: true,
        slugFlavor: 'horrid banana',
        isSkurb: false
      });

      const { errors } = bafmodad.validateSync();
      expect(errors.tignometerRating.message).toEqual('Cast to String failed for value "[]" at path "tignometerRating"');
    });
  });

  describe('type', () => {
    it('requires coporability', () => {
      const bafmodad = new Bafmodad({
        tignometerRating: 'type C',
        slugsPresent: true,
        slugFlavor: 'horrid banana',
        isSkurb: false
      });

      const { errors } = bafmodad.validateSync();
      expect(errors.coporability.message).toEqual('Path `coporability` is required.');
    });

  });
});
