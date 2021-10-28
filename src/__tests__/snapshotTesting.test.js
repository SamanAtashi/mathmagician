import renderer from 'react-test-renderer';
import Calculator from '../Components/Calculator';

describe('Snapshot testing components', () => {
  it('Calculator snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
