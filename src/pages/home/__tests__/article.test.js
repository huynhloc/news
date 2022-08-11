import { render } from '../../../utils/testUtils';

import Article from '../article';

describe('<Article />', () => {
  test('renders Article', () => {
    const { container, getByRole } = render(<Article author="hvl" title="Title" description="description" url="http://google.com" />);
    expect(container).toHaveTextContent('Title');
    expect(container).toHaveTextContent('description');
    expect(container).toHaveTextContent('hvl');
    expect(getByRole('link')).toHaveAttribute('href', 'http://google.com');
  });
});
