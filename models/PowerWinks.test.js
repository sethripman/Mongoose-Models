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
      const nakmuay = new NakMuay({
        fights: 300
      });

      const { errors } = nakmuay.validateSync();
      expect(errors.style.message).toEqual('Path `style` is required.');
    });

    it('should be of type Number', () => {
      const nakmuay = new NakMuay({
        fights: 300,
        style: []
      });

      const { errors } = nakmuay.validateSync();
      expect(errors.style.message).toEqual('Cast to String failed for value "[]" at path "style"');
    });
  });
});
