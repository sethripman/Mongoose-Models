const NakMuay = require('./NakMuay');

describe('NakMuay', () => {

  describe('fights', () => {
    it('requires a number of fights', () => {
      const nakmuay = new NakMuay({
        style: 'Muay Femur'
      });

      const { errors } = nakmuay.validateSync();
      expect(errors.fights.message).toEqual('Path `fights` is required.');
    });

    it('should be of type Number', () => {
      const nakmuay = new NakMuay({
        fights: [],
        style: 'Muay Femur'
      });
      const { errors } = nakmuay.validateSync();
      expect(errors.fights.message).toEqual('Cast to Number failed for value "[]" at path "fights"');
    });
  });

  describe('style', () => {
    it('requires a fighting style', () => {
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
