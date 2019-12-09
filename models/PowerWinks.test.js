const PowerWinks = require('./PowerWinks');

describe('PowerWinks', () => {

  describe('numberOfWinks', () => {
    it('requires a number of winks', () => {
      const powerwink = new PowerWinks({
        emotionalContent: 'Saucy and Unpredictable'
      });

      const { errors } = powerwink.validateSync();
      expect(errors.numberOfWinks.message).toEqual('Path `numberOfWinks` is required.');
    });

    it('should be of type Number', () => {
      const powerwink = new PowerWinks({
        numberOfWinks: [],
        emotionalContent: 'Saucy and Unpredictable'
      });
      const { errors } = powerwink.validateSync();
      expect(errors.numberOfWinks.message).toEqual('Cast to Number failed for value "[]" at path "numberOfWinks"');
    });

    it('has a value greater than or equal to 1', () => {
      const powerwink = new PowerWinks({
        numberOfWinks: 0,
        emotionalContent: 'Saucy and Unpredictable'
      });
          
      const { errors } = powerwink.validateSync();
      expect(errors.numberOfWinks.message).toEqual('Path `numberOfWinks` (0) is less than minimum allowed value (1).');
    });

  });

  describe('emotionalContent', () => {
    it('requires an emotional content', () => {
      const powerwink = new PowerWinks({
        numberOfWinks: 10
      });

      const { errors } = powerwink.validateSync();
      expect(errors.emotionalContent.message).toEqual('Path `emotionalContent` is required.');
    });

    it('should be of type String', () => {
      const powerwink = new PowerWinks({
        numberOfWinks: 10,
        emotionalContent: []
      });

      const { errors } = powerwink.validateSync();
      expect(errors.emotionalContent.message).toEqual('Cast to String failed for value "[]" at path "emotionalContent"');
    });
  });
});
