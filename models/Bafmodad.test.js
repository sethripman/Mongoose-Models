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

  describe('coporability', () => {
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

    it('should be of type String', () => {
      const bafmodad = new Bafmodad({
        tignometerRating: 'type C',
        coporability: {},
        slugsPresent: true,
        slugFlavor: 'horrid banana',
        isSkurb: false
      });

      const { errors } = bafmodad.validateSync();
      expect(errors.coporability.message).toEqual('Cast to String failed for value "{}" at path "coporability"');
    });
  });

  describe('slugs present', () => {
    it('requires a slugspresent boolean', () => {
      const bafmodad = new Bafmodad({
        tignometerRating: 'type C',
        coporability: 'slagnanimous',
        slugFlavor: 'horrid banana',
        isSkurb: false
      });

      const { errors } = bafmodad.validateSync();
      expect(errors.slugsPresent.message).toEqual('Path `slugsPresent` is required.');
    });

    it('should be of type Boolean', () => {
      const bafmodad = new Bafmodad({
        tignometerRating: 'type C',
        coporability: 'slagnanimous',
        slugsPresent: [],
        slugFlavor: 'horrid banana',
        isSkurb: false
      });

      const { errors } = bafmodad.validateSync();
      expect(errors.slugsPresent.message).toEqual('Cast to Boolean failed for value "[]" at path "slugsPresent"');
    });
  });

  describe('slugFlavor', () => {
    it('requires the slugs to have a flavor', () => {
      const bafmodad = new Bafmodad({
        tignometerRating: 'type C',
        coporability: 'slagnanimous',
        slugsPresent: true,
        isSkurb: false
      });

      const { errors } = bafmodad.validateSync();
      expect(errors.slugFlavor.message).toEqual('Path `slugFlavor` is required.');
    });

    it('should be of type String', () => {
      const bafmodad = new Bafmodad({
        tignometerRating: 'type C',
        coporability: 'slagnanimous',
        slugsPresent: true,
        slugFlavor: [],
        isSkurb: false
      });

      const { errors } = bafmodad.validateSync();
      expect(errors.slugFlavor.message).toEqual('Cast to String failed for value "[]" at path "slugFlavor"');
    });
  });

  describe('is Skurb', () => {
    it('requires a value for isSkurb', () => {
      const bafmodad = new Bafmodad({
        tignometerRating: 'type C',
        coporability: 'slagnanimous',
        slugsPresent: true,
        slugFlavor: 'horrid banana'
      });

      const { errors } = bafmodad.validateSync();
      expect(errors.isSkurb.message).toEqual('Path `isSkurb` is required.');
    });

    it('should be of type Boolean', () => {
      const bafmodad = new Bafmodad({
        tignometerRating: 'type C',
        coporability: 'slagnanimous',
        slugsPresent: true,
        slugFlavor: 'horrid banana',
        isSkurb: []
      });

      const { errors } = bafmodad.validateSync();
      expect(errors.isSkurb.message).toEqual('Cast to Boolean failed for value "[]" at path "isSkurb"');
    });
  });
});
