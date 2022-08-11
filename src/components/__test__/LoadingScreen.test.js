import { render } from '../../utils/testUtils';

import LoadingScreen from '../LoadingScreen';

describe('<Article />', () => {
  test('renders Article', () => {
    const { container } = render(<LoadingScreen />);
    expect(container).toHaveTextContent('Loading');
  });
});
